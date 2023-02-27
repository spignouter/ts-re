import styles from './Header.module.scss'
import logoPng from '../../assets/images/RE_logo.png'
import userPng from '../../assets/images/user.png'

export interface HeaderProps {}

export const Header = ({}: HeaderProps) => (
  <header className={styles.header}>
    <div className={styles.header__logo}>
      <img src={logoPng} className={styles.imgLogo} alt="логотип" />
    </div>
    <nav className={styles.header__nav}>
      <ul className={styles.header__list}>
        <li className={styles.header__item}>
          <a href="">Главная</a>
        </li>
        <li className={styles.header__item}>
          <a href="">Поиск</a>
        </li>
        <li className={styles.header__item}>
          <a href="">О сайте</a>
        </li>
        <li className={styles.header__item}>
          <a href="">Связь с нами</a>
        </li>
      </ul>
    </nav>
    <div className={styles.header__user}>
      <i className={styles.iconVector1}></i>
      <i className={styles.iconVector3}></i>
      <img src={userPng} className={styles.imgUser} alt="" />
      <p>ID пользователя</p>
    </div>
  </header>
)
