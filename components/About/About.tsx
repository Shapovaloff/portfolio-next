import { FC } from 'react';
import Button from '../Button/Button';
import Container from '../Container/Container';
import styles from './About.module.scss';
import Icon from '../Icon/Icon';
import experienceCount from '@/utils/experience-count';
import Image from 'next/image';

const aboutList = [
  {
    text: 'Умею создавать красивые, функциональные и интуитивно понятные пользовательские интерфейсы',
  },
  {
    type: 'experience',
    text: 'Опыт',
  },
  { text: 'Умением работать в команде' },
  { text: 'Постоянно обучаюсь и изучаю новое' },
  { text: 'Опыт управления небольшой командой разработчиков' },
];

const About: FC = () => {
  const experience = `Опыт ${experienceCount()}`;

  return (
    <section className={styles['about']} id={'about'}>
      <Container className={styles['about__container']}>
        <h2 className={styles['about__title']}>Обо мне</h2>
        <div className={styles['about__wrapper']}>
          <div className={styles['about__photo-block']}>
            <picture>
              <Image
                src="/about/about-photo@1x.jpg"
                width={212}
                height={240}
                alt="Yury Shapovalov"
              />
            </picture>
          </div>
          <div className={styles['about__points']}>
            <Image
              src="about/points.svg"
              width="145"
              height="106"
              alt="points"
            />
          </div>
          <div className={styles['about__info']}>
            <h3 className={styles['about__info-title']}>
              {`Привет, меня зовут Юрий\u00A0Шаповалов`}
            </h3>
            <ul className={styles['about__info-list']}>
              {aboutList?.map((item) => (
                <li key={item.text} className={styles['about__info-item']}>
                  {item?.type === 'experience' ? experience : item.text}
                </li>
              ))}
            </ul>
            <Button
              variant="opacity"
              className={styles['about__link']}
              href="https://career.habr.com/yuryshapovalov"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Посмотреть резюме</span>
              <Icon name="icon-arrow-right-top" />
            </Button>
          </div>
          <div className={styles['about__illustration']}>
            <Icon name="icon-about-bg" width={255} height={165} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
