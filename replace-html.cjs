const fs = require('fs');

function repl(file, replacements) {
    let content = fs.readFileSync(file, 'utf8');
    for (const [oldStr, newStr] of replacements) {
        if (!content.includes(oldStr)) {
            console.warn(`[WARN] Not found in ${file}:`, oldStr.substring(0, 30));
        }
        content = content.replace(oldStr, newStr);
    }
    fs.writeFileSync(file, content);
}

// IndexPage.astro
repl('src/components/pages/IndexPage.astro', [
    ['View Competition', "{t('home.btn.competition')}"],
    ['Learn More', "{t('home.btn.about')}"],
    ['About the Artist', "{t('home.about.eyebrow')}"],
    ['A Recognized Voice in Contemporary Visual Art', "{t('home.about.title')}"],
    ['Read Full Biography', "{t('home.about.btn')}"],
    ['Grand Prix', "{t('home.highlight.1.label')}"],
    ['International Art Olympiad, Belarus', "{t('home.highlight.1.desc')}"],
    ['Gold Medal', "{t('home.highlight.2.label')}"],
    ['International Exhibition, USA', "{t('home.highlight.2.desc')}"],
    ['KINES Record', "{t('home.highlight.3.label')}"],
    ['Fine Arts, Kazakhstan', "{t('home.highlight.3.desc')}"],
    ['200 Works', "{t('home.highlight.4.label')}"],
    ['Evaluated in 2026 Competition', "{t('home.highlight.4.desc')}"],
    ['International Competition', "{t('home.cta.eyebrow')}"],
    ['International Visual Arts Competition', "{t('home.cta.title')}"],
    ['Works Evaluated', "{t('home.cta.stat1')}"],
    ['Nominations', "{t('home.cta.stat2')}"],
    ['Jury Members', "{t('home.cta.stat3')}"],
    ['Competition Details', "{t('home.cta.btn')}"],
    ['Photo of Renat Elubaev', "{t('photo.placeholder')}"]
]);

// AboutPage.astro
repl('src/components/pages/AboutPage.astro', [
    ['<span class="page-header__eyebrow">Biography</span>', '<span class="page-header__eyebrow">{t(\'about.header.eyebrow\')}</span>'],
    ['<h1 class="page-header__title">About Renat Elubaev</h1>', '<h1 class="page-header__title">{t(\'about.header.title\')}</h1>'],
    ['<span class="section-eyebrow">Recognition</span>', '<span class="section-eyebrow">{t(\'about.awards.eyebrow\')}</span>'],
    ['<h2>Awards &amp; Achievements</h2>', '<h2>{t(\'about.awards.title\')}</h2>'],
    ['<h3>Grand Prix Laureate</h3>', '<h3>{t(\'about.awards.1.label\')}</h3>'],
    ['<p>International Art Olympiad, Republic of Belarus</p>', '<p>{t(\'about.awards.1.desc\')}</p>'],
    ['<h3 class="award-card__title">Grand Prix Laureate</h3>', '<h3 class="award-card__title">{t(\'about.awards.1.label\')}</h3>'],
    ['<p class="award-card__desc">International Art Olympiad, Republic of Belarus</p>', '<p class="award-card__desc">{t(\'about.awards.1.desc\')}</p>'],
    ['<h3 class="award-card__title">Gold Medal Recipient</h3>', '<h3 class="award-card__title">{t(\'about.awards.2.label\')}</h3>'],
    ['<p class="award-card__desc">International Art Exhibition, United States</p>', '<p class="award-card__desc">{t(\'about.awards.2.desc\')}</p>'],
    ['<h3 class="award-card__title">Record Holder</h3>', '<h3 class="award-card__title">{t(\'about.awards.3.label\')}</h3>'],
    ['<p class="award-card__desc">KINES Register of Kazakhstan in the field of fine arts</p>', '<p class="award-card__desc">{t(\'about.awards.3.desc\')}</p>'],
    ['<h3 class="award-card__title">Member</h3>', '<h3 class="award-card__title">{t(\'about.awards.4.label\')}</h3>'],
    ['<p class="award-card__desc">Union of Artists of the Republic of Kazakhstan</p>', '<p class="award-card__desc">{t(\'about.awards.4.desc\')}</p>'],
    ['<span class="section-eyebrow">Life &amp; Exhibitions</span>', '<span class="section-eyebrow">{t(\'about.gallery.eyebrow\')}</span>'],
    ['<h2 style="margin-bottom: 1rem;">Photo Gallery</h2>', '<h2 style="margin-bottom: 1rem;">{t(\'about.gallery.title\')}</h2>'],
    ['<h3>Get in Touch</h3>', '<h3>{t(\'about.contact.title\')}</h3>'],
    ['<span>Astana, Republic of Kazakhstan</span>', '<span>{t(\'contact.info.addr\')}: Astana, KZ</span>']
]);

// CompetitionPage.astro
repl('src/components/pages/CompetitionPage.astro', [
    ['<span class="page-header__eyebrow">Competition</span>', '<span class="page-header__eyebrow">{t(\'comp.header.eyebrow\')}</span>'],
    ['<h1 class="page-header__title">International Visual Arts Competition</h1>', '<h1 class="page-header__title">{t(\'comp.header.title\')}</h1>'],
    ['<p class="page-header__subtitle">Named after Artist Renat Elubaev</p>', '<p class="page-header__subtitle">{t(\'comp.header.subtitle\')}</p>'],
    ['>Applications Open<', '>{t(\'comp.header.badge.open\')}<'],
    ['>Applications Closed<', '>{t(\'comp.header.badge.closed\')}<'],
    ['<span class="section-eyebrow">Latest Edition</span>', '<span class="section-eyebrow">{t(\'comp.results.eyebrow\')}</span>'],
    ['<h2>2026 Competition — Results</h2>', '<h2>{t(\'comp.results.title\')}</h2>'],
    ['>Works Admitted &amp; Evaluated<', '>{t(\'comp.results.stat1\')}<'],
    ['>Nominations<', '>{t(\'comp.results.stat2\')}<'],
    ['>Format<', '>{t(\'comp.results.stat3\')}<'],
    ['<h3 class="nominations__title">Nominations</h3>', '<h3 class="nominations__title">{t(\'comp.nom.title\')}</h3>'],
    ['>Painting<', '>{t(\'comp.nom.1\')}<'],
    ['>Digital Art<', '>{t(\'comp.nom.2\')}<'],
    ['>Photography<', '>{t(\'comp.nom.3\')}<'],
    ['>Visual Composition<', '>{t(\'comp.nom.4\')}<'],
    ['<h3 class="timeline__title">Competition Timeline</h3>', '<h3 class="timeline__title">{t(\'comp.timeline.title\')}</h3>'],
    ['>Until March 7, 2026<', '>{t(\'comp.timeline.1.date\')}<'],
    ['>Applications Accepted<', '>{t(\'comp.timeline.1.label\')}<'],
    ['>March 9, 2026<', '>{t(\'comp.timeline.2.date\')}<'],
    ['>Jury Evaluation<', '>{t(\'comp.timeline.2.label\')}<'],
    ['>March 20, 2026<', '>{t(\'comp.timeline.3.date\')}<'],
    ['>Results Announced<', '>{t(\'comp.timeline.3.label\')}<'],
    ['Competition results were determined collegially by the jury on the basis of artistic\\n          originality, compositional approach, technical execution, and creative concept. Winners\\n          received official diplomas in electronic format.', '{t(\'comp.timeline.note\')}'],
    ['Competition results were determined collegially by the jury on the basis of artistic\r\n          originality, compositional approach, technical execution, and creative concept. Winners\r\n          received official diplomas in electronic format.', '{t(\'comp.timeline.note\')}'],
    ['<span class="section-eyebrow">Standards</span>', '<span class="section-eyebrow">{t(\'comp.criteria.eyebrow\')}</span>'],
    ['<h2>Jury Selection Criteria</h2>', '<h2>{t(\'comp.criteria.title\')}</h2>'],
    ['The jury is formed by invitation only, based on the professional achievements and recognized\\n        expertise of candidates. The jury composition is confirmed by official order prior to the\\n        competition date.', '{t(\'comp.criteria.intro\')}'],
    ['The jury is formed by invitation only, based on the professional achievements and recognized\r\n        expertise of candidates. The jury composition is confirmed by official order prior to the\r\n        competition date.', '{t(\'comp.criteria.intro\')}'],
    ['Confirmed professional experience in the field of visual arts, cinematography, photography, digital art, or related disciplines', '{t(\\\'comp.criteria.1\\\')}'],
    ['Membership in professional creative associations, unions of artists, or other recognized arts organizations', '{t(\\\'comp.criteria.2\\\')}'],
    ['Original works, exhibition history, awards, or other documented professional achievements', '{t(\\\'comp.criteria.3\\\')}'],
    ['Recognition by the professional community in the relevant field', '{t(\\\'comp.criteria.4\\\')}'],
    ['Jury membership is not open to general applications. Jury members are selected by the\\n        competition organizer on the basis of their professional standing and appointed by official order.', '{t(\'comp.criteria.note\')}'],
    ['Jury membership is not open to general applications. Jury members are selected by the\r\n        competition organizer on the basis of their professional standing and appointed by official order.', '{t(\'comp.criteria.note\')}'],
    ['>View Jury Panel<', '>{t(\'comp.criteria.btn\')}<']
]);

// JuryPage.astro
repl('src/components/pages/JuryPage.astro', [
    ['<span class="page-header__eyebrow">Jury</span>', '<span class="page-header__eyebrow">{t(\'jury.header.eyebrow\')}</span>'],
    ['<h1 class="page-header__title">Jury Panel — 2026</h1>', '<h1 class="page-header__title">{t(\'jury.header.title\')}</h1>'],
    ['<p class="page-header__desc">Professional jury composed of recognized experts in the visual arts.</p>', '<p class="page-header__desc">{t(\'jury.header.desc\')}</p>'],
    ['<h3>How Jury Members Are Selected</h3>', '<h3>{t(\'jury.note.title\')}</h3>'],
    ['<p>The jury is formed by invitation only, based on professional achievements and recognized expertise. Jury members are selected by the competition organizer and appointed by official order.</p>', '<p>{t(\'jury.note.desc\')}</p>'],
    ['>View Competition Details<', '>{t(\'jury.note.btn\')}<']
]);

// GalleryPage.astro
repl('src/components/pages/GalleryPage.astro', [
    ['<span class="page-header__eyebrow">Portfolio</span>', '<span class="page-header__eyebrow">{t(\'gallery.header.eyebrow\')}</span>'],
    ['<h1 class="page-header__title">Gallery</h1>', '<h1 class="page-header__title">{t(\'gallery.header.title\')}</h1>'],
    ['<p class="page-header__desc">Selected paintings, digital art, and visual compositions.</p>', '<p class="page-header__desc">{t(\'gallery.header.desc\')}</p>'],
    ['The gallery is currently empty. Artworks will appear here once uploaded via the admin panel.', '{t(\'gallery.empty\')}']
]);

// ContactPage.astro
repl('src/components/pages/ContactPage.astro', [
    ['<span class="page-header__eyebrow">Contact</span>', '<span class="page-header__eyebrow">{t(\'contact.header.eyebrow\')}</span>'],
    ['<h1 class="page-header__title">Get in Touch</h1>', '<h1 class="page-header__title">{t(\'contact.header.title\')}</h1>'],
    ['Questions, inquiries, or collaboration proposals — we\\\'d love to hear from you.', '{t(\\\'contact.header.desc\\\')}'],
    ['<h2>Contact Information</h2>', '<h2>{t(\'contact.info.title\')}</h2>'],
    ['<p class="contact-info__role">Organizer, International Visual Arts Competition named after Artist Renat Elubaev</p>', '<p class="contact-info__role">{t(\'contact.info.role\')}</p>'],
    ['<span class="contact-info__label">Address</span>', '<span class="contact-info__label">{t(\'contact.info.addr\')}</span>'],
    ['<span class="contact-info__label">Phone</span>', '<span class="contact-info__label">{t(\'contact.info.phone\')}</span>'],
    ['<span class="contact-info__label">Email</span>', '<span class="contact-info__label">{t(\'contact.info.email\')}</span>'],
    ['<h3 class="contact-form__title">Send a Message</h3>', '<h3 class="contact-form__title">{t(\'contact.form.title\')}</h3>'],
    ['<p class="contact-form__subtitle">Have a question or inquiry? Fill out the form below and we\\\'ll get back to you.</p>', '<p class="contact-form__subtitle">{t(\\\'contact.form.subtitle\\\')}</p>'],
    ['<p>Thank you! Your message has been sent successfully. We will get back to you soon.</p>', '<p>{t(\'contact.form.success\')}</p>'],
    ['>Name<', '>{t(\'contact.form.name.label\')}<'],
    ['placeholder="Your full name"', 'placeholder={t(\'contact.form.name.placeholder\')}'],
    ['>Email<', '>{t(\'contact.form.email.label\')}<'],
    ['placeholder="your@email.com"', 'placeholder={t(\'contact.form.email.placeholder\')}'],
    ['>Subject<', '>{t(\'contact.form.subject.label\')}<'],
    ['placeholder="What is this about?"', 'placeholder={t(\'contact.form.subject.placeholder\')}'],
    ['>Message<', '>{t(\'contact.form.msg.label\')}<'],
    ['placeholder="Your message..."', 'placeholder={t(\'contact.form.msg.placeholder\')}'],
    ['Send Message', '{t(\'contact.form.btn\')}'],
    ['Or email us directly at', '{t(\'contact.form.fallback\')}']
]);

console.log("Done HTML replacements.");
