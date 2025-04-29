'use client';

import React, { FC } from 'react';
import Icon from '../Icon/Icon';
import styles from './ThemeSwitcher.module.scss';
import { useTheme } from 'next-themes';

const ThemeSwitcher: FC = () => {
  const { setTheme } = useTheme();

  const changeThemeHandler = () => {
    setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));
  };

  return (
    <button
      type="button"
      className={styles['theme-switcher']}
      onClick={changeThemeHandler}
    >
      <span className={styles['theme-switcher__toggle']}>
        <Icon name="icon-sun" />
        <Icon name="icon-moon" />
        <span className={styles['theme-switcher__bg']} />
      </span>
    </button>
  );
};

export default ThemeSwitcher;
