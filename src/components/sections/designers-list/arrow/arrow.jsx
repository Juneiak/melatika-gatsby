import React from 'react';
import * as styles from './arrow.module.css';

const Arrow = ({ clickHandler, isHide, isNextState }) => {

  return (
    <div
      onClick={clickHandler}
      className={`
        ${styles.arrow}
        ${isNextState ? styles.nextArrow : styles.prevArrow}
        ${isHide ? styles.isHide : ''}
      `}
    ></div>
  )
}

export default Arrow;
