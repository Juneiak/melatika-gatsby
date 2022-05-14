import React from 'react';
import * as styles from './about-us.module.css';
import CallToActionButton from '../../call-to-action-button/call-to-action-button';
import vkIcon from '../../../images/icons/vk-d.svg';
import image from '../../../images/contact-us.jpg';

const AboutUs = ({ openPopupHanler }) => {

  return (
    <section className={styles.aboutUs}>
      <div className={styles.content}>
        <img src={image} alt="иконка вк" className={styles.image}/>
        <div className={styles.aboutContainer}>
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
          <p className={styles.about}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta ab dolorem libero. Vero eligendi, fugit id doloremque voluptatem ullam pariatur molestiae quam dolorum porro? Iure repudiandae inventore eaque autem praesentium.</p>
          <CallToActionButton secondary={true} clickHandler={openPopupHanler} text='Подобрать мебель' />
        </div>
      </div>
    </section>
  )
}

export default AboutUs;
