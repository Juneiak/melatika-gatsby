import React from 'react';
import * as styles from './footer.module.css';
import companyName from '../../../images/misc/company-name-white.svg';
import companyName_480 from '../../../images/misc/company-name-dark.svg';

import { VkIcon, WhatsupIcon } from '../../common/icons/icons';
import { MediaImage } from '../../ui';

export default function Footer() {
  let year = new Date().getFullYear();
  
  return (
    <footer id='contacts'  className={styles.footer}>
      <div className={styles.content}>

        <div className={styles.mainContainer}>
          <div className={styles.logoContainer}><MediaImage image={companyName} image_480={companyName_480} /></div>

          <div className={styles.mail}>
            <a href='tel:+79631441111'>+7 963-144-1111</a>
            <a href='mailto:info@melatika.ru'>info@melatika.ru</a>
          </div>

          <div className={styles.contacts}>
            <a target='_blank' className={styles.link} href="https://web.whatsapp.com/send?phone=79631441111&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C+">
              <WhatsupIcon />
            </a>
            <a href="https://vk.com/melatika" target='_blank' className={styles.link}>
              <VkIcon />
            </a>
          </div>
        </div>

        <p className={styles.year}>
          &copy; {year} год. Melatika™. Все права защищены
          <br/>
          <span style={{color: "#5C5C5C"}}>CookDog</span>
        </p>
      </div>
    </footer>
  )
}
