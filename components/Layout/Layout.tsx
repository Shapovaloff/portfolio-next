import { FC } from 'react';
import { LayoutProps } from './Layout.interface';
import styles from './Layout.module.scss';

const Layout: FC<LayoutProps> = ({ children }) => {
  return <div className={styles['layout']}>{children}</div>;
};

export default Layout;
