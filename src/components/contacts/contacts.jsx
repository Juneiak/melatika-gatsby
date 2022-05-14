import React from 'react';
import * as styles from './contacts.module.css';

import vkIconDark from '../../images/icons/vk-d.svg';
import callIconDark from '../../images/icons/call-d.svg';
import vkIconWhite from '../../images/icons/vk.svg';
import callIconWhite from '../../images/icons/call.svg';

const Contacts = ({ whiteColor=false, inRow=false }) => {

  return (
    <div className={`${styles.contacts} ${inRow ? styles.contactsInRow : ''}`}>
      <a href="https://vk.com/" target='_blank' className={styles.link}>
        <img style={{width: '100%', height: '100%'}} src={whiteColor ? callIconWhite : callIconDark} alt="иконка вк" className={styles.icon} />
      </a>
      <a href="https://vk.com/" target='_blank' className={styles.link}>
        <img style={{width: '100%', height: '100%'}} src={whiteColor ? vkIconWhite : vkIconDark} alt="иконка вк" className={styles.icon} />
      </a>
    </div>
  )
}

export default Contacts;
