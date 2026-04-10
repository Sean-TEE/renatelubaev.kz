export const languages = {
  ru: 'Русский',
  kz: 'Қазақша',
  en: 'English',
};

export const defaultLang = 'ru';

export const uiStrings = {
  ru: {
    'nav.home': 'Главная',
    'nav.about': 'О художнике',
    'nav.competition': 'Конкурс',
    'nav.jury': 'Жюри',
    'nav.gallery': 'Галерея',
    'nav.contact': 'Контакты',
    'footer.navigation': 'Навигация',
    'footer.contact': 'Контакты',
    'footer.tagline': 'Художник. Организатор международной олимпиады и конкурса по ИЗО.',
    'footer.rights': 'Все права защищены.',
    'seo.home.title': 'Ренат Елубаев — Художник и организатор конкурса искусств',
    'seo.home.desc': 'Официальный сайт Рената Елубаева, казахстанского художника, члена Союза художников РК и организатора Международной олимпиады по изобразительному искусству.',
    'seo.about.title': 'О художнике — Ренат Елубаев',
    'seo.about.desc': 'Биография и творческий путь Рената Елубаева, признанного в современном изобразительном искусстве.',
    'seo.competition.title': 'Конкурс — Международный конкурс искусств',
    'seo.competition.desc': 'Узнайте больше о правилах, номинациях и участии в Международном конкурсе изобразительного искусства имени Рената Елубаева.',
    'seo.jury.title': 'Жюри — Ренат Елубаев',
    'seo.jury.desc': 'Познакомьтесь с членами жюри Международного конкурса изобразительного искусства.',
    'seo.gallery.title': 'Галерея картин — Ренат Елубаев',
    'seo.gallery.desc': 'Галерея работ и картин Рената Елубаева.',
    'seo.contact.title': 'Контакты — Ренат Елубаев',
    'seo.contact.desc': 'Свяжитесь с Ренатом Елубаевым. Вопросы, предложения о сотрудничестве и участие в конкурсе.'
  },
  kz: {
    'nav.home': 'Басты бет',
    'nav.about': 'Суретші туралы',
    'nav.competition': 'Байқау',
    'nav.jury': 'Қазылар алқасы',
    'nav.gallery': 'Галерея',
    'nav.contact': 'Байланыс',
    'footer.navigation': 'Навигация',
    'footer.contact': 'Байланыс',
    'footer.tagline': 'Суретші. Бейнелеу өнері бойынша халықаралық олимпиада мен байқау ұйымдастырушысы.',
    'footer.rights': 'Барлық құқықтар қорғалған.',
    'seo.home.title': 'Ренат Елубаев — Суретші және өнер байқауының ұйымдастырушысы',
    'seo.home.desc': 'Қазақстандық суретші, ҚР Суретшілер одағының мүшесі және бейнелеу өнері бойынша халықаралық олимпиада ұйымдастырушысы Ренат Елубаевтың ресми сайты.',
    'seo.about.title': 'Суретші туралы — Ренат Елубаев',
    'seo.about.desc': 'Қазіргі заманғы бейнелеу өнерінде танылған Ренат Елубаевтың өмірбаяны және шығармашылық жолы.',
    'seo.competition.title': 'Байқау — Халықаралық өнер байқауы',
    'seo.competition.desc': 'Ренат Елубаев атындағы халықаралық бейнелеу өнері байқауының ережелері, номинациялары және қатысу туралы толығырақ біліңіз.',
    'seo.jury.title': 'Қазылар алқасы — Ренат Елубаев',
    'seo.jury.desc': 'Халықаралық бейнелеу өнері байқауының қазылар алқасымен танысыңыз.',
    'seo.gallery.title': 'Картиналар галереясы — Ренат Елубаев',
    'seo.gallery.desc': 'Ренат Елубаевтың жұмыстары мен картиналар галереясы.',
    'seo.contact.title': 'Байланыс — Ренат Елубаев',
    'seo.contact.desc': 'Ренат Елубаевпен байланысыңыз. Сұрақтар, ынтымақтастық туралы ұсыныстар және байқауға қатысу.'
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.competition': 'Competition',
    'nav.jury': 'Jury',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    'footer.navigation': 'Navigation',
    'footer.contact': 'Contact',
    'footer.tagline': 'Artist. Organizer of the International Visual Arts Competition.',
    'footer.rights': 'All rights reserved.',
    'seo.home.title': 'Renat Elubaev — Artist & Visual Arts Competition Organizer',
    'seo.home.desc': 'Official website of Renat Elubaev, Kazakhstani visual artist, member of the Union of Artists of Kazakhstan, and organizer of the International Visual Arts Competition.',
    'seo.about.title': 'About the Artist — Renat Elubaev',
    'seo.about.desc': 'Biography and creative journey of Renat Elubaev, a recognized voice in contemporary visual art.',
    'seo.competition.title': 'Competition — International Visual Arts',
    'seo.competition.desc': 'Learn more about the rules, nominations, and participation in the International Visual Arts Competition named after Renat Elubaev.',
    'seo.jury.title': 'Jury — Renat Elubaev',
    'seo.jury.desc': 'Meet the jury members of the International Visual Arts Competition.',
    'seo.gallery.title': 'Art Gallery — Renat Elubaev',
    'seo.gallery.desc': 'Gallery of artworks and paintings by Renat Elubaev.',
    'seo.contact.title': 'Contact — Renat Elubaev',
    'seo.contact.desc': 'Get in touch with Renat Elubaev. Questions, collaboration proposals, and competition inquiries.'
  },
};

export function useTranslations(lang) {
  return function t(key) {
    return uiStrings[lang]?.[key] || uiStrings[defaultLang][key];
  }
}
