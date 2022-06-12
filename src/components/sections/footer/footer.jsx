import React from 'react';
import * as styles from './footer.module.css';
import companyName from '../../../images/misc/company-name.svg';
import Contacts from '../../common/contacts/contacts';

export default function Footer() {
  let year = new Date().getFullYear();
  
  return (
    <footer  className={styles.footer}>
      <div className={styles.content}>
        <img className={styles.companyName} src={companyName} alt='Melatika'/>

        <div className={styles.mail}>
          <a style={{color: 'var(--color-white)', textDecoration: 'none'}} href='tel:+7 963-144-1111'>+7 963-144-1111</a>
          <p href='mailto:info@melatika.ru'>info@melatika.ru</p>
        </div>

        <div className={styles.contactsContainer}><Contacts whiteColor={true} inRow={true} /></div>
        <p className={styles.year}>&copy; {year}год. Melatika™ X CookDog. Все права защищены.</p>
      </div>
    </footer>
  )
}
