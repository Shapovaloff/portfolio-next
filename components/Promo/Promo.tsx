import React from 'react';
import styles from './Promo.module.scss';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';

function Promo() {
  return (
    <section className={styles['promo']}>
      <Container className={styles['promo__container']}>
        <div className={styles['promo__content']}>
          <p className={styles['promo__text']}>
            Привет, я <span>Юрий</span>
          </p>
          <h1 className={styles['promo__title']}>Frontend Developer</h1>
        </div>
        <div className={styles['promo__img-block']}>
          <Icon name="icon-promo-hello" width={770} height={390} />
        </div>
        <Button type="link" href="#last-works" variant="primary">
          <span>Проекты</span>
          <Icon name="icon-arrow-down" />
        </Button>
      </Container>
    </section>
  );
}

export default Promo;
