import React from 'react';
import * as styles from './nav-menu.module.css';
import { Link } from 'gatsby';

import navImage1 from '../../../images/nav/nav-1.jpg';
import navImage2 from '../../../images/nav/nav-2.jpg';
import navImage3 from '../../../images/nav/nav-3.jpg';
import navImage4 from '../../../images/nav/nav-4.jpg';


const NavMenu = ({ mountAnim, closeNavHandler }) => {
  
  return (
    <nav style={mountAnim} className={styles.navMenu}>
      <ul className={styles.list}>
        <li className={styles.listElement}>
          <Link onClick={closeNavHandler} to='#catalog' className={styles.navLink}>
            <img src={navImage1} alt="картинка навигации" className={styles.image} />
            <p className={styles.title}>Каталог</p>
          </Link>
        </li>
        <li className={styles.listElement}>
          <Link onClick={closeNavHandler} to='#solution' className={styles.navLink}>
            <img src={navImage2} alt="картинка навигации" className={styles.image} />
            <p className={styles.title}>Персональные решения</p>
          </Link>
        </li>
        <li className={styles.listElement}>
          <Link onClick={closeNavHandler} to='#toDesigners' className={styles.navLink}>
            <img src={navImage3} alt="картинка навигации" className={styles.image} />
            <p className={styles.title}>Дизайнерам</p>
          </Link>
        </li>
        <li  className={styles.listElement}>
          <Link onClick={closeNavHandler} to='#aboutUs' className={styles.navLink}>
            <img src={navImage4} alt="картинка навигации" className={styles.image} />
            <p className={styles.title}>О нас</p>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavMenu;
