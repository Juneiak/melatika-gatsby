import React from 'react';
import * as styles from './form-input.module.css';

export default function FormInput({
  onKeyDownHandler,
  inputRef,
  inputType = 'text',
  isRequired = false,
  inputPlaceholder = '',
  errorMessage = '',
  inputMinLength,
  inputMaxLength,
}) {
  const isCorrect = true;

  return (
    <label className={styles.label}>
      <input
        minLength = {inputMinLength}
        maxLength = {inputMaxLength}
        ref = {inputRef}
        type = {inputType}
        placeholder = {inputPlaceholder}
        required = {isRequired}
        className = {`
        ${styles.input}
        ${isCorrect ? '' : styles.inputError}
        `}
        onKeyDown={onKeyDownHandler}
      />
      {!isCorrect && <div className={styles.errorMessage}>{errorMessage}</div>}
    </label>
    
  )
}
