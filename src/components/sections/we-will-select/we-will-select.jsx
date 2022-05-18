import React from 'react';
import * as styles from './we-will-select.module.css';
import BasicButton from '../../basic-button/basic-button';
import SplitedSection from '../../splited-section/splited-section';
import image from '../../../images/we-will-select.jpg'
import image375 from '../../../images/we-will-select-375.jpg'

const WeWillSelect = ({ openPopupHanler }) => {

  return (
    <SplitedSection is460Cover={true} image375={image375} image={image} isReversed={true}>
      <div id='solution' className={styles.weWillSelect}>

        <div className={styles.content}>
          <div className={styles.titleContent}>
            <h2 className={styles.title}>Полная свобода творчества</h2>
            <p className={styles.subtitle}>Подберем идеальную мебель в ваш интерьер</p>
          </div>
          <BasicButton small={true} secondary={true} text='Подобрать мебель' handler={openPopupHanler} />
        </div>

      </div>
    </SplitedSection>
  )
}

export default WeWillSelect;
