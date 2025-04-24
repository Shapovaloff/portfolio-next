import React from 'react';
import Icon from '../Icon/Icon';
import styles from './ThemeSwitcher.module.scss';

function ThemeSwitcher() {
  return (
    <button type="button" className={styles['theme-switcher']}>
      <span className={styles['theme-switcher__toggle']}>
        <Icon name="icon-sun" />
        <Icon name="icon-moon" />
      </span>
    </button>
  );
}

export default ThemeSwitcher;
