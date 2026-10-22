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
      text: 'Novità normative',
      href: getBlogPermalink(),
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
        { text: 'Novità normative', href: getBlogPermalink() },
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
      title: 'Contatti',
      links: [
        { text: 'Via Marano, 8 — Malo (VI)', href: getPermalink('/contatti') },
        { text: '0445 602944', href: 'tel:+390445602944' },
        { text: 'studiolain@studiolain.com', href: 'mailto:studiolain@studiolain.com' },
        { text: 'Scrivici', href: getPermalink('/contatti') },
      ],
    },
  ],
  secondaryLinks: [{ text: 'Privacy', href: getPermalink('/privacy') }],
  socialLinks: [{ ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') }],
  footNote: `
    © 2026 <a class="text-blue-600 underline dark:text-muted" href="https://www.studiolain.com">Studio Lain & Partners</a> · Consulenza del Lavoro · Malo (VI)
  `,
};
