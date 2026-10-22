// Autore degli articoli (dati da https://www.studiolain.com/team/, ottobre 2026).
export const AUTHOR = {
  name: 'Dott. Alessandro Roso',
  jobTitle: 'Consulente del Lavoro',
  anchor: 'alessandro-roso',
  bio: 'Consulente del Lavoro iscritto all’Ordine dei Consulenti del Lavoro di Vicenza al n. 872 dal 2021, socio di Studio Lain & Partners a Malo (VI). Si occupa di consulenza aziendale ed elaborazione dei cedolini paga.',
  credential: 'Iscritto all’Ordine dei Consulenti del Lavoro di Vicenza, n. 872 (dal 2021)',
};
export const personSlug = (name: string) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
