const fs = require('fs');
const path = require('path');

const pagesDir = 'src/pages';
const compPagesDir = 'src/components/pages';
if (!fs.existsSync(compPagesDir)) fs.mkdirSync(compPagesDir, { recursive: true });

const pages = [
  { file: 'index.astro', name: 'IndexPage', entry: 'home' },
  { file: 'about.astro', name: 'AboutPage', entry: 'about' },
  { file: 'competition.astro', name: 'CompetitionPage', entry: 'competition' },
  { file: 'jury.astro', name: 'JuryPage', isCollection: true, coll: 'jury' },
  { file: 'gallery.astro', name: 'GalleryPage', isCollection: true, coll: 'gallery' },
  { file: 'contact.astro', name: 'ContactPage', noEntry: true }
];

pages.forEach(p => {
  const filePath = path.join(pagesDir, p.file);
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf8');

  // Fix imports
  content = content.replace(/from '\.\.\/layouts\//g, "from '../../layouts/");
  content = content.replace(/from '\.\.\/components\//g, "from '../");

  // Inject lang handling
  if (!content.includes('const { lang } = Astro.props;')) {
    content = content.replace('---\n', "---\nconst { lang } = Astro.props || { lang: 'ru' };\n");
  }

  // Rewrite BaseLayout usage
  content = content.replace(/<BaseLayout/g, '<BaseLayout lang={lang}');

  // Data fetching logic
  if (p.entry) {
    const fetchRegex = new RegExp(`const ${p.entry}Entry = await getEntry\\('pages', '${p.entry}'\\);`);
    content = content.replace(fetchRegex, 
      `const entryId = lang === 'ru' ? '${p.entry}' : \`\${lang}/${p.entry}\`;\nconst ${p.entry}Entry = await getEntry('pages', entryId);\nif (!${p.entry}Entry) return Astro.redirect('/404');`
    );
  } else if (p.isCollection) {
    const fetchRegex = new RegExp(`await getCollection\\('${p.coll}'\\);`);
    content = content.replace(fetchRegex, 
      `await getCollection('${p.coll}', ({ id }) => lang === 'ru' ? !id.includes('/') : id.startsWith(\`\${lang}/\`));`
    );
  }

  fs.writeFileSync(path.join(compPagesDir, p.name + '.astro'), content);

  // Write new wrapper page for default route (ru)
  const wrapperContent = `---
import ${p.name} from '../components/pages/${p.name}.astro';
---
<${p.name} lang="ru" />
`;
  fs.writeFileSync(filePath, wrapperContent);
  console.log('Processed', p.file);
});
