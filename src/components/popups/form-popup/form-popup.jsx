import React from 'react';
import * as styles from './form-popup.module.css';


import CloseButton from '../../ui/close-button/close-button';
import Form from './form/form';
import image1 from '../../../images/form-popup/form-popup-1.jpg';
import image2 from '../../../images/form-popup/form-popup-2.jpg';

import politDoc from '../../../misc/confidential_politic_document.pdf';
import PopupLayout from '../popup-layout/popup-layout';

export default function FormPopup({ forDesigners, closeHandler, isOpen }) {

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
              <h2 className={styles.formTitle}>{forDesigners ? 'Получите своего персонального менеджера для комфортной работы' : 'Оставьте заявку и мы рассчитаем цену'}</h2>
              <Form setStatus={setIsSuccessResponse}/>
                <p className={styles.worning}>Нажимая кнопку, вы принимаете<br />
                  <a href={politDoc} className={styles.worningLink} download>условия политики конфиденциальности</a>
                </p>
              </div>
          }
          
        </div>
        
        <img src={forDesigners ? image2 : image1} alt="фон формы" className={styles.image} />
      </section>
    </PopupLayout>  
  )
}
