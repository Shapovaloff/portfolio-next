import { TechBlock } from './Technologies.interface';

export const techBlocks: TechBlock[] = [
  {
    title: 'Основные',
    nameBlock: 'main',
    techList: [
      { nameSvg: 'icon-html', text: 'Html' },
      { nameSvg: 'icon-css', text: 'Css' },
      { nameSrc: 'js', text: 'JavaScript' },
      { nameSrc: 'react', text: 'React' },
    ],
  },
  {
    title: 'Тестирование',
    nameBlock: 'testing',
    techList: [
      { nameSrc: 'pagespeed', text: 'PageSpeed' },
      { nameSrc: 'lighthouse', text: 'Lighthouse' },
      { nameSvg: 'icon-w3c', text: 'W3C' },
    ],
  },
  {
    title: 'Верстаю макеты из',
    nameBlock: 'graphics-editor',
    techList: [{ nameSrc: 'figma', text: 'Figma' }],
  },
  {
    title: 'Также умею',
    nameBlock: 'preprocessors',
    techList: [
      { nameSrc: 'pug', text: 'Pug' },
      { nameSrc: 'scss', text: 'Scss' },
    ],
  },
  {
    title: 'Сборщики и таск-менеджеры',
    nameBlock: 'collector',
    techList: [
      { nameSrc: 'webpack', text: 'Webpack' },
      { nameSrc: 'gulp', text: 'Gulp' },
      { nameSrc: 'yarn', text: 'Yarn' },
      { nameSrc: 'active-collab', text: 'ActiveCollab' },
    ],
  },
];
