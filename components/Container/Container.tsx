import React, { JSX } from 'react';
import { ContainerProps } from './Container.interface';
import styles from './Container.module.scss';

function Container({ children, className }: ContainerProps): JSX.Element {
  return (
    <div className={`${styles['container']} ${className}`}>{children}</div>
  );
}

export default Container;
