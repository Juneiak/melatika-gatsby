import React from 'react';
import * as styles from './footer.module.css';
import Logo from '../../logo/logo';
import Contacts from '../../contacts/contacts';

const Footer = () => {

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>

        <div className={styles.titleContainer}>
          <h2 className={styles.title}>Контакты</h2>
          <Logo />
        </div>

        <p className={styles.contacts}>
          +7-905-309-9992<br/>info@melatika.ru<br/>Москва - Дмитровское шоссе, 73<br/>Уфа - ВДНХ, 2 этаж
        </p>
        <Contacts inRow={true} />
      </div>
    </footer>
  )
}

export default Footer;
