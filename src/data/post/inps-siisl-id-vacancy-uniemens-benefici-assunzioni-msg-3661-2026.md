---
publishDate: 2026-11-10T08:00:00Z
author: 'Studio Lain & Partners'
title: 'Incentivi assunzioni e SIISL: id vacancy in Uniemens dal 1° dicembre (msg. 3661/2026)'
excerpt: 'Con il messaggio n. 3661 del 10 novembre 2026 l’INPS chiude la fase sperimentale SIISL: per le assunzioni agevolate dal 1° dicembre 2026 la posizione va pubblicata prima o contestualmente e l’id vacancy di 18 cifre va esposto in Uniemens.'
category: 'Previdenza'
faq:
  - q: 'Da quando è obbligatorio pubblicare la posizione sul SIISL per avere gli incentivi?'
    a: 'Per le assunzioni effettuate dal 1° dicembre 2026. Per quelle dal 1° aprile al 30 novembre 2026 la pubblicazione resta facoltativa e la sua mancanza non incide sulle agevolazioni (INPS, messaggio n. 3661/2026, par. 2).'
  - q: 'L’obbligo vale anche per le trasformazioni a tempo indeterminato?'
    a: 'No. Il messaggio precisa che le disposizioni si applicano alle assunzioni incentivate e non alle trasformazioni da tempo determinato a tempo indeterminato, che riguardano rapporti già in essere.'
  - q: 'Cosa succede se pubblico la vacancy dopo l’assunzione?'
    a: 'Il beneficio si può fruire solo dal mese di competenza in cui è avvenuta la pubblicazione; i mesi precedenti non sono ammessi a fruizione (par. 3 e 4.1 del messaggio).'
  - q: 'Posso usare lo stesso id vacancy per più lavoratori?'
    a: 'Sì, nei limiti del numero di posti indicato nella posizione pubblicata, purché ogni assunzione sia associata alla vacancy tramite la propria Comunicazione Obbligatoria; l’id va esposto in Uniemens per ciascun lavoratore.'
  - q: 'Come si indica l’id vacancy nel flusso Uniemens?'
    a: 'Nell’elemento IdentMotivoUtilizzoCausale di InfoAggCausaliContrib, con attributo TipoIdentMotivoUtilizzo valorizzato ID_VACANCY. Per gli incentivi esposti con TipoContribuzione o TipoIncentivo si usa il nuovo codice causale VPIV.'
  - q: 'Quali controlli fa l’INPS sull’id vacancy?'
    a: 'Verifica il formato di 18 cifre, la corrispondenza con una posizione pubblicata sul SIISL, la coincidenza del codice fiscale del datore con quello della vacancy e del lavoratore con quello della CO associata. L’esito può essere positivo, negativo o in verifica.'
source:
  name: 'INPS, messaggio n. 3661 del 10 novembre 2026'
  url: 'https://www.inps.it/it/it/inps-comunica/atti/circolari-messaggi-e-normativa/dettaglio.circolari-e-messaggi.2026.11.messaggio-numero-3661-del-10-11-2026_16411.html'
tags:
  - INPS
  - SIISL
  - incentivi assunzioni
  - Uniemens
  - comunicazioni obbligatorie
metadata:
  title: 'INPS msg. 3661/2026: SIISL e id vacancy in Uniemens | Studio Lain & Partners'
  description: 'Messaggio INPS 3661/2026: dal 1° dicembre 2026 incentivi alle assunzioni solo con vacancy pubblicata sul SIISL e id di 18 cifre in Uniemens, codice VPIV.'
---

Con il **messaggio n. 3661 del 10 novembre 2026** l'INPS comunica la **fine della fase sperimentale** e il passaggio all'applicazione **a regime** dell'obbligo di pubblicare sul **SIISL** (Sistema Informativo per l'Inclusione Sociale e Lavorativa) le posizioni lavorative collegate ad assunzioni per cui si chiedono **benefici contributivi**. La norma è l'**art. 14, commi da 1 a 4, del D.L. 31 ottobre 2025, n. 159**, convertito dalla **L. 29 dicembre 2025, n. 198**; le modalità operative sono nel **D.M. 5 ottobre 2026, n. 134**, pubblicato il 29 ottobre 2026 nella sezione "Pubblicità legale" del sito del Ministero del Lavoro.

Il messaggio fornisce le istruzioni per esporre nel flusso **Uniemens** l'identificativo della posizione (**id vacancy**), che collega vacancy, Comunicazione Obbligatoria e agevolazione. Sul decreto attuativo si veda anche il nostro articolo [Bonus assunzioni e SIISL: dal 1° dicembre 2026 pubblicazione preventiva obbligatoria](/siisl-benefici-contributivi-dm-134-2026).

> [!INBREVE]
> Per le assunzioni agevolate effettuate dal 1° dicembre 2026 l'incentivo spetta solo se la posizione lavorativa è pubblicata sul SIISL prima o al momento dell'assunzione e se l'id vacancy di 18 cifre, associato alla CO del lavoratore, è indicato in Uniemens. Se la pubblicazione è successiva, il beneficio decorre dal mese di pubblicazione. Restano escluse le assunzioni fino al 30 novembre 2026 e le trasformazioni a tempo indeterminato. Per molti incentivi è istituito il nuovo codice causale VPIV.

| Elemento                                | Regola                                                            |
| --------------------------------------- | ----------------------------------------------------------------- |
| Assunzioni 1° aprile - 30 novembre 2026 | Pubblicazione facoltativa, nessun effetto sulle agevolazioni      |
| Assunzioni dal 1° dicembre 2026         | Pubblicazione preventiva o contestuale, id vacancy in Uniemens    |
| Pubblicazione dopo l'assunzione         | Beneficio solo dal mese di competenza della pubblicazione         |
| Trasformazioni TD/TI                    | Escluse dall'obbligo                                              |
| Formato id vacancy                      | 18 cifre                                                          |
| Nuovo codice causale                    | VPIV, "Verifica Presenza dell'Id Vacancy, DM MLPS 5 ottobre 2026" |
| ListaPosPA                              | Nuovo elemento da compilare dal periodo di denuncia dicembre 2026 |

_Fonte della tabella: INPS, messaggio n. 3661 del 10 novembre 2026._

## Quali assunzioni sono interessate?

L'obbligo riguarda le **assunzioni effettuate dal 1° dicembre 2026**. Per quelle dal 1° aprile al 30 novembre 2026 la pubblicazione resta facoltativa e sono esclusi i benefici legati ad assunzioni anteriori al 1° dicembre 2026, **indipendentemente dalla data della domanda**.

> [!NOTA]
> L'obbligo vale per le **assunzioni incentivate**, non per le **trasformazioni** da tempo determinato a tempo indeterminato, perché queste riguardano rapporti già in essere.

## Per quali incentivi serve l'id vacancy?

Per i datori che usano la sezione **PosContributiva** il messaggio elenca, tra gli altri:

| Beneficio                                                         | Codice Uniemens    |
| ----------------------------------------------------------------- | ------------------ |
| Beneficiari ADI e SFL (D.L. n. 48/2023, artt. 10 e 12, c. 10)     | EADI - ESFL        |
| Donne vittime di violenza, Reddito di libertà (L. n. 213/2023)    | ERLI               |
| Esoneri under 30, legge di bilancio 2018 (L. n. 205/2017)         | GECO - GALT        |
| Donne svantaggiate e over 50 disoccupati (L. n. 92/2012, art. 4)  | TC 55              |
| Percettori NASpI (L. n. 92/2012, art. 2, c. 10-bis)               | ASPI               |
| Lavoratori AdR CIGS (D.Lgs. n. 148/2015, art. 24-bis)             | BADR               |
| Lavoratori in CIGS da almeno 3 mesi (D.L. n. 148/1993)            | TC 86 - S4         |
| Lavoratori con disabilità (L. n. 68/1999, art. 13)                | DI79 - DI67 - DI45 |
| Detenuti e internati (L. n. 193/2000)                             | TC 79              |
| Sostituzione lavoratori in congedo (D.Lgs. n. 151/2001, art. 4)   | TC 82 - 68         |
| Bonus donne Decreto Lavoro 2026 (D.L. n. 62/2026, art. 1)         | ED26 - EDZS        |
| Bonus giovani Decreto Lavoro 2026 (D.L. n. 62/2026, art. 2)       | EG26 - EGZS        |
| Bonus ZES Decreto Lavoro 2026 (D.L. n. 62/2026, art. 3)           | EZE1               |
| Donne prive di impiego madri di almeno tre figli (L. n. 199/2025) | ELM3               |

_Fonte della tabella: INPS, messaggio n. 3661 del 10 novembre 2026, par. 2._

L'elenco sarà integrato se verranno introdotti nuovi incentivi alle assunzioni. Per i benefici con **domanda preventiva** sul "Portale delle Agevolazioni (ex DiResCo)", l'id vacancy va indicato **già nella domanda**; l'INPS darà una comunicazione specifica sull'adeguamento dei moduli.

## Come si collegano vacancy, CO e Uniemens?

La posizione pubblicata deve essere **coerente con la Comunicazione Obbligatoria** (datore di lavoro e lavoratore assunto). L'id vacancy deve:

- essere composto da **18 cifre**;
- corrispondere a una posizione **effettivamente pubblicata** sul SIISL;
- essere coerente con il datore di lavoro o il soggetto contribuente del flusso Uniemens;
- essere **associato**, tramite il SIISL, alla **CO di assunzione** del lavoratore agevolato.

Lo stesso id può servire per **più assunzioni**, nei limiti dei posti indicati nella vacancy, se ciascuna è associata con la propria CO. Il SIISL consente anche l'associazione massiva e la consultazione dei benefici potenzialmente applicabili.

## Come si compila il flusso Uniemens?

- **Incentivi con InfoAggCausaliContrib** (ED26, EDZS, EZE1, ELM3, EADI, ESFL, EG26, EGZS, ERLI): oltre alla compilazione già prevista, va indicato l'id vacancy in `<IdentMotivoUtilizzoCausale>`, con attributo `<TipoIdentMotivoUtilizzo>` = `ID_VACANCY`.
- **Incentivi con TipoContribuzione** (55, 68, 79, 82, 86, S4) **o TipoIncentivo** (GECO, GALT, ASPI, DI79, DI67, DI45, BADR): va aggiunta la sezione `<InfoAggCausaliContrib>` con il nuovo codice causale **VPIV**, l'id vacancy in `<IdentMotivoUtilizzoCausale>` con `ID_VACANCY`, `<AnnoMeseRif>` uguale alla competenza della denuncia e `<ImportoAnnoMeseRif>` pari a **0**.
- **ListaPosPA** (privati con lavoratori iscritti alla Gestione pubblica): id vacancy nel nuovo elemento `<IdentMotivoUtilizzoCausale>` di `<RecuperoSgravi>`, dal periodo di denuncia **dicembre 2026**.
- **PosAgri** (datori agricoli): id vacancy nel nuovo elemento `<IdentMotivoUtilizzoCausale>` di `<AgevolazioneAgr>`.

> [!ATTENZIONE]
> Il controllo sulla presenza dell'id vacancy avviene **già in validazione** del flusso del mese di assunzione. Assenza dell'id, formato errato o mancata corrispondenza con la vacancy comportano il **mancato riconoscimento** del beneficio (o dei mesi anteriori alla pubblicazione). L'esito positivo vale per le fruizioni successive dello stesso datore, lavoratore e id vacancy.

## Cosa deve fare l'azienda?

> [!AZIENDA]
>
> - Dal 1° dicembre 2026 comunicare allo Studio **prima dell'assunzione** ogni inserimento per cui si vuole un incentivo, per pubblicare la vacancy in tempo.
> - Verificare l'accesso al SIISL o la delega allo Studio come intermediario.
> - Associare sul SIISL ogni CO di assunzione alla vacancy corretta, controllando i posti disponibili.
> - Conservare l'id vacancy di 18 cifre insieme alla pratica di assunzione, perché serve in Uniemens per tutte le mensilità agevolate.
> - Per gli incentivi con domanda sul Portale delle Agevolazioni, attendere le istruzioni INPS sul nuovo campo dei moduli.
