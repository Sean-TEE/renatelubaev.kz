const fs = require('fs');
const path = require('path');

const compPagesDir = 'src/components/pages';
const pages = [
  { file: 'IndexPage.astro', entry: 'home' },
  { file: 'AboutPage.astro', entry: 'about' },
  { file: 'CompetitionPage.astro', entry: 'competition' },
  { file: 'JuryPage.astro', coll: 'jury' },
  { file: 'GalleryPage.astro', coll: 'gallery' }
];

pages.forEach(p => {
  const filePath = path.join(compPagesDir, p.file);
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');

  if (p.entry) {
    const searchString = `const ${p.entry}Entry = await getEntry('pages', entryId);
if (!${p.entry}Entry) return Astro.redirect('/404');`;
    const replacement = `let ${p.entry}Entry = await getEntry('pages', entryId);
if (!${p.entry}Entry) {
  ${p.entry}Entry = await getEntry('pages', '${p.entry}');
}
if (!${p.entry}Entry) return Astro.redirect('/404');`;
    content = content.replace(searchString, replacement);
  } else if (p.coll) {
    const searchRegex = new RegExp(`const ${p.coll}Collection = await getCollection\\('${p.coll}', .*?\\);`);
    const match = content.match(searchRegex);
    if (match) {
      const replacement = `let ${p.coll}Collection = await getCollection('${p.coll}', ({ id }) => lang === 'ru' ? !id.includes('/') : id.startsWith(\`\${lang}/\`));
if (!${p.coll}Collection || ${p.coll}Collection.length === 0) {
  ${p.coll}Collection = await getCollection('${p.coll}', ({ id }) => !id.includes('/'));
}`;
      content = content.replace(searchRegex, replacement);
    }
  }

  // Also replace kk with kz globally in these files if any
  content = content.replace(/\/kk\//g, '/kz/');

  fs.writeFileSync(filePath, content);
  console.log('Processed', p.file);
});
