import React from 'react';
import * as styles from './about-us.module.css';
import vkIcon from '../../../images/icons/vk.svg';
import image from '../../../images/about-us/about-us.jpg';
import image_480 from '../../../images/about-us/about-us-480.jpg'
import {MediaImage} from '../../ui';

export default function AboutUs() {

  return (
    <section id='aboutUs'  className={styles.aboutUs}>
      <div className={styles.content}>

        <div className={styles.imageContainer}><MediaImage image={image} image_480={image_480} alt='Александр Зырянов'/></div>
        
        <div className={styles.textContainer}>
          <h2 className={styles.name}>Александр Зырянов
            <a className={styles.vkLink} href="https://vk.com/thugsagainstdrugs" target='_blank'><img src={vkIcon} alt="иконка вк" className={styles.vkIcon}/></a>
          </h2>
          <p className={styles.text}>Каждое изделие Melatika мы проектируем с огромным вниманием к деталям, а вдохновение черпаем из эстетики премиальных европейских интерьеров и брендов.</p>
        </div>

      </div>
    </section>
  )
}
