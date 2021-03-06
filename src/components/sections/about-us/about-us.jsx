import React from 'react';
import * as styles from './about-us.module.css';
import image from '../../../images/about-us/about-us.jpg';
import image_480 from '../../../images/about-us/about-us-480.jpg'
import imageWebp from '../../../images/about-us/about-us.webp';
import imageWebp_480 from '../../../images/about-us/about-us-480.webp'
import vkIcon from '../../../images/icons/vk-2.svg';
import vkIconWhite from '../../../images/icons/vk-2-white.svg';

import {Is480Context} from '../../../utils/contexts';
import {MediaImage} from '../../ui';

export default function AboutUs() {
  const is480 = React.useContext(Is480Context);
  
  return (
    <section id='aboutUs'  className={styles.aboutUs}>
      <div className={styles.content}>

        <div className={styles.imageContainer}><MediaImage imageWebp={imageWebp} imageWebp_480={imageWebp_480} image={image} image_480={image_480} alt='Александр Зырянов'/></div>
        
        <div className={styles.textContainer}>
          <div className={styles.nameContainer}>
            <h2 className={styles.name}>Александр Зырянов</h2>
            <a className={styles.vkLink} href="https://vk.com/thugsagainstdrugs" target='_blank'>
              <img src={is480 ? vkIcon : vkIconWhite} />
            </a>
          </div>
          <p className={styles.text}>Сделаем мебель в точном соответствии с вашим персональным эскизом. Воплотим любые пожелания клиента в качественном исполнении и учетом всех деталей. Вместе мы создадим интерьер, в котором хочется жить, заниматься творчеством и наслаждаться комфортом.</p>
        </div>

      </div>
    </section>
  )
}
