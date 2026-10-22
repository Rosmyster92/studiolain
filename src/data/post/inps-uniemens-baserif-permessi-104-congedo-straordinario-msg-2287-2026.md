---
publishDate: 2026-07-07T08:00:00Z
author: 'Studio Lain & Partners'
title: 'UniEmens: elemento BaseRif obbligatorio per permessi 104 e congedo straordinario da settembre 2026'
excerpt: "Dalla competenza di settembre 2026 i conguagli L300-L308 per permessi legge 104 e congedo straordinario richiedono l'elemento BaseRif con la retribuzione teorica (msg. INPS 2287/2026)."
category: 'Previdenza'
source:
  name: 'INPS, messaggio n. 2287 del 7 luglio 2026'
  url: 'https://www.inps.it/it/it/inps-comunica/atti/circolari-messaggi-e-normativa/dettaglio.circolari-e-messaggi.2026.07.messaggio-numero-2287-del-07-07-2026_15312.html'
tags:
  - INPS
  - UniEmens
  - legge 104
  - congedo straordinario
metadata:
  title: 'UniEmens BaseRif obbligatorio per conguagli 104, msg. INPS 2287/2026 | Studio Lain & Partners'
  description: "Messaggio INPS 2287/2026: da settembre 2026 obbligatorio l'elemento BaseRif nei conguagli L300-L308 per permessi legge 104, congedo straordinario e prolungamento congedo parentale."
---

Con il **messaggio n. 2287 del 7 luglio 2026** l'INPS modifica le istruzioni di compilazione del flusso **UniEmens** (sezione "PosContributiva") per i **conguagli** dei permessi ex articolo 33 della legge n. 104/1992 e del **congedo straordinario** ex articolo 42, comma 5, del D.Lgs. n. 151/2001.

**Dalla competenza di settembre 2026** diventa obbligatorio l'elemento **&lt;BaseRif&gt;** della sezione a valenza contributiva **&lt;InfoAggCausaliContrib&gt;**, finora facoltativo. L'obiettivo indicato dall'Istituto è una maggiore coerenza nella valorizzazione dei conguagli.

## In sintesi

- **Decorrenza:** mese di competenza **settembre 2026**.
- **Elemento:** &lt;BaseRif&gt; in &lt;InfoAggCausaliContrib&gt;.
- **Permessi legge 104:** si indica la retribuzione teorica (&lt;RetribTeorica&gt;) **del mese dell'evento**.
- **Congedo straordinario e prolungamento del congedo parentale:** si indica la retribuzione teorica **del mese precedente** all'evento.
- **Assunti e cessati nel mese di rilevazione:** si usa la retribuzione teorica del **mese interamente lavorato**.

## I codici interessati

| Codice conguaglio | Evento | Oggetto                                                                                                             |
| ----------------- | ------ | ------------------------------------------------------------------------------------------------------------------- |
| L300              | YA1    | Prolungamento del congedo parentale fino a 8 anni del bambino con disabilità grave (art. 33, c. 1, D.Lgs. 151/2001) |
| L301              | YA2    | Prolungamento del congedo parentale tra 8 e 14 anni del bambino                                                     |
| L302              | XB3    | Permessi orari per figli con disabilità grave fino al terzo anno (art. 42, c. 1, D.Lgs. 151/2001)                   |
| L303              | RA1    | Permessi mensili giornalieri o orari per assistere familiari con disabilità grave (art. 33, c. 3, L. 104/1992)      |
| L306              | QB5    | Permessi orari del lavoratore con disabilità grave (art. 33, c. 6)                                                  |
| L307              | TA1    | Giorni di permesso mensili del lavoratore con disabilità grave (art. 33, c. 6)                                      |
| L308              | MD1    | Congedo straordinario per assistere familiari con disabilità grave (art. 42, c. 5, D.Lgs. 151/2001)                 |

_Fonte della tabella: INPS, messaggio n. 2287/2026._

## Gli altri dati da controllare

Il messaggio chiede ai datori di lavoro di compilare con cura **tutti gli elementi** del flusso: oltre al nuovo &lt;BaseRif&gt;, la retribuzione teorica, i **giorni retribuiti**, la **percentuale di part-time**, il **codice fiscale del dante causa** (la persona assistita) e la corretta **associazione tra codice evento e codice conguaglio**. Restano valide le istruzioni generali della circolare INPS n. 39 del 4 aprile 2023.

## Cosa fare per l'azienda

- **Comunicare per tempo allo Studio** i permessi 104 e i congedi straordinari del mese, con i giustificativi.
- **Indicare il codice fiscale** della persona assistita per ogni lavoratore che fruisce del beneficio.
- **Segnalare** assunzioni e cessazioni a metà mese di dipendenti che usano questi permessi, perché cambia il mese da prendere come base.
