import getReadingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';
import type { RehypePlugin, RemarkPlugin } from '@astrojs/markdown-remark';

export const readingTimeRemarkPlugin: RemarkPlugin = () => {
  return function (tree, file) {
    const textOnPage = toString(tree);
    const readingTime = Math.ceil(getReadingTime(textOnPage).minutes);

    if (typeof file?.data?.astro?.frontmatter !== 'undefined') {
      file.data.astro.frontmatter.readingTime = readingTime;
    }
  };
};

// Avvolge ogni tabella (anche annidata o da HTML delle circolari) in un contenitore scorrevole.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const wrapTables = (node: any) => {
  if (!node || !Array.isArray(node.children)) return;
  for (let i = 0; i < node.children.length; i++) {
    const child = node.children[i];
    if (child.type === 'element' && child.tagName === 'table') {
      node.children[i] = {
        type: 'element',
        tagName: 'div',
        properties: { className: ['tbl-scroll'], tabIndex: 0, role: 'region', ariaLabel: 'Tabella scorrevole' },
        children: [child],
      };
    } else wrapTables(child);
  }
};
export const responsiveTablesRehypePlugin: RehypePlugin = () => (tree) => wrapTables(tree);

/**
 * Riquadri (callout) in Markdown, sintassi tipo GitHub:
 *   > [!ATTENZIONE]
 *   > testo...
 * Tipi: ATTENZIONE, NOTA (Nota bene), AZIENDA (Cosa deve fare l'azienda), INBREVE (In breve).
 */
const CALLOUTS: Record<string, string> = {
  ATTENZIONE: 'Attenzione',
  NOTA: 'Nota bene',
  AZIENDA: "Cosa deve fare l'azienda",
  INBREVE: 'In breve',
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const visitCallouts = (node: any) => {
  if (!node || !Array.isArray(node.children)) return;
  for (const child of node.children) {
    if (child.type === 'element' && child.tagName === 'blockquote') {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const p = child.children.find((c: any) => c.type === 'element');
      const t = p?.children?.[0];
      const m = t?.type === 'text' ? /^\s*\[!(\w+)\]\s*/.exec(t.value) : null;
      if (m && CALLOUTS[m[1].toUpperCase()]) {
        const kind = m[1].toUpperCase();
        t.value = t.value.slice(m[0].length);
        if (!t.value && p.children[1]?.type === 'element' && p.children[1].tagName === 'br') p.children.splice(0, 2);
        child.tagName = 'aside';
        child.properties = { className: ['callout', `callout-${kind.toLowerCase()}`] };
        child.children.unshift({
          type: 'element',
          tagName: 'p',
          properties: { className: ['callout-title'] },
          children: [{ type: 'text', value: CALLOUTS[kind] }],
        });
        continue;
      }
    }
    visitCallouts(child);
  }
};
export const calloutsRehypePlugin: RehypePlugin = () => (tree) => visitCallouts(tree);

/** Link interni assoluti nel Markdown ("/pagina"): aggiunge la base del sito (anteprima /studiolain, /studiolain/chiaro). */
const MD_BASE =
  process.env.SITE_PREVIEW === 'true' ? (process.env.PREVIEW_BASE || '/studiolain').replace(/\/$/, '') : '';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const visitLinks = (node: any) => {
  if (!node) return;
  if (node.type === 'element' && node.tagName === 'a' && typeof node.properties?.href === 'string') {
    const h: string = node.properties.href;
    if (MD_BASE && h.startsWith('/') && !h.startsWith('//') && !h.startsWith(MD_BASE + '/'))
      node.properties.href = MD_BASE + h;
  }
  if (Array.isArray(node.children)) node.children.forEach(visitLinks);
};
export const baseLinksRehypePlugin: RehypePlugin = () => (tree) => visitLinks(tree);
