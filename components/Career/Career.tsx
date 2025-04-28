'use client';

import { FC } from 'react';
import Icon from '../Icon/Icon';
import styles from './Career.module.scss';
import { careerList } from './data';
import Container from '../Container/Container';
import * as Accordion from '@radix-ui/react-accordion';

const Career: FC = () => {
  return (
    <section className={styles.career}>
      <Container className={`${styles['career__container']}`}>
        <h2 className={`${styles['career__title']}`}>Опыт</h2>

        <div className={styles['career__wrapper']}>
          <div className={styles['career__img-container']}>
            <div className={styles['career__img-block']}>
              <Icon name="icon-career-bg" width={570} height={408} />
            </div>
          </div>

          <Accordion.Root
            type="single"
            collapsible
            className={styles['career__list']}
            defaultValue={careerList[0].id}
          >
            {careerList.map((careerItem, index) => (
              <Accordion.Item
                value={careerItem.id}
                key={careerItem.id}
                className={`${styles['career__item']}`}
              >
                <Accordion.Trigger className={styles['career__heading-btn']}>
                  <div className={styles['career__icon']}>
                    <Icon name={careerItem.icon} width={32} height={32} />
                  </div>
                  <h4 className={styles['career__icon-title']}>
                    {careerItem.heading}
                  </h4>
                  <p>{careerItem.timeText}</p>
                </Accordion.Trigger>
                <Accordion.Content className={`${styles['career__content']}`}>
                  <div className={styles['career__content-wrapper']}>
                    <p>{careerItem.description}</p>
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </Container>
    </section>
  );
};

export default Career;
