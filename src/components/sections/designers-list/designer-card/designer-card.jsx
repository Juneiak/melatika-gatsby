import React from 'react';
import * as styles from './designer-card.module.css';

export default function DesignerCard({ data: {text, name, subtitle, image, videoURl}, selectVideoHandler }) {
  
  return (
    <article onClick={videoURl ? () => selectVideoHandler(videoURl) : () => false} className={styles.article}>
      <div className={styles.content}>
        <img className={styles.image} src={image} alt="фото дизайнера" />
        <div className={styles.about}>

          <h3 className={styles.title}>{name}</h3>
          <p className={styles.subtitle}>{subtitle}</p>
          <p className={styles.text}>{text}</p>
        </div>
      </div>
    </article>
  )
}
