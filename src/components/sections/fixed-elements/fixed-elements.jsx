import React from 'react';
import * as styles from './fixed-elements.module.css';
import Logo from '../../common/logo/logo';
import BurgerMenuButton from '../../common/burger-menu-button/burger-menu-button';
import Contacts from '../../common/contacts/contacts';

export default function FixedElements({ isNavOpened, openNav, handleScroll }) {

  return (
    <>
      <div onClick={handleScroll} className={styles.logoContainer}><Logo /></div>
      <div className={styles.contactsContainer}><Contacts whiteColor={true}/></div>
      <div className={styles.burgerButtonContainer}>
        <BurgerMenuButton isOpen={isNavOpened} handler={() => openNav(!isNavOpened)}/>
      </div>
    </>
  )
}