import { FC } from 'react';
import styles from './NavigationItem.module.scss';
import { NavigationItemProps } from './NavigationItem.interface';
import Icon from '../Icon/Icon';
import useScrollTo from '@/hooks/useScrollTo';

const NavigationItem: FC<NavigationItemProps> = ({
  id,
  toggleMenu,
  toggleMenuHandler,
  name,
  text,
}) => {
  const scrollTo = useScrollTo(id, { offset: 40 });

  return (
    <li className={styles['navigation-item']}>
      <a
        className={styles['navigation-item__link']}
        href={`#${id}`}
        onClick={(evt) => {
          evt.preventDefault();
          if (toggleMenu) toggleMenuHandler();
          setTimeout(() => scrollTo());
        }}
      >
        {name && <Icon name={name} />}
        <span>{text}</span>
      </a>
    </li>
  );
};

export default NavigationItem;
