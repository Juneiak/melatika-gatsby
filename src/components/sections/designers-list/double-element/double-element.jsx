import React from 'react';
import * as styles from './double-element.module.css';

const DoubleElement = ({ isSecondState, firstCard, secondCard, isReversed }) => {

  return (
    <li className={`
      ${styles.doubleElement}
      ${isSecondState ? styles.isSecondState : ''}
      ${isReversed ? styles.isReversed : ''}
    `}>
      <div className={styles.firstCard}>
        {firstCard}
      </div>
      <div className={styles.secondCard}>
        {secondCard}
      </div>
    </li>
  )
}

export default DoubleElement;
