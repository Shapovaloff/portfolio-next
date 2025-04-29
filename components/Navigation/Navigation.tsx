'use client';

import styles from './Navigation.module.scss';
import { FC } from 'react';
import { NavigationProps } from './Navigation.interface';
import NavigationItem from '../NavigationItem/NavigationItem';

const NavData = [
  { name: 'icon-user', id: 'about', text: 'Обо мне' },
  { name: 'icon-layout-panel', id: 'last-works', text: 'Проекты' },
  { name: 'icon-chart', id: 'career', text: 'Опыт' },
  { name: 'icon-terminal', id: 'technologies', text: 'Технологии' },
];

const Navigation: FC<NavigationProps> = ({ toggleMenu, toggleMenuHandler }) => {
  return (
    <nav
      className={`${styles['navigation']} ${
        toggleMenu ? styles['active'] : ''
      }`}
    >
      <ul className={styles['navigation__list']}>
        {NavData.map((link) => (
          <NavigationItem
            key={link.id}
            toggleMenuHandler={toggleMenuHandler}
            toggleMenu={toggleMenu}
            name={link.name}
            id={link.id}
            text={link.text}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
