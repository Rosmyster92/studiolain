#!/usr/bin/env node
// Preselezione feed (via studiolain.com WP REST) -> candidati JSON.
// Usa SOLO data, oggetto e riferimento alla fonte primaria citata: il testo del feed non viene mai riusato.
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const cfg = JSON.parse(await readFile(join(here, 'ccnl.json'), 'utf8'));
const PER_PAGE = Number(process.env.NEWS_COUNT || 30);
const API = `https://www.studiolain.com/wp-json/wp/v2/posts?per_page=${PER_PAGE}&_fields=id,date,content`;

const strip = (h) =>
  h
    .replace(/<[^>]+>/g, ' ')
    .replace(/&#8217;|&rsquo;/g, "'")
    .replace(/&#8230;/g, '…')
    .replace(/&nbsp;|&#160;/g, ' ')
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(n))
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();

const AREE_ALTRE = [
  'piemonte',
  'torino',
  'lombardia',
  'milano',
  'bergamo',
  'brescia',
  'liguria',
  'genova',
  'emilia',
  'romagna',
  'bologna',
  'modena',
  'toscana',
  'firenze',
  'umbria',
  'marche',
  'macerata',
  'ancona',
  'lazio',
  'roma',
  'abruzzo',
  'molise',
  'campania',
  'napoli',
  'puglia',
  'bari',
  'basilicata',
  'calabria',
  'sicilia',
  'sardegna',
  'trentino',
  'bolzano',
  'trento',
  'friuli',
  'trieste',
  'udine',
  "valle d'aosta",
  'padova',
  'verona',
  'treviso',
  'venezia',
  'rovigo',
  'belluno',
  'calabria centrale',
  'pavia',
  'como',
  'varese',
  'monza',
  'cremona',
  'mantova',
  'parma',
  'reggio',
  'piacenza',
  'ferrara',
  'ravenna',
  'rimini',
  'pisa',
  'lucca',
  'siena',
  'perugia',
  'pescara',
  'salerno',
  'caserta',
  'lecce',
  'taranto',
  'foggia',
  'palermo',
  'catania',
  'cagliari',
];
// Area per ente emittente (ordine = priorità di riconoscimento sulla fonte citata, poi sul testo).
const NAZ = [
  [/agenzia delle entrate/i, 'Agenzia delle Entrate', 'fisco'],
  [/\binps\b/i, 'INPS', 'previdenza'],
  [/\binail\b/i, 'INAIL', 'previdenza'],
  [/ministero del lavoro|ministro del lavoro/i, 'Ministero del Lavoro', 'lavoro'],
  [/ispettorato|\binl\b/i, 'Ispettorato Nazionale del Lavoro', 'lavoro'],
  [
    /\bd\.\s?l\.|\bd\.\s?lgs|decreto[- ]legge|gazzetta ufficiale|\bl\. n\.|consiglio dei ministri/i,
    'Gazzetta Ufficiale / Governo',
    'lavoro',
  ],
];
// Temi societari/tributari puri: esclusi salvo collegamento con lavoro, paghe o ritenute.
const OFF_TOPIC =
  /\bires\b|tuir.{0,40}interessi|imposta di registro|crisi d.impresa|esdebitazione|sovraindebitat|partite iva inattive|made in italy|ministero delle imprese|\bmimit\b|nuove imprese a tasso zero|rottamazione|\biva\b/i;
const LABOUR =
  /lavorator|dipendent|retribuzion|busta paga|cedolin|sostituto d.imposta|ritenut|\bcu\b|certificazione unica|730|tfr|premi(o)? di risultato|welfare aziendale|fringe|assunzion|contributi previdenziali|contribuzione/i;
const isCcnl = (t) =>
  /\bccnl\b|\bccrl\b|\bcipl\b|rinnovo|contratto (collettivo|integrativo)|accordo (integrativo|di rinnovo|territoriale|regionale|provinciale)|verbale di accordo|minimi retributivi|tabelle retributive|parti (stipulanti|sociali)|oo\.ss\.|piattaforma|sindacati|ente bilaterale|associazioni datoriali/i.test(
    t
  );

function sourceRef(text) {
  const m = [
    ...text.matchAll(
      /\(([^()]*(?:INPS|Inps|INAIL|Agenzia|Ministero|Ispettorato|Presidenza|D\.L\.|D\.Lgs|L\. n\.)[^()]*)\)/g
    ),
  ];
  return m.length ? m[0][1] : null;
}

function classify(post) {
  const text = strip(post.content?.rendered || '');
  const oggetto = (post.content?.rendered.match(/class="Oggetto">([\s\S]*?)<\/p>/) || [])[1];
  const low = text.toLowerCase();
  const item = {
    id: post.id,
    date: post.date.slice(0, 10),
    oggetto: oggetto ? strip(oggetto) : text.slice(0, 120) + '…',
    fonte_citata: sourceRef(text),
  };
  const naz =
    item.fonte_citata &&
    /INPS|Inps|INAIL|Agenzia|Ministero|Ispettorato|Presidenza|D\.L\.|D\.Lgs|L\. n\./.test(item.fonte_citata);
  if (isCcnl(text) && !naz) {
    const has = (k) => new RegExp(`(^|[^a-zà-ù])${k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 'i').test(low);
    const score = (c) => c.keywords.reduce((n, k) => n + (has(k) ? 1 : 0), 0);
    const ccnl = cfg.ccnl
      .map((c) => [c, score(c)])
      .filter(([, n]) => n > 0)
      .sort((a, b) => b[1] - a[1])[0]?.[0];
    const altra = AREE_ALTRE.find((a) => new RegExp(`\\b${a}\\b`, 'i').test(low));
    const nostra = cfg.territorio.keywords.some((k) => low.includes(k));
    if (!ccnl) return { ...item, tipo: 'ccnl', keep: false, motivo: 'CCNL non applicato dallo studio' };
    if (altra && !nostra)
      return {
        ...item,
        tipo: 'ccnl',
        ccnl: ccnl.id,
        keep: false,
        motivo: `accordo territoriale fuori zona (${altra})`,
      };
    return {
      ...item,
      tipo: 'ccnl',
      ccnl: ccnl.id,
      categoria: 'lavoro',
      keep: true,
      motivo: `CCNL seguito: ${ccnl.nome}`,
    };
  }
  const n = (item.fonte_citata && NAZ.find(([re]) => re.test(item.fonte_citata))) || NAZ.find(([re]) => re.test(text));
  const head = text.slice(0, 500);
  if (n && OFF_TOPIC.test(head) && !LABOUR.test(head))
    return {
      ...item,
      tipo: 'norma-nazionale',
      ente: n[1],
      keep: false,
      motivo: `tema societario/tributario non legato al lavoro (${n[1]})`,
    };
  if (n)
    return {
      ...item,
      tipo: 'norma-nazionale',
      ente: n[1],
      categoria: n[2],
      keep: true,
      motivo: `norma/prassi nazionale (${n[1]})`,
    };
  return { ...item, tipo: 'altro', keep: false, motivo: 'né fonte istituzionale nazionale né CCNL seguito' };
}

const res = await fetch(API, { headers: { 'user-agent': 'studiolain-news-bot' } });
if (!res.ok) {
  console.error(`Feed HTTP ${res.status}`);
  process.exit(1);
}
const out = (await res.json()).map(classify);
const file = join(here, 'out', 'candidates.json');
await mkdir(dirname(file), { recursive: true });
await writeFile(file, JSON.stringify({ generated: new Date().toISOString(), items: out }, null, 2));
for (const i of out)
  console.log(
    `${i.keep ? 'KEEP' : 'DROP'} ${i.date} [${i.categoria || i.tipo}] ${i.oggetto.slice(0, 70)} — ${i.motivo}${i.fonte_citata ? ' — ' + i.fonte_citata : ''}`
  );
