const fs = require('fs');
const path = require('path');

const pDir = 'src/pages/[lang]';
if (!fs.existsSync(pDir)) fs.mkdirSync(pDir, { recursive: true });

const pages = [
  { file: 'index.astro', name: 'IndexPage' },
  { file: 'about.astro', name: 'AboutPage' },
  { file: 'competition.astro', name: 'CompetitionPage' },
  { file: 'jury.astro', name: 'JuryPage' },
  { file: 'gallery.astro', name: 'GalleryPage' },
  { file: 'contact.astro', name: 'ContactPage' }
];

pages.forEach(p => {
  const content = `---
import ${p.name} from '../../components/pages/${p.name}.astro';

export function getStaticPaths() {
  return [
    { params: { lang: 'en' } },
    { params: { lang: 'kk' } }
  ];
}

const { lang } = Astro.params;
---
<${p.name} lang={lang} />
`;
  fs.writeFileSync(path.join(pDir, p.file), content);
});
console.log('Dynamic routes generated.');
