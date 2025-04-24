import { LayoutProps } from './Layout.interface';
import styles from './Layout.module.scss';

function Layout({ children }: LayoutProps) {
  return <div className={styles['layout']}>{children}</div>;
}

export default Layout;
