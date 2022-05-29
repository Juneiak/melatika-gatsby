import React from 'react';
import * as styles from './opening.module.css';
import MediaImage from '../../media-image/media-image';
import image from '../../../images/opening/opening.jpg';
import image460 from '../../../images/opening/opening-460.jpg';

const Opening = () => {

  return (
    <section id='opening' className={styles.opening}>
      <div className={styles.image}>
        <MediaImage image={image} image460={image460} alt='фон главной страницы' />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Melatika</h1>
        <p className={styles.subtitle}>Мебель для тех, кто знает цену комфорту</p>
      </div>
    </section>
  )
}

export default Opening;
