import React from 'react';
import * as styles from './about-us.module.css';
import vkIcon from '../../../images/icons/vk-d.svg';
import image from '../../../images/about-us.jpg';
import image375 from '../../../images/about-us-375.jpg'
import SplitedSection from '../../splited-section/splited-section';

const AboutUs = () => {

  return (
    <SplitedSection image={image} image375={image375}>
      <div id='aboutUs' className={styles.aboutUs}>

        <div className={styles.content}>
          <div className={styles.nameContainer}>
            <h3 className={styles.name}>Александр Зырянов</h3>
            <a
              className={styles.vkLink}
              href="https://vk.com/thugsagainstdrugs"
              target='_blank'
            >
              <img src={vkIcon} alt="иконка вк" className={styles.vkIcon}/>
            </a>
            
          </div>
          <p className={styles.text}>Каждое изделие Melatika мы проектируем с огромным вниманием к деталям, а вдохновение черпаем из эстетики премиальных европейских интерьеров и брендов.</p>
        </div>

      </div>
    </SplitedSection>
  )
}

export default AboutUs;
