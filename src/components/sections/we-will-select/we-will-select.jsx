import React from 'react';
import * as styles from './we-will-select.module.css';
import image from '../../../images/we-will-select/we-will-select.jpg'
import image_480 from '../../../images/we-will-select/we-will-select-480.jpg'
import imageWebp from '../../../images/we-will-select/we-will-select.webp'
import imageWebp_480 from '../../../images/we-will-select/we-will-select-480.webp'
import WeWillSelectButton from './we-will-select-button/we-will-select-button';
import { Is480Context } from '../../../utils/contexts';
import {MediaImage} from '../../ui';

export default function WeWillSelect({ openFormPopupHandler }) {
  const is480 = React.useContext(Is480Context)

  return (
    <section id='solution' className={styles.weWillSelect}>
      <div className={styles.content}>

        <div className={styles.textContainer}>
          <h2 className={styles.title}>
            Полная свобода творчества
            <br />
            <p className={styles.titleSpan}>{is480 ? 'Подберем идеальную мебель в ваш интерьер' : 'Мебель по вашему проекту'}</p>
          </h2>
          <WeWillSelectButton text={is480 ? 'Подобрать мебель' : 'Заказать'} clickHandler={openFormPopupHandler}/>
        </div>

        <div className={styles.imageContainer}><MediaImage imageWebp={imageWebp} imageWebp_480={imageWebp_480} image={image} image_480={image_480} alt='фоновая картинка'/></div>

      </div>
    </section>
  )
}
