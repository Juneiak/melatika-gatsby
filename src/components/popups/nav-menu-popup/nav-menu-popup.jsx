import React from 'react';
import * as styles from './nav-menu-popup.module.css';
import { Link } from 'gatsby';
import PopupLayout from '../popup-layout/popup-layout';
import MediaImage from '../../media-image/media-image';
import { navElementsData } from '../../../misc/data';

const NavMenuPopup = ({ closeNavHandler, isOpen }) => {
  
  return (
    <PopupLayout isNav={true} isOpen={isOpen}>
      <nav className={styles.navMenu}>
        <ul className={styles.list}>
          {
            navElementsData.map((navElement, index) => (
              <li key={index} className={styles.listElement}>
                <Link onClick={closeNavHandler} to={navElement.linkTo} className={styles.navLink}>
                  <div className={styles.linkImage}>
                    <MediaImage image={navElement.image} image460={navElement.image460} alt={`фон ${navElement.title}`}/>
                  </div>
                  <p className={styles.title}>{navElement.title}</p>
                </Link>
              </li>
            ))
          }
        </ul>
      </nav>
    </PopupLayout>
  )
}

export default NavMenuPopup;
