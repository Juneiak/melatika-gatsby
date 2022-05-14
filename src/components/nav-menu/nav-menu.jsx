import React from 'react';
import * as styles from './nav-menu.module.css';

const NavMenu = ({ mountAnim }) => {
  
  return (
    <section style={mountAnim} className={styles.navMenu}>
      <nav style={{ height: '100%', width: '100%' }}>
        <ul className={styles.list}>
          <li style={{backgroundColor: 'green'}} className={styles.listElement}>
            <p className={styles.navElementTitle}>Каталог</p>
          </li>
          <li style={{backgroundColor: 'red'}} className={styles.listElement}>
            <p className={styles.navElementTitle}>Персональные решения</p>
          </li>
          <li style={{backgroundColor: 'black'}} className={styles.listElement}>
            <p className={styles.navElementTitle}>Дизайнерам</p>
          </li>
          <li style={{backgroundColor: 'blue'}} className={styles.listElement}>
            <p className={styles.navElementTitle}>О нас</p>
          </li>
        </ul>
      </nav>

    </section>
  )
}

export default NavMenu;
