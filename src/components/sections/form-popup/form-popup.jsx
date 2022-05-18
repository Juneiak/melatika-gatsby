import React from 'react';
import * as styles from './form-popup.module.css';
import PopupLayout from '../../popup-layout/popup-layout';
import CloseButton from '../../close-button/close-button';
import BitrixForm from '../../bitrix-form/bitrix-form';
import image from '../../../images/form.jpg';

const FormPopup = ({ closeHandler }) => {

  return (
    <PopupLayout closeHandler={closeHandler}>
      <section className={styles.formPopup}>
        <div className={styles.closeButtonContainer}><CloseButton handler={closeHandler} /></div>

        <div className={styles.formContainer}>
          <h2 className={styles.formTitle}>Начните прямо сейчас</h2>
          <BitrixForm />
          <p className={styles.worning}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo temporibus aspernatur doloribus quidem rerum vitae aut ipsum nam corrupti perferendis mollitia magnam id exercitationem, facilis, excepturi tempore quam eaque. Ex?</p>
        </div>
        
        <img src={image} alt="фон формы" className={styles.image} />
      </section>
    </PopupLayout>

  )
}

export default FormPopup;
