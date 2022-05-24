import React from 'react';
import * as styles from './burger-menu-button.module.css';
import { useRef } from 'react';

const BurgerMenuButton = ({ isOpen, handler }) => {

  return (
    // <div className={styles.buttonContainer}>
      <button onClick={handler} className={styles.button}>
        <input checked={isOpen} type='checkbox' className={styles.input} />
        <div className={`${styles.line} ${styles.line1}`}></div>
        <div className={`${styles.line} ${styles.line2}`}></div>
        <div className={`${styles.line} ${styles.line3}`}></div>
      </button>
    // </div>
  )
}

export default BurgerMenuButton;
