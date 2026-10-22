// Profili riportati fedelmente da https://www.studiolain.com/team/ (ottobre 2026).
export interface Area {
  title: string;
  items: string[];
}
export interface Person {
  name: string;
  role: string;
  photo?: string;
  initials: string;
  profileTitle: string;
  profile: string;
  areas: Area[];
  extraTitle?: string;
  extra?: string[];
}
export const team: Person[] = [
  {
    name: 'Paola Lain',
    role: 'Socio/Titolare',
    photo: 'images/studio/paola-lain.webp',
    initials: 'PL',
    profileTitle: 'Professione',
    profile:
      'Consulente del Lavoro iscritta all’ordine dei consulenti del lavoro di Vicenza al n. 583 dal 1996. Laureata in economia ed organizzazione aziendale, dal 1997 a tutt’oggi svolge l’attività di consulente del lavoro con studio in Malo (VI) – Via Marano, 8. L’attività è inerente alla consulenza aziendale e l’elaborazione dei cedolini paga di azienda private e società partecipate pubbliche.',
    areas: [
      {
        title: 'Consulenza in Diritto del Lavoro e Gestione delle Risorse Umane',
        items: [
          'Assistenza e consulenza in materia giuslavoristica, gestione contrattuale e amministrativa del personale.',
        ],
      },
      {
        title: 'Amministrazione del Personale',
        items: [
          'Elaborazione di buste paga, gestione contributiva, inquadramento aziendale, gestione di assunzioni, cessazioni, malattie, maternità, infortuni e procedimenti disciplinari.',
        ],
      },
      {
        title: 'Ottimizzazione dei Costi e Pianificazione del Budget',
        items: ['Analisi dei costi del personale, pianificazione e ottimizzazione dei processi aziendali.'],
      },
      {
        title: 'Ammortizzatori Sociali e Welfare Aziendale',
        items: [
          'Gestione di procedure per Cassa Integrazione Guadagni (CIG), Fondo di Solidarietà Bilaterale (FSBA), accordi collettivi aziendali, premi di produttività e conversione in piani di welfare.',
        ],
      },
      {
        title: 'Relazioni Sindacali',
        items: [
          'Negoziazione con le organizzazioni sindacali, redazione di accordi collettivi aziendali assistenza nei licenziamenti individuali e plurimi, consulenze tecniche di parte.',
        ],
      },
      {
        title: 'Contenzioso Amministrativo',
        items: ['Gestione del contenzioso con organi di vigilanza ed enti ispettivi.'],
      },
    ],
    extraTitle: 'Ruoli collaterali',
    extra: [
      'Commissario nella Commissione di Certificazione dell’Ordine dei Consulenti del Lavoro di Vicenza dal 2021 ad oggi',
      'Sindaco del Comune di Malo dal 31/05/2015 al 20/09/2020',
      'Docente nei corsi per addetti paghe-contabilità (ENAC) nella sede di Vicenza, Schio e Bassano del Grappa (2012-2015)',
      'Consigliere dell’Associazione Nazionale Consulenti del Lavoro sezione di Vicenza (2002-2015)',
      'Consigliere nel Consiglio di Amministrazione della Società Eurointerim Servizi S.P.A. (2007-2012)',
      'Socia fondatrice della Società Eurointerim Servizi SPA dal 2003',
    ],
  },
  {
    name: 'Massimo Lain',
    role: 'Socio/Titolare',
    photo: 'images/studio/massimo-lain.webp',
    initials: 'ML',
    profileTitle: 'Profilo Professionale',
    profile:
      'Laureato in Economia e Commercio presso l’Università degli studi di Verona, con una solida formazione in ambito economico e gestionale. Cofondatore dello Studio Lain nel 1997, ho anche maturato una vasta esperienza lavorativa nelle risorse umane presso Eurointerim spa, dove dal 2000 ricopro il ruolo di responsabile di filiale. In questa posizione, coordino il team, gestisco la selezione del personale e le attività commerciali, e mi occupo della stesura dei contratti e delle pratiche amministrative. Ho completato numerosi corsi di formazione, tra cui praticantati per dottore commercialista e consulente del lavoro, e ho ottenuto certificazioni su tematiche di sicurezza e prevenzione aziendale. Come Operatore del Mercato del Lavoro Accreditato fornisco servizi di counseling, bilancio delle competenze e orientamento professionale.',
    areas: [
      {
        title: 'Ricerca e selezione del personale',
        items: [
          'Analizzare i fabbisogni delle aziende clienti.',
          'Definire job profile',
          'Ricercare candidati attraverso diversi canali (database, portali online, social network, giornali, ecc.).',
          'Condurre colloqui individuali e di gruppo.',
          'Valutare competenze, soft skills e potenziale dei candidati.',
        ],
      },
      {
        title: 'Attività amministrativa e contrattuale',
        items: [
          'Redigere e gestire contratti di lavoro (somministrazione, staff leasing, intermediazione, selezione).',
          'Supportare nella predisposizione e gestione delle paghe del personale somministrato.',
          'Curare gli aspetti normativi e legali legati al rapporto di lavoro.',
        ],
      },
      {
        title: 'Politiche attive e servizi al lavoro',
        items: [
          'Accogliere e orientare i candidati (counseling, bilancio competenze, orientamento professionale).',
          'Attivare percorsi finanziati da enti pubblici e fondi interprofessionali.',
          'Favorire l’inserimento e il reinserimento lavorativo.',
        ],
      },
      {
        title: 'Attività commerciale',
        items: [
          'Gestire i rapporti con le aziende clienti.',
          'Presentare i servizi dell’agenzia (somministrazione, staff leasing, ricerca e selezione, formazione, outplacement, politiche attive).',
          'Negoziare condizioni commerciali e stipulare contratti di fornitura.',
        ],
      },
      {
        title: 'Gestione di filiale',
        items: [
          'Coordinare e supervisionare il team di filiale (consulenti, recruiter, amministrativi).',
          'Verificare la corretta applicazione delle procedure aziendali e delle normative vigenti.',
        ],
      },
    ],
  },
  {
    name: 'Alessandro Roso',
    role: 'Socio/Titolare',
    photo: 'images/studio/alessandro-roso.webp',
    initials: 'AR',
    profileTitle: 'Professione',
    profile:
      'Consulente del Lavoro iscritto all’ordine dei consulenti del lavoro di Vicenza al n. 872 dal 2021. Laurea magistrale in Direzione Aziendale presso l’Università degli Studi di Verona 2014-2017 e Laurea Triennale in Economia Aziendale presso l’Università degli Studi di Verona 2011-2014. Dal 2021 a tutt’oggi svolge l’attività di consulente del lavoro con studio in Malo (VI) – Via Marano, 8. L’attività è inerente alla consulenza aziendale e l’elaborazione dei cedolini paga di azienda private e società partecipate pubbliche.',
    areas: [
      {
        title: 'Ottimizzazione dei Costi e Pianificazione del Budget',
        items: [
          'Analisi e riduzione del costo del personale',
          'Analisi dei costi del personale, pianificazione e ottimizzazione dei processi aziendali.',
        ],
      },
      {
        title: 'Consulenza in Diritto del Lavoro e Gestione delle Risorse Umane',
        items: [
          'Assistenza e consulenza in materia giuslavoristica, gestione contrattuale e amministrativa del personale.',
        ],
      },
      {
        title: 'Amministrazione del Personale',
        items: [
          'Elaborazione di buste paga, gestione contributiva, inquadramento aziendale, gestione di assunzioni, cessazioni, malattie, maternità, infortuni e procedimenti disciplinari di Aziende Private e Società Partecipate Pubbliche.',
        ],
      },
      {
        title: 'Ammortizzatori Sociali e Welfare Aziendale',
        items: [
          'Gestione di procedure per Cassa Integrazione Guadagni (CIG), Fondo di Solidarietà Bilaterale (FSBA), accordi collettivi aziendali, premi di produttività e conversione in piani di welfare.',
        ],
      },
      {
        title: 'Relazioni Sindacali e Contenzioso Amministrativo',
        items: [
          'Negoziazione con le organizzazioni sindacali, gestione delle controversie e redazione di accordi collettivi aziendali.',
        ],
      },
    ],
    extraTitle: 'Esperienza professionale',
    extra: [
      'Praticantato dal 2017 al 2020 presso Studio Lain Consulenza del Lavoro',
      'IT Compliance & Risk Management Intern presso KPMG Monaco di Baviera | 2016 — Audit di compliance IT aziendale e analisi delle strategie IT; valutazione dei rischi e controllo dei processi IT aziendali',
    ],
  },
];
