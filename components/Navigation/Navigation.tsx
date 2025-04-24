import Icon from '../Icon/Icon';
import styles from './Navigation.module.scss';

const NavData = [
  { name: 'icon-user', href: '#about', text: 'Обо мне' },
  { name: 'icon-layout-panel', href: '#last-works', text: 'Проекты' },
  { name: 'icon-chart', href: '#career', text: 'Опыт' },
  { name: 'icon-terminal', href: '#technologies', text: 'Технологии' },
];

function Navigation() {
  return (
    <nav className={styles['navigation']}>
      <ul className={styles['navigation__list']}>
        {NavData?.map((link) => (
          <li className={styles['navigation__item']} key={link.href}>
            <a className={styles['navigation__link']} href={link.href}>
              {link.name && <Icon name={link.name} />}
              <span>{link.text}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
