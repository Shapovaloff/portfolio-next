import Icon from '../Icon/Icon';
import styles from './Technologies.module.scss';
import { techBlocks } from './data';
import Container from '../Container/Container';
import { FC } from 'react';

const Technologies: FC = () => {
  return (
    <section id="technologies" className={styles.technologies}>
      <Container className={`${styles['technologies__container']}`}>
        <h2 className={`${styles['technologies__title']}`}>Технологии</h2>

        <div className={styles['technologies__block-list']}>
          {techBlocks.map((techBlock, blockIndex) => (
            <div
              key={blockIndex}
              className={styles['technologies__block-item']}
            >
              <h3 className={styles['technologies__block-title']}>
                {techBlock.title}
              </h3>
              <ul className={styles['technologies__list']}>
                {techBlock.techList.map((tech, itemIndex) => (
                  <li key={itemIndex} className={styles['technologies__item']}>
                    <div className={styles['technologies__img-block']}>
                      {tech.nameSrc ? (
                        <img
                          src={`/technologies/${techBlock.nameBlock}/${tech.nameSrc}.svg`}
                          alt={tech.text}
                          className={styles['technologies__img']}
                        />
                      ) : tech.nameSvg ? (
                        <Icon name={tech.nameSvg} width={56} height={56} />
                      ) : null}
                    </div>
                    <p className={styles['technologies__text']}>{tech.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles['technologies__bg-img']}>
          <Icon name="icon-technologies-bg" width={470} height={320} />
        </div>
      </Container>
    </section>
  );
};

export default Technologies;
