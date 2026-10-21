#!/usr/bin/env node
// Notifica IndexNow (Bing, Yandex, Seznam…) le URL nuove o modificate dall'ultimo commit.
// Uso: node scripts/indexnow.mjs [baseRef]   (default HEAD~1)
import { execSync } from 'node:child_process';
import { readdirSync } from 'node:fs';

const SITE = process.env.SITE_URL || 'https://www.studiolain.com';
const key = readdirSync('public')
  .find((f) => /^[a-f0-9]{32}\.txt$/.test(f))
  ?.replace('.txt', '');
if (!key) {
  console.error('IndexNow: key file mancante in public/');
  process.exit(1);
}

const base = process.argv[2] || 'HEAD~1';
let changed = [];
try {
  changed = execSync(`git diff --name-only ${base} HEAD`, { encoding: 'utf8' }).split('\n');
} catch {
  /* primo commit */
}
const urls = new Set();
for (const f of changed) {
  const m = f.match(/^src\/data\/post\/(.+)\.mdx?$/);
  if (m) urls.add(`${SITE}/${m[1]}`);
  const pg = f.match(/^src\/pages\/([a-z0-9-]+)\.astro$/);
  if (pg) urls.add(pg[1] === 'index' ? `${SITE}/` : `${SITE}/${pg[1]}`);
}
if (urls.size) urls.add(`${SITE}/news`);
if (!urls.size) {
  console.log('IndexNow: nessuna URL da notificare');
  process.exit(0);
}

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: new URL(SITE).host, key, keyLocation: `${SITE}/${key}.txt`, urlList: [...urls] }),
});
console.log(`IndexNow: HTTP ${res.status} per ${urls.size} URL`, [...urls]);
if (res.status >= 400) process.exit(1);
