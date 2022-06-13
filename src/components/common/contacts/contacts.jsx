import React from 'react';
import * as styles from './contacts.module.css';
import {
  VkIcon,
  WhatsupIcon,
} from '../../common/icons/icons';

export default function Contacts() {

  return (
    <div className={styles.contacts}>
      <a target='_blank' className={styles.link} href="https://web.whatsapp.com/send?phone=79631441111&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C+">
        <VkIcon />
      </a>
      <a target='_blank' className={styles.link} href="https://vk.com/melatika">
        <WhatsupIcon />
      </a>
    </div>
  )
}
