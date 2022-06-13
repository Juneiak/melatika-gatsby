import React from 'react';
import * as styles from './bitrix-form.module.css';
import BasicButton from '../../ui/basic-button/basic-button';
import FormInput from './form-input/form-input';
import Loader from '../../ui/loader/loader';
import { Is480Context } from '../../../../utils/contexts';

export default function Form({ setIsSuccessResponse }) {

  const [isLaoding, setIsLoading] = React.useState(false);
  const is480 = React.useContext(Is480Context)

  return (
    <div className={styles.container}>

      {isLaoding
      ? <Loader />
      :
        <form ref={formRef} className={styles.form}>
          {bitrixResponseIsLoading && <div className={styles.formLoading}><Loader /></div>}

          <div className={styles.inputsContainer}>
            <FormInput
              inputTitle = 'Имя'
              onKeyDownHandler = {() => btxNameInput.focus()}
              inputRef = {nameRef}
              inputType = "text"
              isRequired = {true}
              inputPlaceholder = "Имя"
              errorMessage = {nameErrorMessage}
            />
            <FormInput
              inputTitle = 'Телефон'
              onKeyDownHandler = {() => btxPhoneInput.focus()}
              inputRef = {phoneRef}
              inputType = "tel"
              isRequired = {true}
              inputMinLength={5}
              inputPlaceholder = "Телефон"
              errorMessage = {phoneErrorMessage}
            />
            <FormInput
              inputTitle = 'Почта'
              onKeyDownHandler = {() => btxEmailInput.focus()}
              inputRef = {emailRef}
              inputType = "email"
              isRequired = {false}
              inputPlaceholder = "E-mail"
              errorMessage = {emailErrorMessage}
            />
          </div>
          <BasicButton
            isValid={buttonStatus}
            handler={() => false}
            name="send-contact"
            text='Оставить заявку'
            type='primary'
            customStyle={is480 ? {fontSize: 'var(--font-size-body'} : {fontSize: 'var(--font-size-body'}}
          />
        </form>
      }

    </div>
  )
}
