import { SITE } from 'astrowind:config';
import { fetchPosts } from '~/utils/blog';
import { getPermalink } from '~/utils/permalinks';

export const prerender = true;

const abs = (p: string) => new URL(p, SITE.site).toString();

export const GET = async () => {
  const posts = (await fetchPosts()).slice(0, 30);
  const body = `# Studio Lain & Partners

> Studio di consulenza del lavoro a Malo (VI): amministrazione del personale, elaborazione paghe, consulenza contrattuale, previdenziale e di diritto del lavoro per aziende della provincia di Vicenza e del Veneto.

Sede: Via Marano, 8 - 36034 Malo (VI). Tel. 0445 602944. E-mail studiolain@studiolain.com. P.IVA 02569290246.

## Pagine principali

- [Chi siamo](${abs(getPermalink('/chi-siamo'))}): lo studio e il team
- [Servizi](${abs(getPermalink('/servizi'))}): consulenza del lavoro, paghe e adempimenti, gestione HR, analisi del costo del lavoro, ricerca e selezione, sicurezza sul lavoro
- [Contatti](${abs(getPermalink('/contatti'))}): recapiti e richiesta di consulenza o preventivo
- [Link utili](${abs(getPermalink('/link-utili'))}): siti istituzionali (INPS, INAIL, Ministero del Lavoro, Agenzia delle Entrate)

## News

Notizie normative selezionate e riscritte dallo studio, sempre con link alla fonte ufficiale.

- [Tutte le news](${abs(getPermalink('/news'))})
- [Lavoro](${abs(getPermalink('lavoro', 'category'))}): Ministero del Lavoro, Ispettorato, decreti, CCNL applicati dallo studio e accordi di Veneto e Vicenza
- [Previdenza](${abs(getPermalink('previdenza', 'category'))}): circolari e messaggi INPS e INAIL
- [Fisco](${abs(getPermalink('fisco', 'category'))}): prassi dell'Agenzia delle Entrate rilevante per lavoro dipendente e sostituti d'imposta
- [Feed RSS](${abs('/rss.xml')})

## Articoli recenti

${posts.map((p) => `- [${p.title}](${abs(getPermalink(p.permalink, 'post'))}) (${p.publishDate.toISOString().slice(0, 10)})${p.excerpt ? `: ${p.excerpt}` : ''}`).join('\n')}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
