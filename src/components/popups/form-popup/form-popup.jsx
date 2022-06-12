import React from 'react';
import * as styles from './form-popup.module.css';
import CloseButton from '../../ui/close-button/close-button';
import BitrixForm from '../../common/bitrix-form/bitrix-form';
import image from '../../../images/misc/form.jpg';
import politDoc from '../../../misc/confidential_politic_document.pdf';
import PopupLayout from '../popup-layout/popup-layout';

export default function FormPopup({ title, closeHandler, isOpen }) {

  const [ isSuccessResponse, setIsSuccessResponse ] = React.useState(false)

  return (
    <PopupLayout isOpen={isOpen}>
      <section className={styles.formPopup}>
        <div className={styles.closeButtonContainer}><CloseButton handler={closeHandler} /></div>

        <div className={styles.formContainer}>
          {
            isSuccessResponse
            ? <p className={styles.successMessage}>Ваша заявка получена,<br />в ближайшее время наш<br />менеджер свяжется с вами</p>
            :
              <div className={styles.formContent}>
              <h2 className={styles.formTitle}>{title}</h2>
                <BitrixForm setIsSuccessResponse={setIsSuccessResponse}/>
                <p className={styles.worning}>Нажимая кнопку, вы принимаете<br />
                  <a href={politDoc} className={styles.worningLink} download>условия политики конфиденциальности</a>
                </p>
              </div>
          }
          
        </div>
        
        <img src={image} alt="фон формы" className={styles.image} />
      </section>
    </PopupLayout>  
  )
}
