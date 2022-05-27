import React from 'react';
import * as styles from './we-will-select.module.css';
import BasicButton from '../../basic-button/basic-button';
import SplitedSection from '../../splited-section/splited-section';
import image from '../../../images/we-will-select.jpg'
import image375 from '../../../images/we-will-select-375.jpg'
import useWidthMediaMatch from '../../hooks/use-width-media-match';

const WeWillSelect = ({ openFormPopupHandler }) => {
  const is460 = useWidthMediaMatch('(max-width: 460px)');

  return (
    <SplitedSection is460Cover={true} image375={image375} image={image} isReversed={true}>
      <div id='solution' className={styles.weWillSelect}>

        <div className={styles.content}>
          <div className={styles.titleContent}>
            <h2 className={styles.title}>Полная свобода творчества</h2>
            <p className={styles.subtitle}>Подберем идеальную мебель в ваш интерьер</p>
          </div>
          <BasicButton
            type={is460 ? 'tertiary' : 'secondary'}
            small={true}
            text='Заказать'
            handler={openFormPopupHandler}
          />
        </div>

      </div>
    </SplitedSection>
  )
}

export default WeWillSelect;
