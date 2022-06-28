import React from 'react';
import * as styles from './opening.module.css';
import {MediaImage} from '../../ui';
import image from '../../../images/opening/opening.jpg';
import image_480 from '../../../images/opening/opening-480.jpg';
import imageWebp from '../../../images/opening/opening.webp';
import imageWebp_480 from '../../../images/opening/opening-480.webp';

export default function Opening({title}) {

  return (
    <section id='opening' className={styles.opening}>
      
      <div className={styles.content}>
        <div className={styles.image}>
          <MediaImage imageWebp={imageWebp} imageWebp_480={imageWebp_480} image={image} image_480={image_480} alt='фон главной страницы' />
        </div>
        <div className={styles.text}>
          <h1 className={styles.title}>
            Melatika
            <br />
            {/* <span className={styles.titleSpan}>Мебель для тех, кто знает цену комфорту</span> */}
            <span className={styles.titleSpan}>{title}</span>

          </h1>
        </div>
      </div>

    </section>
  )
}
