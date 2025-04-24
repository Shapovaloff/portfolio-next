import Container from '../Container/Container';
import Icon from '../Icon/Icon';
import Navigation from '../Navigation/Navigation';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles['header']}>
      <Container>
        <div className={styles['header__container']}>
          <span className={styles['header__logo']}>
            <Icon name="icon-logo" width={48} height={48} />
          </span>
          <Navigation />
          <ThemeSwitcher />
          <button className={styles['header__btn-menu']} type="button">
            <span></span>
            <span></span>
          </button>
        </div>
      </Container>
    </header>
  );
}

export default Header;

// mixin header(headerMods, currentPage)
//   -
//     var headerLinks = [
//       {svgName: "icon-user", href: "#about", text: "Обо мне"},
//       {svgName: "icon-layout-panel", href: "#last-works", text: "Проекты"},
//       {svgName: "icon-chart", href: "#career", text: "Опыт"},
//       {svgName: "icon-terminal", href: "#technologies", text: "Технологии"},
//     ]

//   header.header(class=headerMods)
//     .header__container.container
//       if(currentPage === "index")
//         a.header__logo
//           +icon("icon-logo", 48, 48)
//       else
//         a.header__logo(href="index.html", aria-label="Переход на главную")
//           +icon("icon-logo", 48, 48)
//       nav.main-nav(data-toggle-menu="navigation")
//         ul.main-nav__list
//           each link, index in headerLinks
//             li.main-nav__item
//               a.main-nav__link(href=link.href, data-toggle-menu="link")
//                 if (link.svgName)
//                   +icon(link.svgName, 24, 24)
//                 span=link.text

//       button.header__toggle.theme-switcher(data-change-theme="btn")
//         .theme-switcher__toggle
//           +icon('icon-sun', 24, 24)
//           +icon('icon-moon', 24, 24)

//       button(type="button", data-toggle-menu="button").header__btn-menu
//         span
//         span
