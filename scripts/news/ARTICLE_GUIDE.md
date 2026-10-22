# Guida agli articoli news (Lavoro, Previdenza, Fisco)

Questo formato vale per ogni articolo prodotto dalla routine giornaliera. Il riferimento per lunghezza e tono sono le news Teleconsul pubblicate su studiolain.com (di solito 150-700 parole, più paragrafi, con atti, importi, date, destinatari e procedure). Teleconsul serve **solo** per capire cosa è importante: il testo non si copia mai.

## 1. Selezione

1. `node scripts/news/fetch-candidates.mjs` → `scripts/news/out/candidates.json` (solo `keep: true`).
2. Si tengono solo novità **concrete** con un atto ufficiale identificabile: circolare o messaggio INPS/INAIL, D.L., D.Lgs., D.M., interpello del Ministero, nota INL, provvedimento o risposta dell'Agenzia Entrate, verbale di rinnovo di un CCNL presente in `ccnl.json`.
3. Si scartano gli articoli generici, le notizie senza atto e i temi non legati al lavoro.

## 2. Fonte primaria (obbligatoria)

- Aprire e leggere l'atto ufficiale: PDF INPS (il link `/content/dam/...pdf` si trova nella pagina di dettaglio; la pagina va resa con Chrome headless), Gazzetta Ufficiale, lavoro.gov.it, agenziaentrate.gov.it, oppure il sito di una parte firmataria per i CCNL.
- Riportare solo dati presenti nella fonte. Non inventare importi, scadenze o requisiti.
- Frontmatter `source: { name, url }` **obbligatorio**: il build fallisce se manca. Il template mostra in automatico in fondo all'articolo **"Fonte: nome — link"**. **Non** aggiungere una sezione "Fonte" nel testo.

## 3. Frontmatter

```yaml
---
publishDate: 2026-10-20T08:00:00Z     # data dell'atto (o della notizia, per i CCNL)
author: "Studio Lain & Partners"
title: "Titolo specifico con atto e oggetto"          # max ~80 caratteri
excerpt: "1-2 frasi con i dati chiave (importi, scadenze, platea)."
category: "Lavoro" | "Previdenza" | "Fisco"
source:
  name: "INPS, messaggio n. 3343 del 20 ottobre 2026"
  url: "https://www.inps.it/..."
tags: [INPS, ...]
metadata:
  title: "... | Studio Lain & Partners"
  description: "150-160 caratteri, con atto e parole chiave."
---
```

Categoria in base all'ente: Agenzia Entrate → Fisco; INPS/INAIL → Previdenza; Ministero, INL, decreti sul lavoro e CCNL → Lavoro.

## 4. Struttura del testo (350-700 parole)

1. **Apertura** (1-2 paragrafi): atto, numero e data, norma di riferimento, cosa cambia e da quando. Tono istituzionale e impersonale.
2. **## In sintesi**: 4-7 punti con i dati chiave in grassetto.
3. **Approfondimento** (uno o più `##`): requisiti, casi particolari, procedura, esempi di calcolo.
4. **Tabella** ogni volta che ci sono importi, percentuali, minimi, scadenze o fasi.
5. **## Cosa fare per l'azienda**: 3-5 azioni concrete per il datore di lavoro, in forma di elenco.
6. Fonte e CTA vengono aggiunte in automatico dal template.

## 5. Controlli finali

- `SITE_PREVIEW=true npx -y node@22 node_modules/astro/bin/astro.mjs build` deve passare.
- Prettier ed ESLint devono passare (lo verifica la CI).
- Nessuna frase copiata da Teleconsul; numeri verificati sull'atto.

## 6. Regole sulle fonti (indicazioni del titolare)

1. **Minimi CCNL:** si possono prendere dai siti ufficiali dei sindacati firmatari (es. Filcams, Fisascat, Uiltucs, Fiom, Fim, Uilm) se già pubblicati in forma tabellare. Citare la pagina del sindacato come fonte.
2. **Tabelle ed esempi di calcolo:** ammessi solo se tratti (a) da una circolare di Studio Lain & Partners (categoria Circolari Studio, `public/circolari/`), purché il testo sia chiaro e senza dubbi, oppure (b) da un sito ufficiale istituzionale (Agenzia Entrate, INPS, INAIL, Ministero, INL, Gazzetta Ufficiale…). Mai da concorrenti diretti (altri studi, Jet HR, Zucchetti, software house, portali di consulenza). Citare la fonte sotto la tabella. Se non c'è fonte ammessa, non inserire la tabella o l'esempio.
3. **Interpretazioni:** solo se la norma è inequivocabile. In caso di dubbio non interpretare né aggiungere conseguenze: riportare fedelmente ciò che dice la norma.
