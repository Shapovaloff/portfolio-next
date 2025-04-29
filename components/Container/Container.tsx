import React, { FC } from 'react';
import { ContainerProps } from './Container.interface';
import styles from './Container.module.scss';

const Container: FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={`${styles['container']} ${className}`}>{children}</div>
  );
};

export default Container;
