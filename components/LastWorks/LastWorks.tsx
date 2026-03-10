'use client';

import { FC, useState } from 'react';
import Button from '../Button/Button';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';
import styles from './LastWorks.module.scss';
import {
  btnLayoutModeType,
  layoutModeType,
  worksList,
} from './data';
import CardsWork from '../CardsWork/CardsWork';

const LastWorks: FC = () => {
  const [layoutMode, setLayoutMode] = useState<layoutModeType>('compact');
  const [visibleCards, setVisibleCards] = useState<number>(3);

  const handleShowMore = () => {
    setVisibleCards((prev) =>
      worksList.length > prev + 3 ? prev + 3 : worksList.length
    );
  };
  const showMoreButton = visibleCards < worksList.length;

  return (
    <section className={styles['last-works']} id={'last-works'}>
      <Container className={styles['last-works__container']}>
        <h2 className={styles['last-works__title']}>Проекты</h2>
        <div className={styles['last-works__nav']}>
          {/* {filterOptions && 
          <div className={styles['portfolio-cards__navigation']}>
            <CustomSelect
              options={filterOptions}
              defaultLabel="Все"
              onSelect={handleSelect}
            />
          </div>} */}
          
          <div className={styles['last-works__card-view']}>
            {btnLayoutModeType?.map((mode) => (
              <Button
                key={mode}
                className={`${styles['last-works__control']} ${
                  layoutMode === mode ? styles['active'] : ''
                }`}
                onClick={() => setLayoutMode(mode)}
              >
                <Icon name={`icon-layout-${mode}`} />
              </Button>
            ))}
          </div>
        </div>

        <CardsWork
          worksList={worksList.slice(0, visibleCards)}
          layoutMode={layoutMode}
          visibleCards={visibleCards}
        />

        {showMoreButton && (
          <Button
            variant="opacity"
            className={styles['last-works__link']}
            onClick={handleShowMore}
          >
            <span>Показать ещё</span>
            <Icon name="icon-update" />
          </Button>
        )}
      </Container>
    </section>
  );
};

export default LastWorks;
