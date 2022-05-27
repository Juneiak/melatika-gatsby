import React from 'react';
import * as styles from './nav-menu-popup.module.css';
import { Link } from 'gatsby';
import PopupLayout from '../popup-layout/popup-layout';

const NavMenuPopup = ({ closeNavHandler, isOpen }) => {
  
  return (
    <PopupLayout isNav={true} isOpen={isOpen}>
      <nav className={styles.navMenu}>
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
    </PopupLayout>
  )
}

export default NavMenuPopup;
