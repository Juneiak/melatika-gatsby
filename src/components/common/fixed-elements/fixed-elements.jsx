import React from 'react';
import * as styles from './fixed-elements.module.css';
import Logo from '../logo/logo';
import BurgerMenuButton from '../burger-menu-button/burger-menu-button';
import Contacts from '../contacts/contacts';

export default function FixedElements({ isNavOpened, openNav }) {
  return (
    <>
      <div className={styles.logoContainer}>
        <a href="#opening" className=""><Logo /></a>
      </div>
      <div className={styles.contactsContainer}><Contacts whiteColor={true}/></div>
      <div className={styles.burgerButtonContainer}>
        <BurgerMenuButton isOpen={isNavOpened} handler={() => openNav(!isNavOpened)}/>
      </div>
    </>
  )
}
