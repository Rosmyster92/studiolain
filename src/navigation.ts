import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Chi siamo',
      href: getPermalink('/chi-siamo'),
    },
    {
      text: 'Servizi',
      href: getPermalink('/servizi'),
    },
    {
      text: 'News',
      href: getBlogPermalink(),
    },
    {
      text: 'Link utili',
      href: getPermalink('/link-utili'),
    },
    {
      text: 'Contatti',
      href: getPermalink('/contatti'),
    },
  ],
  actions: [{ text: 'Contattaci', href: getPermalink('/contatti') }],
};

export const footerData = {
  links: [
    {
      title: 'Studio',
      links: [
        { text: 'Home', href: getPermalink('/') },
        { text: 'Chi siamo', href: getPermalink('/chi-siamo') },
        { text: 'Servizi', href: getPermalink('/servizi') },
        { text: 'News', href: getBlogPermalink() },
        { text: 'Link utili', href: getPermalink('/link-utili') },
      ],
    },
    {
      title: 'Servizi',
      links: [
        { text: 'Consulenza del lavoro', href: getPermalink('/servizi') },
        { text: 'Gestione paghe', href: getPermalink('/servizi') },
        { text: 'HR / personale', href: getPermalink('/servizi') },
        { text: 'Costi e politiche retributive', href: getPermalink('/servizi') },
        { text: 'Ricerca e selezione', href: getPermalink('/servizi') },
        { text: 'Sicurezza sul lavoro', href: getPermalink('/servizi') },
      ],
    },
    {
      title: 'Link utili',
      links: [
        { text: 'INPS', href: 'https://www.inps.it/' },
        { text: 'Ministero del Lavoro', href: 'https://www.lavoro.gov.it/' },
        { text: 'INAIL', href: 'https://www.inail.it/' },
        { text: 'Il Sole 24 Ore', href: 'https://www.ilsole24ore.com/' },
      ],
    },
    {
      title: 'Contatti',
      links: [
        { text: 'Via Marano, 8 — Malo (VI)', href: getPermalink('/contatti') },
        { text: '0445 602944', href: 'tel:+390445602944' },
        { text: 'studiolain@studiolain.com', href: 'mailto:studiolain@studiolain.com' },
        { text: 'Scrivici', href: getPermalink('/contatti') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Privacy', href: 'https://privacy.teleconsul.it/home/tcweb' },
    { text: 'Link utili', href: getPermalink('/link-utili') },
  ],
  socialLinks: [{ ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') }],
  footNote: `
    © 2026 <a class="text-blue-600 underline dark:text-muted" href="https://www.studiolain.com">Studio Lain & Partners</a> · Consulenza del Lavoro · Malo (VI)
  `,
};
