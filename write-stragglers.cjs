const fs = require('fs');

function repl(file, replacements) {
    let content = fs.readFileSync(file, 'utf8');
    for (const [oldStr, newStr] of replacements) {
        if (!content.includes(oldStr)) {
            console.warn(`[WARN] Not found in ${file}: \n\t>>> ${JSON.stringify(oldStr)}`);
        }
        content = content.replace(oldStr, newStr);
    }
    fs.writeFileSync(file, content);
}

repl('src/components/pages/AboutPage.astro', [
    ['<h2>Awards & Achievements</h2>', '<h2>{t("about.awards.title")}</h2>'],
    ['<span class="section-eyebrow">Life & Exhibitions</span>', '<span class="section-eyebrow">{t("about.gallery.eyebrow")}</span>']
]);

repl('src/components/pages/CompetitionPage.astro', [
    ["const statusLabel = status === 'closed' ? 'Applications Closed' : 'Applications Open';", "const statusLabel = status === 'closed' ? t('comp.header.badge.closed') : t('comp.header.badge.open');"],
    ['<span class="result-stat__label">Works Admitted & Evaluated</span>', '<span class="result-stat__label">{t("comp.results.stat1")}</span>']
]);

console.log("Stragglers fixed.");
