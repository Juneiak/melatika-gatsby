import React from 'react';
import * as styles from './designer-card.module.css';
import { MediaImage } from '../../../ui';

export default function DesignerCard({ data: {text, name, subtitle, image, image_480, videoURl}, selectVideoHandler }) {
  
  return (
    <article onClick={videoURl ? () => selectVideoHandler(videoURl) : () => false} className={styles.article}>

      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <MediaImage image={image} image_480={image_480}/>
          { videoURl && <div className={styles.play}></div>}
        </div>
        <div className={styles.about}>

          <h3 className={styles.title}>{name}</h3>
          <p className={styles.subtitle}>{subtitle}</p>
          <p className={styles.text}>{text}</p>
          {videoURl && <p className={styles.watchVideo}>Смотреть видео</p>}
        </div>
      </div>
    </article>
  )
}
