# Guida alle Circolari dello Studio

Categoria `Circolari Studio` (URL `/category/circolari-studio`). A differenza delle news, qui la `source` **non** è obbligatoria.

## Aggiungere una circolare

1. Copiare il PDF in `public/circolari/`, con un nome senza spazi né caratteri accentati (es. `2026-09-auto-uso-promiscuo.pdf`).
2. Creare `src/data/post/<data>-<titolo>.md`:

```yaml
---
publishDate: 2026-09-01T08:00:00Z
author: 'Studio Lain & Partners'
title: 'Auto in uso promiscuo: le novità sui fringe benefit'
excerpt: 'Sintesi in 1-2 frasi.'
category: 'Circolari Studio'
pdf: /circolari/2026-09-auto-uso-promiscuo.pdf # opzionale: mostra il pulsante "Scarica la circolare (PDF)"
tags: [circolare, fringe benefit]
# source: { name, url }  # opzionale
---
Testo della circolare (opzionale se c'è il PDF).
```

3. Fare il build e il push. Il pulsante PDF usa il base path in automatico, quindi funziona anche nell'anteprima.

## Visibilità

Per scelta dello Studio, le circolari sono **pubbliche** sul nuovo sito. Il sito è statico: tutto quello che si trova in `public/circolari/` è scaricabile da chiunque. Per una circolare riservata serve un'area protetta separata.

Le 10 circolari importate dal vecchio sito (ottobre 2026) hanno testo estratto dal PDF e pulsante di download. "Salario giusto – TEC" (22/07/2026) non aveva un PDF accessibile: va recuperata dallo Studio.
