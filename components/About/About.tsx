import Button from '../Button/Button';
import Container from '../Container/Container';
import styles from './About.module.scss';
import Icon from '../Icon/Icon';
import experienceCount from '@/utils/experience-count';

// section.about#about
//   .about__container.container
//     h2.about__title.title.title--h2 Обо мне
//     .about__wrapper
//       .about__block
//         .about__photo-block
//           picture
//             img(src="img/about/about-photo@1x.jpg", srcset="img/about/about-photo@2x.jpg 2x" alt="Yury Shapovalov")
//         .about__points
//           img(src="img/about/points.svg", width="145", height="106", alt="points")
//       .about__info
//         h3
//         ul
//           each aboutItem in aboutList
//             li!= aboutItem
//         a(href="https://career.habr.com/yuryshapovalov", target="_blank" rel="noopener noreferrer").about__link.button.button--opacity
//           span Посмотреть резюме
//           +icon("icon-arrow-right-top", 24, 24)
//       .about__illustration
//         +icon("icon-about-bg", width="255", height="165")

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

function About() {
  const experience = `Опыт ${experienceCount()}`;

  return (
    <section className={styles['about']}>
      <Container className={styles['about__container']}>
        <h2 className={styles['about__title']}>Обо мне</h2>
        <div className={styles['about__wrapper']}>
          <div className={styles['about__photo-block']}>
            <picture>
              <img
                src="/about/about-photo@1x.jpg"
                srcSet="about/about-photo@2x.jpg 2x"
                alt="Yury Shapovalov"
              />
            </picture>
          </div>
          <div className={styles['about__points']}>
            <img src="about/points.svg" width="145" height="106" alt="points" />
          </div>
          <div className={styles['about__info']}>
            <h3 className={styles['about__info-title']}>
              Привет, меня зовут Юрий&nbsp;Шаповалов
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
}

export default About;
