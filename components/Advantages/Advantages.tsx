import { FC } from 'react';
import Container from '../Container/Container';
import styles from './Advantages.module.scss';
import Image from 'next/image';

const advantagesList = [
  {
    name: 'checked',
    title: 'Продуманная архитектура',
    text: 'Проектирую структуру приложения, состояния и модулей так, чтобы код было легко поддерживать и развивать.',
  },
  {
    name: 'adaptive',
    title: 'Опыт в React и Next.js',
    text: 'Работаю с современным стеком (React, Next.js, TypeScript, React Query, Zustand/RTK) и знаю, где какая технология уместна.',
  },
  {
    name: 'pixel-perfect',
    title: 'Надёжность, скорость работы',
    text: 'Покрываю критичную логику тестами, слежу за скоростью загрузки, метриками Lighthouse и стабильной работой в продакшене.',
  },
];
const Advantages: FC = () => {
  return (
    <section className={styles['advantages']}>
      <Container className={styles['advantages__container']}>
        <h2 className={styles['advantages__heading']}>Преимущества</h2>
        <ul className={styles['advantages__list']}>
          {advantagesList?.map((item) => (
            <li key={item.name} className={styles['advantages__item']}>
              <div className={styles['advantages__img-block']}>
                <Image
                  src={`/advantages/${item.name}.svg`}
                  width={80}
                  height={86}
                  alt={item.name}
                />
              </div>
              <div className={styles['advantages__content']}>
                <h3 className={styles['advantages__title']}>{item.title}</h3>
                <p className={styles['advantages__text']}>{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Advantages;
