import { JSX } from 'react';
import styles from './Icon.module.scss';
import { IconProps } from './Icon.interface';

function Icon({ name, width = 24, height = 24 }: IconProps): JSX.Element {
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
}

export default Icon;
