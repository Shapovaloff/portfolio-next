import { CSSProperties, FC } from 'react';
import Button from '../Button/Button';
import { CardsWorkProps } from './CardsWork.interface';
import styles from './CardsWork.module.scss';
import { WorkItem } from '../LastWorks/data';
import Icon from '../Icon/Icon';

const CardsWork: FC<CardsWorkProps> = ({
  worksList,
  layoutMode,
  visibleCards,
}) => {
  return (
    <ul className={`${styles['cards-work']} ${styles[layoutMode] || ''}`}>
      {worksList?.slice(0, visibleCards).map((work: WorkItem) => (
        <li
          key={work.name}
          className={styles['cards-work__item']}
          style={
            { '--c-project-card': `var(--c-${work.name})` } as CSSProperties
          }
        >
          <div className={styles['cards-work__container']}>
            <div className={styles['cards-work__info']}>
              <h3 className={styles['cards-work__title']}>{work.title}</h3>
              <p className={styles['cards-work__description']}>
                {work.description}
              </p>
            </div>

            <div className={styles['cards-work__btn-block']}>
              {work.linkSite || work.linkCase ? (
                <Button
                  href={work.linkSite || work.linkCase}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  className={styles['cards-work__link']}
                >
                  <span>
                    {work.linkSite ? 'Перейти на сайт' : 'Читать кейс'}
                  </span>
                  <Icon name="icon-arrow-right-top" />
                </Button>
              ) : (
                <Button disabled className={styles['cards-work__link']}>
                  <span>Проект в разработке</span>
                  <Icon name="icon-arrow-right-top" />
                </Button>
              )}
            </div>
          </div>
          <div className={styles['cards-work__img-block']}>
            <div className={styles['cards-work__container-img']}>
              <picture>
                <source
                  media="(max-width: 767px)"
                  srcSet={`/cards-work/${work.name}-small@1x.png 1x, /cards-work/${work.name}-small@2x.png 2x`}
                />
                <img
                  src={`/cards-work/${work.name}${
                    layoutMode === 'tile' ? '-small' : ''
                  }@1x.png`}
                  srcSet={`/cards-work/${work.name}${
                    layoutMode === 'tile' ? '-small' : ''
                  }@2x.png 2x`}
                  alt={work.title}
                />
              </picture>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CardsWork;
