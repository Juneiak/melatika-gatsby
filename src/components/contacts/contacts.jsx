import React from 'react';
import * as styles from './contacts.module.css';

import vkIconDark from '../../images/icons/vk-d.svg';
import callIconDark from '../../images/icons/call-d.svg';
import vkIconWhite from '../../images/icons/vk.svg';
import callIconWhite from '../../images/icons/call.svg';

const Contacts = ({ whiteColor=false, inRow=false }) => {

  return (
    <div className={`${styles.contacts} ${inRow ? styles.contactsInRow : ''}`}>
      <a href="https://web.whatsapp.com/send?phone=79631441111&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C+" target='_blank' className={styles.link}>
        <img style={{width: '100%', height: '100%'}} src={whiteColor ? callIconWhite : callIconDark} alt="иконка ватсапп" className={styles.icon} />
      </a>
      <a href="https://vk.com/melatika" target='_blank' className={styles.link}>
        <img style={{width: '100%', height: '100%'}} src={whiteColor ? vkIconWhite : vkIconDark} alt="иконка вк" className={styles.icon} />
      </a>
    </div>
  )
}

export default Contacts;
