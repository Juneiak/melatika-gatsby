import React from 'react';
import * as styles from './form-popup.module.css';
import PopupLayout from '../popup-layout/popup-layout';
import CloseButton from '../close-button/close-button';
import BitrixForm from '../bitrix-form/bitrix-form';
import image from '../../images/form.jpg';
import politDoc from '../../misc/confidential_politic_document.pdf';

const FormPopup = ({ closeHandler }) => {

  return (
    <PopupLayout closeHandler={closeHandler}>
      <section className={styles.formPopup}>
        <div className={styles.closeButtonContainer}><CloseButton  handler={closeHandler} /></div>

        <div className={styles.formContainer}>
          <div className={styles.formContent}>
            <h2 className={styles.formTitle}>Начните прямо сейчас</h2>
            <BitrixForm />
            <p className={styles.worning}>Нажимая кнопку, вы принимаете<br />
            <a href={politDoc} className={styles.worningLink} download>условия политики конфиденциальности</a>
            </p>
          </div>
         
        </div>
        
        <img src={image} alt="фон формы" className={styles.image} />
      </section>
    </PopupLayout>

  )
}

export default FormPopup;
