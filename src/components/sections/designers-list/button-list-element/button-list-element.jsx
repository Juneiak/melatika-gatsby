import React from 'react';
import * as styles from './button-list-element.module.css';
import { BasicButton } from '../../../ui';

export default function ButtonListElement({openFormPopupHandler}) {
  
  return (
    <div className={styles.elementWithButton}>
      <div className={styles.buttonContainer}>
        <p className={styles.text}>Нас выбирают профи</p>
        <button type='button' className={styles.button} onClick={openFormPopupHandler}>Работать с нами</button>
      </div>
    </div>
  )
}
