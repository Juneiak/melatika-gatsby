import React from 'react';
import * as styles from './we-will-select.module.css';
import CallToActionButton from '../../call-to-action-button/call-to-action-button';

const WeWillSelect = ({ openPopupHanler }) => {

  return (
    <section className={styles.weWillSelect}>
      <div className={styles.content}>
        <div className={styles.titleContent}>
          <h2 className={styles.title}>Полная свобода творчества</h2>
          <p className={styles.subtitle}>Подберем идеальную мебель в ваш интерьер</p>
        </div>
        <CallToActionButton small={true} text='Подобрать мебель' clickHandler={openPopupHanler} />
      </div>
    </section>
  )
}

export default WeWillSelect;
