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

for (const [file, key] of Object.entries(seoMap)) {
  const filePath = path.join(compPagesDir, file);
  if (!fs.existsSync(filePath)) continue;
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Make sure t is imported and available
  if (!content.includes('useTranslations')) {
    content = content.replace('---', `---\nimport { useTranslations } from '../../i18n/ui';\n`);
  }
  if (!content.includes('const t = useTranslations(lang)')) {
    content = content.replace('---\n\n<BaseLayout', `const t = useTranslations(lang);\n---\n\n<BaseLayout`);
  }

  // Replace hardcoded title and description with t('seo.${key}.title')
  content = content.replace(/title="[^"]+"/g, `title={t('seo.${key}.title')}`);
  content = content.replace(/description="[^"]+"/g, `description={t('seo.${key}.desc')}`);
  
  fs.writeFileSync(filePath, content);
  console.log(`Injected SEO to ${file}`);
}
