export const languages = {
  ru: 'Русский',
  kk: 'Қазақша',
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
  },
  kk: {
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
  },
};

export function useTranslations(lang) {
  return function t(key) {
    return uiStrings[lang]?.[key] || uiStrings[defaultLang][key];
  }
}
