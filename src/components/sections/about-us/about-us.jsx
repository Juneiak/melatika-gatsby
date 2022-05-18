import React from 'react';
import * as styles from './about-us.module.css';
import vkIcon from '../../../images/icons/vk-d.svg';
import image from '../../../images/about-us.jpg';
import SplitedSection from '../../splited-section/splited-section';

const AboutUs = () => {

  return (
    <SplitedSection image={image}>
      <div id='aboutUs' className={styles.aboutUs}>

        <div className={styles.content}>
          <div className={styles.nameContainer}>
            <h3 className={styles.name}>Александр Зырянов</h3>
            <a
              className={styles.vkLink}
              href="https://vk.com/"
              target='_blank'
            >
              <img src={vkIcon} alt="иконка вк" className={styles.vkIcon}/>
            </a>
            
          </div>
          <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta ab dolorem libero. Vero eligendi, fugit id doloremque voluptatem ullam pariatur molestiae quam dolorum porro? Iure repudiandae inventore eaque autem praesentium.</p>
        </div>

      </div>
    </SplitedSection>
  )
}

export default AboutUs;
