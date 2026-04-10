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

// IndexPage
repl('src/components/pages/IndexPage.astro', [
    ['<a href="/competition" class="btn btn--primary">View Competition</a>', '<a href="/competition" class="btn btn--primary">{t("home.btn.competition")}</a>'],
    ['<a href="/about" class="btn btn--outline">Learn More</a>', '<a href="/about" class="btn btn--outline">{t("home.btn.about")}</a>'],
    ['<span class="section-eyebrow">About the Artist</span>', '<span class="section-eyebrow">{t("home.about.eyebrow")}</span>'],
    ['<h2>A Recognized Voice in Contemporary Visual Art</h2>', '<h2>{t("home.about.title")}</h2>'],
    ['<a href="/about" class="btn btn--outline mt-3">Read Full Biography</a>', '<a href="/about" class="btn btn--outline mt-3">{t("home.about.btn")}</a>'],
    ['<span class="highlight-card__label">Grand Prix</span>', '<span class="highlight-card__label">{t("home.highlight.1.label")}</span>'],
    ['<span class="highlight-card__desc">International Art Olympiad, Belarus</span>', '<span class="highlight-card__desc">{t("home.highlight.1.desc")}</span>'],
    ['<span class="highlight-card__label">Gold Medal</span>', '<span class="highlight-card__label">{t("home.highlight.2.label")}</span>'],
    ['<span class="highlight-card__desc">International Exhibition, USA</span>', '<span class="highlight-card__desc">{t("home.highlight.2.desc")}</span>'],
    ['<span class="highlight-card__label">KINES Record</span>', '<span class="highlight-card__label">{t("home.highlight.3.label")}</span>'],
    ['<span class="highlight-card__desc">Fine Arts, Kazakhstan</span>', '<span class="highlight-card__desc">{t("home.highlight.3.desc")}</span>'],
    ['<span class="highlight-card__label">200 Works</span>', '<span class="highlight-card__label">{t("home.highlight.4.label")}</span>'],
    ['<span class="highlight-card__desc">Evaluated in 2026 Competition</span>', '<span class="highlight-card__desc">{t("home.highlight.4.desc")}</span>'],
    ['<span class="section-eyebrow">International Competition</span>', '<span class="section-eyebrow">{t("home.cta.eyebrow")}</span>'],
    ['<h2>International Visual Arts Competition</h2>', '<h2>{t("home.cta.title")}</h2>'],
    ['<span class="stat__label">Works Evaluated</span>', '<span class="stat__label">{t("home.cta.stat1")}</span>'],
    ['<span class="stat__label">Nominations</span>', '<span class="stat__label">{t("home.cta.stat2")}</span>'],
    ['<span class="stat__label">Jury Members</span>', '<span class="stat__label">{t("home.cta.stat3")}</span>'],
    ['<a href="/competition" class="btn btn--primary mt-4">Competition Details</a>', '<a href="/competition" class="btn btn--primary mt-4">{t("home.cta.btn")}</a>'],
    ['<span>Photo of Renat Elubaev</span>', '<span>{t("photo.placeholder")}</span>']
]);

// AboutPage
repl('src/components/pages/AboutPage.astro', [
    ['<span class="page-header__eyebrow">Biography</span>', '<span class="page-header__eyebrow">{t("about.header.eyebrow")}</span>'],
    ['<h1 class="page-header__title">About Renat Elubaev</h1>', '<h1 class="page-header__title">{t("about.header.title")}</h1>'],
    ['<span class="section-eyebrow">Recognition</span>', '<span class="section-eyebrow">{t("about.awards.eyebrow")}</span>'],
    ['<h2>Awards &amp; Achievements</h2>', '<h2>{t("about.awards.title")}</h2>'],
    ['<h3 class="award-card__title">Grand Prix Laureate</h3>', '<h3 class="award-card__title">{t("about.awards.1.label")}</h3>'],
    ['<p class="award-card__desc">International Art Olympiad, Republic of Belarus</p>', '<p class="award-card__desc">{t("about.awards.1.desc")}</p>'],
    ['<h3 class="award-card__title">Gold Medal Recipient</h3>', '<h3 class="award-card__title">{t("about.awards.2.label")}</h3>'],
    ['<p class="award-card__desc">International Art Exhibition, United States</p>', '<p class="award-card__desc">{t("about.awards.2.desc")}</p>'],
    ['<h3 class="award-card__title">Record Holder</h3>', '<h3 class="award-card__title">{t("about.awards.3.label")}</h3>'],
    ['<p class="award-card__desc">KINES Register of Kazakhstan in the field of fine arts</p>', '<p class="award-card__desc">{t("about.awards.3.desc")}</p>'],
    ['<h3 class="award-card__title">Member</h3>', '<h3 class="award-card__title">{t("about.awards.4.label")}</h3>'],
    ['<p class="award-card__desc">Union of Artists of the Republic of Kazakhstan</p>', '<p class="award-card__desc">{t("about.awards.4.desc")}</p>'],
    ['<span class="section-eyebrow">Life &amp; Exhibitions</span>', '<span class="section-eyebrow">{t("about.gallery.eyebrow")}</span>'],
    ['<h2 style="margin-bottom: 1rem;">Photo Gallery</h2>', '<h2 style="margin-bottom: 1rem;">{t("about.gallery.title")}</h2>'],
    ['<h3>Get in Touch</h3>', '<h3>{t("about.contact.title")}</h3>'],
    ['<span>Astana, Republic of Kazakhstan</span>', '<span>{t("contact.info.addr")}: Astana, KZ</span>']
]);

// CompetitionPage
repl('src/components/pages/CompetitionPage.astro', [
    ['<span class="page-header__eyebrow">Competition</span>', '<span class="page-header__eyebrow">{t("comp.header.eyebrow")}</span>'],
    ['<h1 class="page-header__title">International Visual Arts Competition</h1>', '<h1 class="page-header__title">{t("comp.header.title")}</h1>'],
    ['<p class="page-header__subtitle">Named after Artist Renat Elubaev</p>', '<p class="page-header__subtitle">{t("comp.header.subtitle")}</p>'],
    ['>Applications Open<', '>{t("comp.header.badge.open")}<'],
    ['>Applications Closed<', '>{t("comp.header.badge.closed")}<'],
    ['<span class="section-eyebrow">Latest Edition</span>', '<span class="section-eyebrow">{t("comp.results.eyebrow")}</span>'],
    ['<h2>2026 Competition — Results</h2>', '<h2>{t("comp.results.title")}</h2>'],
    ['<span class="result-stat__label">Works Admitted &amp; Evaluated</span>', '<span class="result-stat__label">{t("comp.results.stat1")}</span>'],
    ['<span class="result-stat__label">Nominations</span>', '<span class="result-stat__label">{t("comp.results.stat2")}</span>'],
    ['<span class="result-stat__label">Format</span>', '<span class="result-stat__label">{t("comp.results.stat3")}</span>'],
    ['<h3 class="nominations__title">Nominations</h3>', '<h3 class="nominations__title">{t("comp.nom.title")}</h3>'],
    ['<span class="nomination-card__name">Painting</span>', '<span class="nomination-card__name">{t("comp.nom.1")}</span>'],
    ['<span class="nomination-card__name">Digital Art</span>', '<span class="nomination-card__name">{t("comp.nom.2")}</span>'],
    ['<span class="nomination-card__name">Photography</span>', '<span class="nomination-card__name">{t("comp.nom.3")}</span>'],
    ['<span class="nomination-card__name">Visual Composition</span>', '<span class="nomination-card__name">{t("comp.nom.4")}</span>'],
    ['<h3 class="timeline__title">Competition Timeline</h3>', '<h3 class="timeline__title">{t("comp.timeline.title")}</h3>'],
    ['<span class="timeline__date">Until March 7, 2026</span>', '<span class="timeline__date">{t("comp.timeline.1.date")}</span>'],
    ['<span class="timeline__label">Applications Accepted</span>', '<span class="timeline__label">{t("comp.timeline.1.label")}</span>'],
    ['<span class="timeline__date">March 9, 2026</span>', '<span class="timeline__date">{t("comp.timeline.2.date")}</span>'],
    ['<span class="timeline__label">Jury Evaluation</span>', '<span class="timeline__label">{t("comp.timeline.2.label")}</span>'],
    ['<span class="timeline__date">March 20, 2026</span>', '<span class="timeline__date">{t("comp.timeline.3.date")}</span>'],
    ['<span class="timeline__label">Results Announced</span>', '<span class="timeline__label">{t("comp.timeline.3.label")}</span>'],
    ['<span class="section-eyebrow">Standards</span>', '<span class="section-eyebrow">{t("comp.criteria.eyebrow")}</span>'],
    ['<h2>Jury Selection Criteria</h2>', '<h2>{t("comp.criteria.title")}</h2>'],
    ['<p>Confirmed professional experience in the field of visual arts, cinematography, photography, digital art, or related disciplines</p>', '<p>{t("comp.criteria.1")}</p>'],
    ['<p>Membership in professional creative associations, unions of artists, or other recognized arts organizations</p>', '<p>{t("comp.criteria.2")}</p>'],
    ['<p>Original works, exhibition history, awards, or other documented professional achievements</p>', '<p>{t("comp.criteria.3")}</p>'],
    ['<p>Recognition by the professional community in the relevant field</p>', '<p>{t("comp.criteria.4")}</p>'],
    ['<a href="/jury" class="btn btn--primary">View Jury Panel</a>', '<a href="/jury" class="btn btn--primary">{t("comp.criteria.btn")}</a>']
]);

let compAst = fs.readFileSync('src/components/pages/CompetitionPage.astro', 'utf8');
compAst = compAst.replace(/Competition results were determined collegially[\s\S]*?in electronic format\./m, "{t('comp.timeline.note')}");
compAst = compAst.replace(/The jury is formed by invitation only[\s\S]*?prior to the\s*competition date\./m, "{t('comp.criteria.intro')}");
compAst = compAst.replace(/Jury membership is not open to general applications[\s\S]*?appointed by official order\./m, "{t('comp.criteria.note')}");
fs.writeFileSync('src/components/pages/CompetitionPage.astro', compAst);

// JuryPage
repl('src/components/pages/JuryPage.astro', [
    ['<span class="page-header__eyebrow">Jury</span>', '<span class="page-header__eyebrow">{t("jury.header.eyebrow")}</span>'],
    ['<h1 class="page-header__title">Jury Panel — 2026</h1>', '<h1 class="page-header__title">{t("jury.header.title")}</h1>'],
    ['<p class="page-header__desc">Professional jury composed of recognized experts in the visual arts.</p>', '<p class="page-header__desc">{t("jury.header.desc")}</p>'],
    ['<h3>How Jury Members Are Selected</h3>', '<h3>{t("jury.note.title")}</h3>'],
    ['<p>The jury is formed by invitation only, based on professional achievements and recognized expertise. Jury members are selected by the competition organizer and appointed by official order.</p>', '<p>{t("jury.note.desc")}</p>'],
    ['<a href="/competition" class="btn btn--outline mt-3">View Competition Details</a>', '<a href="/competition" class="btn btn--outline mt-3">{t("jury.note.btn")}</a>']
]);

// GalleryPage
repl('src/components/pages/GalleryPage.astro', [
    ['<span class="page-header__eyebrow">Portfolio</span>', '<span class="page-header__eyebrow">{t("gallery.header.eyebrow")}</span>'],
    ['<h1 class="page-header__title">Gallery</h1>', '<h1 class="page-header__title">{t("gallery.header.title")}</h1>'],
    ['<p class="page-header__desc">Selected paintings, digital art, and visual compositions.</p>', '<p class="page-header__desc">{t("gallery.header.desc")}</p>'],
    ['<p>The gallery is currently empty. Artworks will appear here once uploaded via the admin panel.</p>', '<p>{t("gallery.empty")}</p>']
]);

// ContactPage
repl('src/components/pages/ContactPage.astro', [
    ['<span class="page-header__eyebrow">Contact</span>', '<span class="page-header__eyebrow">{t("contact.header.eyebrow")}</span>'],
    ['<h1 class="page-header__title">Get in Touch</h1>', '<h1 class="page-header__title">{t("contact.header.title")}</h1>'],
    ["<p class=\"page-header__desc\">Questions, inquiries, or collaboration proposals — we'd love to hear from you.</p>", "<p class=\"page-header__desc\">{t(\"contact.header.desc\")}</p>"],
    ['<h2>Contact Information</h2>', '<h2>{t("contact.info.title")}</h2>'],
    ['<p class="contact-info__role">Organizer, International Visual Arts Competition named after Artist Renat Elubaev</p>', '<p class="contact-info__role">{t("contact.info.role")}</p>'],
    ['<span class="contact-info__label">Address</span>', '<span class="contact-info__label">{t("contact.info.addr")}</span>'],
    ['<span class="contact-info__label">Phone</span>', '<span class="contact-info__label">{t("contact.info.phone")}</span>'],
    ['<span class="contact-info__label">Email</span>', '<span class="contact-info__label">{t("contact.info.email")}</span>'],
    ['<ContactForm />', '<ContactForm lang={lang} />']
]);

// ContactForm.astro
let cf = fs.readFileSync('src/components/ContactForm.astro', 'utf8');
cf = cf.replace("import { getEntry } from 'astro:content';", "import { getEntry } from 'astro:content';\nimport { useTranslations } from '../i18n/ui';\nconst { lang = 'ru' } = Astro.props;\nconst t = useTranslations(lang);");
cf = cf.replace('<h3 class="contact-form__title">Send a Message</h3>', '<h3 class="contact-form__title">{t("contact.form.title")}</h3>');
cf = cf.replace("<p class=\"contact-form__subtitle\">Have a question or inquiry? Fill out the form below and we'll get back to you.</p>", "<p class=\"contact-form__subtitle\">{t(\"contact.form.subtitle\")}</p>");
cf = cf.replace('<p>Thank you! Your message has been sent successfully. We will get back to you soon.</p>', '<p>{t("contact.form.success")}</p>');
cf = cf.replace('<label for="contact-name" class="contact-form__label">Name</label>', '<label for="contact-name" class="contact-form__label">{t("contact.form.name.label")}</label>');
cf = cf.replace('placeholder="Your full name"', 'placeholder={t("contact.form.name.placeholder")}');
cf = cf.replace('<label for="contact-email" class="contact-form__label">Email</label>', '<label for="contact-email" class="contact-form__label">{t("contact.form.email.label")}</label>');
cf = cf.replace('placeholder="your@email.com"', 'placeholder={t("contact.form.email.placeholder")}');
cf = cf.replace('<label for="contact-subject" class="contact-form__label">Subject</label>', '<label for="contact-subject" class="contact-form__label">{t("contact.form.subject.label")}</label>');
cf = cf.replace('placeholder="What is this about?"', 'placeholder={t("contact.form.subject.placeholder")}');
cf = cf.replace('<label for="contact-message" class="contact-form__label">Message</label>', '<label for="contact-message" class="contact-form__label">{t("contact.form.msg.label")}</label>');
cf = cf.replace('placeholder="Your message..."', 'placeholder={t("contact.form.msg.placeholder")}');
cf = cf.replace('Send Message', '{t("contact.form.btn")}');
cf = cf.replace('<p>Or email us directly at ', '<p>{t("contact.form.fallback")} ');
fs.writeFileSync('src/components/ContactForm.astro', cf);

console.log("Done HTML replacements.");
