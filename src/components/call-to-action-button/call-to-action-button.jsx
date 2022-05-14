import React from 'react';
import * as styles from './call-to-action-button.module.css';

const CallToActionButton = ({ clickHandler, text, small=false, secondary=false }) => {

  return (
    <button
      className={`
        ${styles.button}
        ${small ? styles.small : ''}
        ${secondary ? styles.secondary : ''}
      `}
      onClick={clickHandler}
    >
      {text}
    </button>
  )
}

export default CallToActionButton;
