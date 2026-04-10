const fs = require('fs');
const path = require('path');

const compPagesDir = 'src/components/pages';

const seoMap = {
  'IndexPage.astro': 'home',
  'AboutPage.astro': 'about',
  'CompetitionPage.astro': 'competition',
  'JuryPage.astro': 'jury',
  'GalleryPage.astro': 'gallery',
  'ContactPage.astro': 'contact',
};

for (const [file] of Object.entries(seoMap)) {
  const filePath = path.join(compPagesDir, file);
  if (!fs.existsSync(filePath)) continue;
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (!content.includes('const t = useTranslations')) {
    const parts = content.split('---');
    // parts[0] is empty, parts[1] is frontmatter, parts[2] is template
    if (parts.length >= 3) {
      parts[1] = parts[1] + `\nconst t = useTranslations(lang);\n`;
      content = parts.join('---');
      fs.writeFileSync(filePath, content);
      console.log(`Fixed t in ${file}`);
    }
  }
}
