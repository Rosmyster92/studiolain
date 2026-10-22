import fs from 'node:fs';
import os from 'node:os';
import type { AstroConfig, AstroIntegration } from 'astro';

import configBuilder, { type Config } from './utils/configBuilder';
import loadConfig from './utils/loadConfig';

const PREVIEW = process.env.SITE_PREVIEW === 'true';
const PREVIEW_SITE = process.env.PREVIEW_SITE || 'https://rosmyster92.github.io';
const PREVIEW_BASE = process.env.PREVIEW_BASE || '/studiolain';

export default ({ config: _themeConfig = 'src/config.yaml' } = {}): AstroIntegration => {
  let cfg: AstroConfig;
  return {
    name: 'astrowind-integration',

    hooks: {
      'astro:config:setup': async ({
        // command,
        config,
        // injectRoute,
        // isRestart,
        logger,
        updateConfig,
        addWatchFile,
      }) => {
        const buildLogger = logger.fork('astrowind');

        const virtualModuleId = 'astrowind:config';
        const resolvedVirtualModuleId = '\0' + virtualModuleId;

        const rawJsonConfig = (await loadConfig(_themeConfig)) as Config;

        // PREVIEW mode (SITE_PREVIEW=true): GitHub Pages project URL, noindex everywhere.
        if (PREVIEW) {
          const r = rawJsonConfig as Record<string, any>; // eslint-disable-line @typescript-eslint/no-explicit-any
          r.site = { ...(r.site || {}), site: PREVIEW_SITE, base: PREVIEW_BASE };
          r.metadata = { ...(r.metadata || {}), robots: { index: false, follow: false } };
          for (const k of ['post', 'list', 'category', 'tag']) {
            if (r.apps?.blog?.[k]) r.apps.blog[k].robots = { index: false, follow: false };
          }
          buildLogger.warn(`PREVIEW mode: ${PREVIEW_SITE}${PREVIEW_BASE} (noindex, robots Disallow)`);
        }
        // THEME=chiaro: variante chiara (fork grafico) servita sotto /chiaro.
        if (process.env.THEME === 'chiaro') {
          const r = rawJsonConfig as Record<string, any>; // eslint-disable-line @typescript-eslint/no-explicit-any
          r.ui = { ...(r.ui || {}), theme: 'light:only' };
          buildLogger.warn('THEME chiaro: light:only');
        }
        const { SITE, I18N, METADATA, APP_BLOG, UI, ANALYTICS } = configBuilder(rawJsonConfig);

        updateConfig({
          site: SITE.site,
          base: SITE.base,

          trailingSlash: SITE.trailingSlash ? 'always' : 'never',

          vite: {
            plugins: [
              {
                name: 'vite-plugin-astrowind-config',
                resolveId(id) {
                  if (id === virtualModuleId) {
                    return resolvedVirtualModuleId;
                  }
                },
                load(id) {
                  if (id === resolvedVirtualModuleId) {
                    return `
                    export const SITE = ${JSON.stringify(SITE)};
                    export const I18N = ${JSON.stringify(I18N)};
                    export const METADATA = ${JSON.stringify(METADATA)};
                    export const APP_BLOG = ${JSON.stringify(APP_BLOG)};
                    export const UI = ${JSON.stringify(UI)};
                    export const ANALYTICS = ${JSON.stringify(ANALYTICS)};
                    export const PREVIEW = ${JSON.stringify(PREVIEW)};
                    `;
                  }
                },
              },
            ],
          },
        });

        if (typeof _themeConfig === 'string') {
          addWatchFile(new URL(_themeConfig, config.root));

          buildLogger.info(`Astrowind \`${_themeConfig}\` has been loaded.`);
        } else {
          buildLogger.info(`Astrowind config has been loaded.`);
        }
      },
      'astro:config:done': async ({ config }) => {
        cfg = config;
      },

      'astro:build:done': async ({ dir, logger }) => {
        const buildLogger = logger.fork('astrowind');
        buildLogger.info('Updating `robots.txt` with `sitemap-index.xml` ...');

        try {
          // `dir` is the directory that gets deployed as static assets. With a
          // fully static build it equals `outDir`; when an adapter renders some
          // pages on demand it is `outDir/client`, so `cfg.outDir` would miss it.
          const outDir = dir;
          const publicDir = cfg.publicDir;
          const sitemapName = 'sitemap-index.xml';
          const sitemapFile = new URL(sitemapName, outDir);
          const robotsTxtFile = new URL('robots.txt', publicDir);
          const robotsTxtFileInOut = new URL('robots.txt', outDir);

          const hasIntegration =
            Array.isArray(cfg?.integrations) &&
            cfg.integrations?.find((e) => e?.name === '@astrojs/sitemap') !== undefined;
          const sitemapExists = fs.existsSync(sitemapFile);

          if (PREVIEW) {
            fs.writeFileSync(
              robotsTxtFileInOut,
              `# PREVIEW: sito di anteprima, non indicizzare${os.EOL}User-agent: *${os.EOL}Disallow: /${os.EOL}`,
              { encoding: 'utf8', flag: 'w' }
            );
            for (const f of fs.readdirSync(outDir)) {
              if (/^[a-f0-9]{32}\.txt$/.test(f)) fs.rmSync(new URL(f, outDir)); // IndexNow key not published in preview
            }
          } else if (hasIntegration && sitemapExists) {
            const robotsTxt = fs.readFileSync(robotsTxtFile, { encoding: 'utf8', flag: 'a+' });
            const sitemapUrl = new URL(sitemapName, String(new URL(cfg.base, cfg.site)));
            const pattern = /^Sitemap:(.*)$/m;

            if (!pattern.test(robotsTxt)) {
              fs.writeFileSync(robotsTxtFileInOut, `${robotsTxt}${os.EOL}${os.EOL}Sitemap: ${sitemapUrl}`, {
                encoding: 'utf8',
                flag: 'w',
              });
            } else {
              fs.writeFileSync(robotsTxtFileInOut, robotsTxt.replace(pattern, `Sitemap: ${sitemapUrl}`), {
                encoding: 'utf8',
                flag: 'w',
              });
            }
          }
        } catch (error) {
          buildLogger.warn(`Could not update robots.txt: ${error instanceof Error ? error.message : String(error)}`);
        }
      },
    },
  };
};
