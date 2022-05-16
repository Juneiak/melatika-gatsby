import React from 'react';
import * as styles from './bitrix-form.module.css';
import BasicButton from '../basic-button/basic-button';
import BitrixFormInput from './bitrix-form-input/bitrix-form-input';
import Loader from '../loader/loader';

const { useRef, useEffect, useState } = React;

export default function BitrixForm() {
  // need some refactoring - add onError and update onLoad, maybe reduse some states

  const [ scriptLoadStatus, setScriptLoadStatus ] = useState(false);

  const [ btxNameInput, setBtxNameInput ] = useState()
  const [ btxPhoneInput, setBtxPhoneInput ] = useState()
  const [ btxButton, setBtxButton ] = useState()

  const [ nameErrorMessage, setNameErrorMessage ] = useState('')
  const [ phoneErrorMessage, setPhoneErrorMessage ] = useState('')

  const [ buttonStatus, setButtonStatus ] = useState(false)

  const nameRef = useRef()
  const phoneRef = useRef()

  const formRef = useRef()
  const scriptRef = useRef()
  const btxContainerRef = useRef()


  useEffect(() => {
    const script = document.createElement('script');
    script.async=true;
    script.src='https://cdn-ru.bitrix24.ru/b21322336/crm/form/loader_24.js'+'?'+(Date.now()/180000|0);
    let name
    let phone
    let button
    let nameError
    let phoneError

    // it is 3 different functions for correct work of removeEventListener
    const nameInputListenerCallback = (event) => {
      nameRef.current.value = event.target.value
      nameRef.current.focus()
      checkFormValidity()
      if (nameError.textContent !== nameErrorMessage ) setNameErrorMessage(nameError.textContent)
    }

    const phoneInputListenerCallback = (event) => {
      phoneRef.current.value = event.target.value
      phoneRef.current.focus()
      checkFormValidity()
      if (phoneError.textContent !== phoneErrorMessage) setPhoneErrorMessage(phoneError.textContent)
    }

    script.onload = () => {
      setTimeout(() => {
        setScriptLoadStatus(true);
        const inputDivs = btxContainerRef.current.querySelectorAll('.b24-form-field');
        name = inputDivs[0].querySelector('input');
        nameError = inputDivs[0].querySelector('.b24-form-control-alert-message');
        phone = inputDivs[1].querySelector('input');
        phoneError = inputDivs[1].querySelector('.b24-form-control-alert-message');

        button = btxContainerRef.current.querySelector('button[type=submit');

        setBtxNameInput(name)
        setBtxPhoneInput(phone)
        setBtxButton(button)
        if (name && phone && button) {
          name.addEventListener('input', nameInputListenerCallback)
          phone.addEventListener('input', phoneInputListenerCallback)
        }
      }, 500);
    }
      scriptRef.current.parentNode.insertBefore(script, scriptRef.current);

      
      return () => {
        if (name || phone || button) {
          name.removeEventListener('input', nameInputListenerCallback)
          phone.removeEventListener('input', phoneInputListenerCallback)
        }
      }
  }, [])

  const checkFormValidity = () => {
    if (formRef.current.checkValidity()) {
      setButtonStatus(true)
      return
    }
    setButtonStatus(false)
  }

  return (
    <div className={styles.container}>
      <div ref={btxContainerRef} className={styles.fakeFormContainer}>
        <script ref={scriptRef} data-b24-form="inline/24/k9hje0" data-skip-moving="true"></script>
      </div>

      {scriptLoadStatus 
      ?
      <form ref={formRef} className={styles.form}>
        <div className={styles.inputsContainer}>
          <BitrixFormInput
            inputTitle = 'Имя'
            onKeyDownHandler = {() => btxNameInput.focus()}
            inputRef = {nameRef}
            inputType = "text"
            isRequired = {true}
            inputPlaceholder = "Имя"
            errorMessage = {nameErrorMessage}
          />
          <BitrixFormInput
            inputTitle = 'Телефон'
            onKeyDownHandler = {() => btxPhoneInput.focus()}
            inputRef = {phoneRef}
            inputType = "tel"
            isRequired = {true}
            inputMinLength={5}
            inputPlaceholder = "Телефон"
            errorMessage = {phoneErrorMessage}
          />
        </div>
        <BasicButton
          isValid={buttonStatus}
          handler={() => btxButton.click()}
          name="send-contact"
          text='Записаться'
        />
      </form>
      :
      <Loader />
      }
    </div>
  )
}