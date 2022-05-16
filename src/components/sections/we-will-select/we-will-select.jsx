import React from 'react';
import * as styles from './we-will-select.module.css';
import BasicButton from '../../basic-button/basic-button';
import SplitedSection from '../../splited-section/splited-section';
import image from '../../../images/we-will-select.jpg'

const WeWillSelect = ({ openPopupHanler }) => {

  return (
    <SplitedSection image={image} isrReversed={true}>
      <div className={styles.weWillSelect}>

        <div className={styles.content}>
          <div className={styles.titleContent}>
            <h2 className={styles.title}>Полная свобода творчества</h2>
            <p className={styles.subtitle}>Подберем идеальную мебель в ваш интерьер</p>
          </div>
          <BasicButton secondary={true} small={true} text='Подобрать мебель' handler={openPopupHanler} />
        </div>

      </div>
    </SplitedSection>
  )
}

export default WeWillSelect;
