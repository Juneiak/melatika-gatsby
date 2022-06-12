import React from 'react';
import * as styles from './we-will-select.module.css';
import image from '../../../images/we-will-select/we-will-select.jpg'
import image_480 from '../../../images/we-will-select/we-will-select-480.jpg'

import { Is480Context } from '../../../utils/contexts';
import {MediaImage, BasicButton} from '../../ui';

export default function WeWillSelect({ openFormPopupHandler }) {
  const is480 = React.useContext(Is480Context)

  return (
    <section className={styles.weWillSelect}>
      <div className={styles.content}>

        <div className={styles.textContainer}>
          <h2 className={styles.title}>Полная свобода творчества</h2>
          <p className={styles.subtitle}>Мебель по вашему проекту</p>
          <BasicButton type={is480 ? 'tertiary' : 'secondary'} small={true} text='Заказать' handler={openFormPopupHandler}/>
        </div>

        <div className={styles.image}><MediaImage image={image} image_480={image_480} alt='фоновая картинка'/></div>

      </div>
    </section>
  )
}
