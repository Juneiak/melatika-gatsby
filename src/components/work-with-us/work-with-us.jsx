import React from 'react';
import * as styles from './work-with-us.module.css';
import BasicButton from '../basic-button/basic-button';

const WorkWithUs = ({ openPopupHanler }) => {

  return (
      <div className={styles.workWithUs}>
        <p className={styles.text}>Нас выбирают профи</p>
        <BasicButton
          handler={openPopupHanler}
          type='secondary'
          text="Работать с нами"
          small={true}
        />
      </div>
  )
}

export default WorkWithUs;
