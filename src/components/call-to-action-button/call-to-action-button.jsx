import React from 'react';
import * as styles from './call-to-action-button.module.css';

const CallToActionButton = ({
  clickHandler,
  text,
  small=false,
  secondary=false,
  name='',
  isValid=true
}) => {

  return (
    <button
      className={`
        ${styles.button}
        ${small ? styles.small : ''}
        ${secondary ? styles.secondary : ''}
      `}
      onClick={clickHandler}
      name={name}
      disabled={!isValid}
    >
      {text}
    </button>
  )
}

export default CallToActionButton;
