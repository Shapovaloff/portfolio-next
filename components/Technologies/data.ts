import { TechBlock } from './Technologies.interface';

export const techBlocks: TechBlock[] = [
  {
    title: 'Основные',
    nameBlock: 'main',
    techList: [
      { nameSrc: 'react', text: 'React' },
      { nameSrc: 'next', text: 'Next.js' },
      { nameSrc: 'ts', text: 'TypeScript' },
      { nameSrc: 'js', text: 'JavaScript' },
      { nameSvg: 'icon-html', text: 'HTML' },
      { nameSvg: 'icon-css', text: 'CSS' },
    ],
  },
  {
    title: 'Состояние и данные',
    nameBlock: 'state',
    techList: [
      { nameSrc: 'redux', text: 'RTK' },
      { nameSrc: 'tanstack', ext: 'png', text: 'TanStack Query' },
      { nameSrc: 'zustand', text: 'Zustand' },
    ],
  },
  {
    title: 'Тестирование и качество',
    nameBlock: 'testing',
    techList: [
      { nameSrc: 'jest', text: 'Jest' },
      { nameSrc: 'rtl', ext: 'png', text: 'RTL' },
      { nameSrc: 'playwright', text: 'Playwright' },
      { nameSrc: 'lighthouse', text: 'Lighthouse' },
      { nameSrc: 'pagespeed', text: 'PageSpeed' },
    ],
  },
  {
    title: 'Стили, UI и дизайн',
    nameBlock: 'preprocessors',
    techList: [
      { nameSrc: 'tailwind', text: 'Tailwind' },
      { nameSrc: 'scss', text: 'Scss' },
      { nameSrc: 'figma', text: 'Figma' },
    ],
  },
  {
    title: 'Сборка и инструменты',
    nameBlock: 'collector',
    techList: [
      { nameSrc: 'vite', text: 'Vite' },
      { nameSrc: 'webpack', text: 'Webpack' },
      { nameSrc: 'prettier', ext: 'png', text: 'Prettier' },
    ],
  },
];
