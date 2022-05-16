import React from 'react';
import * as styles from './basic-button.module.css';

const BasicButton = ({
  handler,
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
        ${!isValid ? styles.invalid : ''}
      `}
      onClick={handler}
      name={name}
      disabled={!isValid}
    >
      {text}
    </button>
  )
}

export default BasicButton;
