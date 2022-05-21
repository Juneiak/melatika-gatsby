import React from 'react';
import * as styles from './nav-menu.module.css';
import { Link } from 'gatsby';

const NavMenu = ({ mountAnim, closeNavHandler }) => {
  
  return (
    <nav style={mountAnim} className={styles.navMenu}>
      <ul className={styles.list}>
        <li className={styles.listElement}>
          <Link onClick={closeNavHandler} to='/catalog' className={styles.navLink}>
            <div className={`${styles.linkImage} ${styles.linkImage1}`} />
            <p className={styles.title}>Каталог</p>
          </Link>
        </li>
        <li className={styles.listElement}>
          <Link onClick={closeNavHandler} to='#solution' className={styles.navLink}>
            <div className={`${styles.linkImage} ${styles.linkImage2}`} />
            <p className={styles.title}>Персональные<br />решения</p>
          </Link>
        </li>
        <li className={styles.listElement}>
          <Link onClick={closeNavHandler} to='#solution' className={styles.navLink}>
            <div className={`${styles.linkImage} ${styles.linkImage3}`} />
            <p className={styles.title}>Дизайнерам</p>
          </Link>
        </li>
        <li  className={styles.listElement}>
          <Link onClick={closeNavHandler} to='#contacts' className={styles.navLink}>
            <div className={`${styles.linkImage} ${styles.linkImage4}`} />
            <p className={styles.title}>Контакты</p>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavMenu;
