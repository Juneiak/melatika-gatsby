import React from 'react';
import * as styles from './work-with-us.module.css';
import BasicButton from '../basic-button/basic-button';

const WorkWithUs = ({ openPopupHanler }) => {

  return (
    <li>
      <div className={styles.workWithUs}>
        <p className={styles.text}>Нас выбирают профи</p>
        <BasicButton handler={openPopupHanler} text="Работать с нами" secondary={true} small={true} />
      </div>
    </li>
    
  )
}

export default WorkWithUs;
