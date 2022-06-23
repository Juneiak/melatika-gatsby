import React from 'react';
import * as styles from './contacts-bar.module.css';
import vkIcon from '../../../images/icons/vk.svg';
import phoneIcon from '../../../images/icons/phone.svg';
import wuIcon from '../../../images/icons/wu.svg';
import tgIcon from '../../../images/icons/tg.svg';

export default function ContactsBar() {
  return (
    <section className={styles.contactsBar}>
      <ul className={styles.list}>
        <li className={styles.iconElement}>
          <a target='_blank' href="https://web.whatsapp.com/send?phone=79631441111&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C+">
            <img className={styles.icon} src={vkIcon}/>
          </a>
        </li>
        <li className={styles.iconElement}>
          <a target='_blank' href="https://vk.com/melatika">
            <img className={styles.icon} src={wuIcon}/>
          </a>
        </li>
        <li className={styles.iconElement}>
          <a href='http://t.me/melatikabot'>
          <img className={styles.icon} src={tgIcon}/>
          </a>
        </li>
        <li className={styles.iconElement}>
          <a href='tel:+7-905-309-9992'>
            <img className={styles.icon} src={phoneIcon}/>
          </a>
        </li>

      </ul>
    </section>
  )
}
