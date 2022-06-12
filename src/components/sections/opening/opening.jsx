import React from 'react';
import * as styles from './opening.module.css';
import {MediaImage} from '../../ui';
import image from '../../../images/opening/opening.jpg';
import image_480 from '../../../images/opening/opening-480.jpg';

export default function Opening() {

  return (
    <section id='opening' className={styles.opening}>
      
      <div className={styles.content}>
        <div className={styles.image}>
          <MediaImage image={image} image_480={image_480} alt='фон главной страницы' />
        </div>
        <div className={styles.text}>
          <h1 className={styles.title}>Melatika</h1>
          <p className={styles.subtitle}>Мебель для тех, кто знает цену комфорту</p>
        </div>
      </div>

    </section>
  )
}
