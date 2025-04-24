export interface WorkItem {
  name: string;
  category: string;
  title: string;
  description?: string;
  linkSite?: string;
  linkCase?: string;
}

export const filterOptions = [
  { value: 'all', label: 'Все' },
  { value: 'real', label: 'Реальные' },
  { value: 'educational', label: 'Учебные' },
  // { value: 'react', label: 'React' },
];

export const btnLayoutModeType = ['compact', 'tile'] as const;
export type layoutModeType = (typeof btnLayoutModeType)[number];

export const worksList: WorkItem[] = [
  {
    category: 'real',
    title: 'ПСБ Private Banking',
    description: 'Премиум-сайт ПСБ Private Banking',
    linkSite: 'https://www.psbank.ru/private',
    name: 'psbank-private',
  },
  {
    category: 'real',
    title: 'ПСБ',
    description: 'Новый сайт и дизайн-система ПСБ',
    linkSite: 'https://www.psbank.ru/',
    name: 'psbank',
  },
  {
    category: 'real',
    title: 'Symbl',
    description: 'Самый большой сайт о символах, алфавитах и письменностях',
    linkSite: 'https://symbl.cc/',
    name: 'symbl',
  },
  {
    category: 'real',
    title: 'Osome 2 some',
    description: 'Интернет‑магазина женской одежды',
    linkSite: 'https://osome2some.com/',
    name: 'osome2some',
  },
  {
    category: 'real',
    title: 'Любимый Василек (Ивановский трикотаж)',
    description: 'Интернет-магазин',
    linkSite: 'https://ivanovskij-trikotazh.ru/',
    name: 'trikotazh',
  },
  {
    category: 'real',
    title: 'Остров фортов',
    description: 'Билеты на метеоры в&nbsp;Кронштадт до Острова Фортов',
    linkSite: 'https://ostrovfortov.com',
    name: 'ostrovfortov',
  },
  {
    category: 'real',
    title: 'Rooblee',
    description: 'Сервис по подбору кредитов',
    name: 'rooblee',
    linkSite: 'https://rooblee.ru/',
  },
  {
    category: 'real',
    title: 'Retail Rocket',
    description:
      'Помогает трансформировать новых покупателей в&nbsp;постоянных и&nbsp;работать над&nbsp;их&nbsp;удержанием',
    linkSite: 'https://retailrocket.ru/',
    name: 'retailrocket',
  },

  {
    category: 'educational',
    title: 'Next pizza',
    description: 'Учебный проект Next + React',
    linkSite: 'https://next-pizza-red-gamma.vercel.app/',
    name: 'next-pizza',
  },
  {
    category: 'educational',
    title: 'Israel',
    description:
      'Учебный проект практического курса "Акселератор" от&nbsp;HTML Academy',
    linkSite: 'https://shapovaloff.github.io/israel/build/',
    name: 'israel',
  },
  {
    category: 'educational',
    title: 'Escape room',
    description:
      'Учебный проект практического курса "Акселератор" от&nbsp;HTML Academy',
    linkSite: 'https://shapovaloff.github.io/escape-room/build/main.html',
    name: 'escape-room',
  },
  {
    category: 'educational',
    title: 'Cat energy',
    description:
      'Учебный проект онлайн‑курсa HTML&nbsp;и&nbsp;CSS "Адаптивная вёрстка и&nbsp;автоматизация" от&nbsp;HTML Academy',
    linkSite:
      'https://shapovaloff.github.io/1374325-cat-energy-19/build/index.html',
    name: 'cat-energy',
  },
];
