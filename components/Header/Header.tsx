'use client';

import { FC, useState } from 'react';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';
import Navigation from '../Navigation/Navigation';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import styles from './Header.module.scss';
import useScrollLock from '@/hooks/useScrollLock';

const Header: FC = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const { disableScrolling, enableScrolling } = useScrollLock();

  const toggleMenuHandler = () => {
    setToggleMenu((prev) => {
      if (prev) {
        enableScrolling();
      } else {
        disableScrolling();
      }
      return !prev;
    });
  };

  return (
    <>
      <div
        className={`${styles['overlay']} ${toggleMenu ? styles['active'] : ''}`}
        onClick={toggleMenuHandler}
      />
      <header className={styles['header']}>
        <Container>
          <div className={styles['header__container']}>
            <span className={styles['header__logo']}>
              <Icon name="icon-logo" width={48} height={48} />
            </span>
            <Navigation
              toggleMenu={toggleMenu}
              toggleMenuHandler={toggleMenuHandler}
            />
            <ThemeSwitcher />
            <button
              className={`${styles['header__btn-menu']} ${
                toggleMenu ? styles['active'] : ''
              }`}
              type="button"
              onClick={toggleMenuHandler}
            >
              <span></span>
              <span></span>
            </button>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
