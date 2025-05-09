import { FC } from 'react';
import Container from '../Container/Container';
import styles from './Advantages.module.scss';
import Image from 'next/image';

const advantagesList = [
  {
    name: 'checked',
    title: 'Валидный код',
    text: 'Все HTML-файлы проверяются валидатором W3C',
  },
  {
    name: 'adaptive',
    title: 'Адаптивная вёрстка',
    text: 'Десктоп, планшетная версия, мобильная версия',
  },
  {
    name: 'pixel-perfect',
    title: 'Pixel Perfect',
    text: 'Верстка сайта максимально точно совпадающая с макетом пиксель в пиксель',
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
