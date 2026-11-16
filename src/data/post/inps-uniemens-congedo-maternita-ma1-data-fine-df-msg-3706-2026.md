---
publishDate: 2026-11-13T08:00:00Z
author: 'Studio Lain & Partners'
title: 'Uniemens, congedo di maternità MA1: dal 2027 la data di fine "DF" (msg. 3706/2026)'
excerpt: 'Con il messaggio n. 3706 del 13 novembre 2026 l’INPS introduce nel calendario giornaliero Uniemens del codice evento MA1 il nuovo valore "DF" per l’ultimo giorno di congedo di maternità e paternità alternativo, dalla competenza gennaio 2027.'
category: 'Previdenza'
faq:
  - q: 'Cosa cambia con il messaggio INPS n. 3706/2026?'
    a: 'Nel calendario giornaliero Uniemens del codice evento MA1 (congedo di maternità e paternità alternativo), l’ultimo giorno di congedo va indicato con la data di fine in formato AAAA-MM-GG e il nuovo valore "DF" in <TipoInfoAggEvento>.'
  - q: 'Da quando si applicano le nuove regole?'
    a: 'Dal mese di competenza gennaio 2027. Chi usa il calendario differito le applica dal flusso di febbraio 2027 (eventi di gennaio 2027), non dal flusso di gennaio 2027 relativo a dicembre 2026.'
  - q: 'La data di fine va indicata anche se cade di domenica o in un festivo?'
    a: 'Sì. Il messaggio precisa che la data di fine del congedo va indicata con il valore "DF" anche se l’ultimo giorno ricade in un giorno di riposo o festivo.'
  - q: 'Cambiano i valori "DT" e "CF"?'
    a: 'No. Restano le regole del messaggio n. 2821/2023: "DT" con la data di inizio del congedo nei giorni prima della nascita e "CF" con il codice fiscale del figlio dalla nascita (o dal giorno successivo, se il congedo inizia il giorno del parto).'
  - q: 'Riguarda anche i lavoratori dello spettacolo e dello sport?'
    a: 'Per i lavoratori iscritti al FPLS e al FPSP restano ferme le istruzioni specifiche del messaggio INPS n. 1213 del 7 aprile 2026.'
source:
  name: 'INPS, messaggio n. 3706 del 13 novembre 2026'
  url: 'https://www.inps.it/it/it/inps-comunica/atti/circolari-messaggi-e-normativa/dettaglio.circolari-e-messaggi.2026.11.messaggio-numero-3706-del-13-11-2026_16415.html'
tags:
  - INPS
  - Uniemens
  - maternità
  - congedo di paternità
metadata:
  title: 'INPS msg. 3706/2026: Uniemens MA1, data fine congedo DF | Studio Lain & Partners'
  description: 'Messaggio INPS 3706/2026: nel calendario Uniemens del codice evento MA1 nuovo valore DF per l’ultimo giorno di congedo di maternità e paternità alternativo dal 2027.'
---

Con il **messaggio n. 3706 del 13 novembre 2026** l'INPS fornisce nuove istruzioni per compilare il **calendario giornaliero del flusso Uniemens** nei periodi di **congedo di maternità e di paternità alternativo** (artt. 16, 17, 20 e 28 del **D.Lgs. 26 marzo 2001, n. 151**), esposti con il **codice evento "MA1"**. La novità principale è il nuovo valore **"DF"** per indicare la **data di fine** del congedo, obbligatorio dal **mese di competenza gennaio 2027**.

Le istruzioni integrano quelle del **messaggio n. 2821 del 28 luglio 2023**, che resta valido per tutti gli altri elementi del codice MA1.

> [!INBREVE]
> Dalla competenza gennaio 2027, nel calendario giornaliero Uniemens del congedo di maternità e paternità alternativo (codice evento MA1), l'ultimo giorno di congedo va compilato con la data di fine in formato AAAA-MM-GG e il nuovo valore "DF" nell'elemento TipoInfoAggEvento, anche se è un giorno di riposo o festivo. Restano invariati "DT" (data di inizio) e "CF" (codice fiscale del figlio). Con il calendario differito si parte dal flusso di febbraio 2027.

| Elemento                     | Regola                                                              |
| ---------------------------- | ------------------------------------------------------------------- |
| Evento                       | congedo di maternità e paternità alternativo, codice evento MA1     |
| Elemento Uniemens            | `<EventoGiorn>/<InfoAggEvento>` con `<TipoInfoAggEvento>`           |
| Novità                       | valore "DF" con la data di fine del congedo nell'ultimo giorno      |
| Decorrenza                   | mese di competenza gennaio 2027                                     |
| Calendario differito         | dal flusso di febbraio 2027 (eventi di gennaio 2027)                |
| Istruzioni che restano ferme | msg. n. 2821/2023; msg. n. 1213/2026 per gli iscritti a FPLS e FPSP |

_Fonte della tabella: INPS, messaggio n. 3706 del 13 novembre 2026._

## Come si compila il calendario giornaliero del codice MA1?

Il messaggio riepiloga le regole dell'elemento `<EventoGiorn>/<InfoAggEvento>` in base al periodo di fruizione del congedo.

| Situazione                                        | Giorni                                | Contenuto di InfoAggEvento          | TipoInfoAggEvento |
| ------------------------------------------------- | ------------------------------------- | ----------------------------------- | ----------------- |
| Congedo prima della data presunta del parto       | giorni di congedo prima della nascita | data di inizio congedo (AAAA-MM-GG) | DT                |
| Mese di nascita, congedo iniziato prima del parto | giorni precedenti la nascita          | data di inizio congedo              | DT                |
| Mese di nascita, congedo iniziato prima del parto | dal giorno di nascita a fine mese     | codice fiscale del figlio           | CF                |
| Congedo che inizia il giorno della nascita        | giorno della nascita                  | data di inizio congedo              | DT                |
| Congedo che inizia il giorno della nascita        | dal giorno successivo alla nascita    | codice fiscale del figlio           | CF                |
| Ultimo giorno di congedo (novità)                 | ultimo giorno                         | data di fine congedo (AAAA-MM-GG)   | DF                |

_Fonte della tabella: INPS, messaggio n. 3706 del 13 novembre 2026 e messaggio n. 2821 del 28 luglio 2023 da esso richiamato._

La data di inizio ("DT") e la data di fine ("DF") vanno indicate **anche se ricadono in un giorno di riposo o festivo**.

## Da quando si applica?

Le nuove regole valgono dal **mese di competenza gennaio 2027**.

Per i datori di lavoro che utilizzano il **calendario differito**:

- il flusso Uniemens di **gennaio 2027**, che espone gli eventi di **dicembre 2026**, segue ancora le regole attuali;
- il valore "DF" si applica dal flusso di **febbraio 2027**, che espone gli eventi di **gennaio 2027**.

> [!NOTA]
> Restano ferme le istruzioni del messaggio n. 2821/2023 per gli altri elementi Uniemens del codice evento MA1 e quelle del **messaggio n. 1213 del 7 aprile 2026** per i lavoratori iscritti al **Fondo Pensioni Lavoratori dello Spettacolo (FPLS)** e al **Fondo Pensione Lavoratori Sportivi (FPSP)**.

## Cosa succede se il congedo prosegue nel mese successivo?

Il messaggio collega il valore "DF" all'**ultimo giorno di congedo**: va quindi esposto nel mese in cui il congedo termina. Nei mesi intermedi si continuano a usare i valori "DT" o "CF" secondo le regole riportate in tabella.

> [!ATTENZIONE]
> Per una corretta compilazione la **data di fine del congedo** deve essere nota al momento dell'elaborazione del cedolino del mese in cui il congedo termina: la lavoratrice o il lavoratore deve comunicarla per tempo, insieme alla data di nascita e al codice fiscale del figlio.

## Cosa deve fare l'azienda?

> [!AZIENDA]
>
> - Verificare con il software paghe l'aggiornamento del tracciato Uniemens per il valore "DF" sul codice evento MA1 dalla competenza gennaio 2027.
> - Per le maternità in corso a cavallo d'anno, annotare la data di fine congedo prevista e la data effettiva del parto.
> - Chiedere ai dipendenti in congedo di comunicare tempestivamente nascita, codice fiscale del figlio ed eventuali variazioni della data di fine.
> - Con il calendario differito, applicare le nuove regole dal flusso di febbraio 2027 (eventi di gennaio 2027).
> - Trasmettere allo Studio le comunicazioni e i certificati di maternità e paternità alternativa appena disponibili.
