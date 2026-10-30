# Guida agli articoli news (Lavoro, Previdenza, Fisco)

Questo formato vale per ogni articolo prodotto dalla routine giornaliera. Il riferimento per lunghezza e tono sono le news del feed di preselezione (di solito 150-700 parole, più paragrafi, con atti, importi, date, destinatari e procedure). Il feed serve **solo** per capire cosa è importante: il testo non si copia mai.

## 1. Selezione

1. `node scripts/news/fetch-candidates.mjs` → `scripts/news/out/candidates.json` (solo `keep: true`).
2. Si tengono solo novità **concrete** con un atto ufficiale identificabile: circolare o messaggio INPS/INAIL, D.L., D.Lgs., D.M., interpello del Ministero, nota INL, provvedimento o risposta dell'Agenzia Entrate, verbale di rinnovo di un CCNL presente in `ccnl.json`.
3. Si scartano gli articoli generici, le notizie senza atto e i temi non legati al lavoro.

## 2. Fonte primaria (obbligatoria)

- Aprire e leggere l'atto ufficiale: PDF INPS (il link `/content/dam/...pdf` si trova nella pagina di dettaglio; la pagina va resa con Chrome headless), Gazzetta Ufficiale, lavoro.gov.it, agenziaentrate.gov.it, oppure il sito di una parte firmataria per i CCNL.
- Riportare solo dati presenti nella fonte. Non inventare importi, scadenze o requisiti.
- Frontmatter `source: { name, url }` **obbligatorio**: il build fallisce se manca. Il template mostra in automatico in fondo all'articolo **"Fonte: nome — link"**. **Non** aggiungere una sezione "Fonte" nel testo.

## 3. Frontmatter

```text
---
publishDate: 2026-10-20T08:00:00Z     # data dell'atto (o della notizia, per i CCNL)
author: "Studio Lain & Partners"   # il template mostra comunque la firma del Dott. Alessandro Roso
title: "Titolo specifico con atto e oggetto"          # max ~80 caratteri
excerpt: "1-2 frasi con i dati chiave (importi, scadenze, platea)."
category: "Lavoro" | "Previdenza" | "Fisco" | "Guide"
updateDate: 2026-10-22T08:00:00Z     # solo se l'articolo viene aggiornato: è mostrata in pagina e in dateModified
faq:                                  # 4-8 domande (obbligatorie per le Guide, consigliate per le news)
  - q: "Domanda reale, come la scriverebbe un datore di lavoro?"
    a: "Risposta completa in 1-3 frasi, autosufficiente, con riferimento normativo."
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

## 4. Struttura del testo

Modello: le circolari dello studio (punti elenco + tabelle), con questa sequenza.

1. **Apertura** (1-2 paragrafi): atto, numero e data, norma di riferimento, cosa cambia e da quando. Tono istituzionale e impersonale.
2. **Riquadro "In breve"** subito dopo l'apertura: 60-90 parole che rispondono alla domanda del titolo in modo autosufficiente (chi, cosa, da quando, quanto). Sintassi:
   ```md
   > [!INBREVE]
   > Testo di 60-90 parole...
   ```
3. **Tabella riassuntiva** subito sotto il riquadro (regola / valore / decorrenza).
4. **Titoli H2/H3 a domanda**, come le domande reali degli utenti: "Chi ne ha diritto?", "Da quando si applica?", "Come si calcola?", "Cosa succede se…?".
5. **Approfondimento**: requisiti, casi particolari, procedura; tabelle ogni volta che ci sono importi, percentuali, minimi, scadenze o fasi.
6. **Riquadri** dove servono:
   - `> [!ATTENZIONE]` errori frequenti, rischi, sanzioni;
   - `> [!NOTA]` precisazioni (Nota bene);
   - `> [!AZIENDA]` "Cosa deve fare l'azienda": checklist di 3-6 azioni concrete (sostituisce la vecchia sezione "Cosa fare per l'azienda").
7. **FAQ**: 4-8 domande nel campo `faq` del frontmatter (il template le mostra in fondo e genera il FAQPage JSON-LD). Non ripeterle nel testo.
8. Fonte, firma dell'autore, indice (oltre 1.000 parole, inserito dopo apertura e riquadro "In breve", prima del primo H2) e CTA vengono aggiunti in automatico dal template. L'`excerpt` non è mostrato nella pagina dell'articolo: serve solo per elenchi e meta description, quindi l'apertura deve essere autosufficiente.

**Riferimenti precisi, sempre:** articolo, comma e lettera; numero e data dell'atto; G.U. (numero, data, eventuale S.O.) o numero e data della circolare/messaggio; data di entrata in vigore e decorrenza degli effetti.

**Lunghezza:**

- news su atti semplici: 500-900 parole;
- news su norme di peso: 900-1.500 parole;
- **Guide** (categoria `Guide`, temi complessi e duraturi): 1.500-2.500+ parole, con link alle news collegate e dalle news alla guida.

## 5. Controlli finali

- `SITE_PREVIEW=true npx -y node@22 node_modules/astro/bin/astro.mjs build` deve passare.
- Prettier ed ESLint devono passare (lo verifica la CI).
- Nessuna frase copiata dal feed di preselezione; numeri verificati sull'atto.

## 6. Regole sulle fonti (indicazioni del titolare)

1. **Minimi CCNL:** si possono prendere dai siti ufficiali dei sindacati firmatari (es. Filcams, Fisascat, Uiltucs, Fiom, Fim, Uilm) se già pubblicati in forma tabellare. Citare la pagina del sindacato come fonte.
2. **Tabelle ed esempi di calcolo:** ammessi solo se verificabili (a) in una circolare di Studio Lain & Partners (categoria Circolari Studio, `public/circolari/`), purché il testo sia chiaro e senza dubbi, oppure (b) da un sito ufficiale istituzionale (Agenzia Entrate, INPS, INAIL, Ministero, INL, Gazzetta Ufficiale…). Mai da concorrenti diretti (altri studi, Jet HR, Zucchetti, software house, portali di consulenza). Citare la fonte sotto la tabella. Se non c'è fonte ammessa, non inserire la tabella o l'esempio.
3. **Interpretazioni:** solo se la norma è inequivocabile. In caso di dubbio non interpretare né aggiungere conseguenze: riportare fedelmente ciò che dice la norma.
4. **Solo accordi firmati:** pubblicare solo contratti, accordi e verbali già sottoscritti dalle parti (o atti normativi/amministrativi già emanati). Niente piattaforme sindacali, bozze, ipotesi non ancora firmate o notizie sull'avvio/andamento di trattative. Un accordo firmato che richiama un'ipotesi già sottoscritta è ammesso.
5. **Punti dubbi: non pubblicarli.** Se fasce, scaglioni, soglie o decorrenze non sono chiari nella fonte, o la norma si presta a più letture (ordine di applicazione delle maggiorazioni, casi non disciplinati espressamente, coordinamento con altre norme), **quel punto non va pubblicato**: elencarlo nel resoconto al titolare con la citazione della norma, perché decida lui.
6. **Mai copiare concorrenti** (altri studi, portali, software house): si possono usare solo per capire quali domande coprire, mai per testi, tabelle o esempi.
7. **Mai citare le circolari dello studio come fonte** negli articoli, nelle news e nelle guide: niente "come riportato nella circolare Studio Lain…" né link ai PDF in `/circolari/` come fonte. Le circolari si usano solo per verificare; la citazione deve essere sempre alla fonte primaria o istituzionale (norma, G.U., Agenzia Entrate, INPS, INAIL, Ministero, INL, sindacato firmatario per i minimi). Un dato presente solo nella circolare e non verificabile nella fonte primaria non si pubblica: va segnalato al titolare.
8. **Disegni di legge importanti (es. legge di bilancio):** eccezione alla regola 4. Si possono pubblicare, solo dalla fonte istituzionale (comunicato del Consiglio dei Ministri, testo depositato in Senato/Camera, relazione MEF), riportando le sole misure su paghe e lavoro. Titolo e apertura devono dire chiaramente che è un disegno di legge non ancora approvato dal Parlamento e soggetto a modifiche, con un callout che annuncia l'aggiornamento dopo la pubblicazione in Gazzetta Ufficiale. Dopo la G.U. l'articolo va aggiornato con i riferimenti definitivi (numero di legge, articoli e commi, decorrenze).
