import { FC } from 'react';
import styles from './Icon.module.scss';
import { IconProps } from './Icon.interface';

const Icon: FC<IconProps> = ({ name, width = 24, height = 24 }) => {
  return (
    <svg
      className={styles['icon']}
      width={width}
      height={height}
      aria-hidden="true"
    >
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};

export default Icon;
