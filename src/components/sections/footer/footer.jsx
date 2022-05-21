import React from 'react';
import * as styles from './footer.module.css';
import Logo from '../../logo/logo';
import Contacts from '../../contacts/contacts';

const Footer = () => {

  return (
    <footer  className={styles.footer}>
      <div className={styles.content}>

        <div id='contacts' className={styles.titleContainer}>
          <h2 className={styles.title}>Контакты</h2>
          <Logo />
        </div>
        <div className={styles.contacts}>
          <p>+7-905-309-99-92</p>
          <p>info@melatika.ru</p>
          <p>Москва - Дмитровское шоссе, 73</p>
          <p>Уфа - ВДНХ, 2 этаж</p>
        </div>
        <Contacts inRow={true} />
      </div>
    </footer>
  )
}

export default Footer;
