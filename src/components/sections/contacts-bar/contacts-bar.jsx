import React from 'react';
import * as styles from './contacts-bar.module.css';
import { VkIcon, WhatsupIcon, PhoneIcon, } from '../../common/icons/icons';

export default function ContactsBar() {
  return (
    <section className={styles.contactsBar}>
      <ul className={styles.list}>
        <li className={styles.iconElement}>
          <a target='_blank' style={{color: 'inherit', width: 'inherit', height: 'inherit'}} href="https://vk.com/melatika"><WhatsupIcon /></a>
        </li>

        <li className={styles.iconElement}>
          <a target='_blank' style={{color: 'inherit', width: 'inherit', height: 'inherit'}} href="https://web.whatsapp.com/send?phone=79631441111&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C+"><VkIcon /></a>
        </li>
        <li className={styles.iconElement}>
          <a style={{color: 'inherit', width: 'inherit', height: 'inherit'}} href='tel:+7-905-309-9992'><PhoneIcon/></a>
        </li>
      </ul>
    </section>
  )
}
