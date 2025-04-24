import React, { FC } from 'react';
import { socialList } from './data';
import Container from '../Container/Container';
import styles from './Footer.module.scss';
import Social from '../Social/Social';

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles['footer']}>
      <Container className={styles['footer__container']}>
        <Social socialList={socialList} />
        <p className={styles['footer__copyright']}>
          © Юрий Шаповалов, 2020 - {currentYear}
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
