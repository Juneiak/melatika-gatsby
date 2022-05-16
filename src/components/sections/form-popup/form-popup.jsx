import React from 'react';
import * as styles from './form-popup.module.css';
import PopupLayout from '../../popup-layout/popup-layout';
import CloseButton from '../../close-button/close-button';
import Logo from '../../logo/logo';
import BitrixForm from '../../bitrix-form/bitrix-form';

const FormPopup = ({ closeHandler }) => {

  return (
    <PopupLayout closeHandler={closeHandler}>
      <section className={styles.formPopup}>
        <div className={styles.closeButtonContainer}><CloseButton handler={closeHandler} /></div>
        
        <div className={styles.logoContainer}><Logo /></div>
        <h2 className={styles.formTitle}>Начните прямо сейчас</h2>

         <BitrixForm />
      </section>
    </PopupLayout>

  )
}

export default FormPopup;
