import React from 'react';
import * as styles from './designer-card.module.css';

const DesignerCard = ({ data: {text, name, subtitle, image, videoURl}, isReversed, selectVideoHandler }) => {
  
  return (
    <article onClick={videoURl ? () => selectVideoHandler(videoURl) : () => false} className={styles.article}>
      <div className={`
        ${styles.content}
        ${isReversed ? styles.isReversed : ''}
      `}>
        <img className={styles.image} src={image} alt="фото дизайнера" />
        <div className={styles.about}>
          {videoURl && <span className={styles.watchVideo}>Смотреть видео-отзыв</span>}

          <h3 className={styles.title}>{name}</h3>
          <p className={styles.subtitle}>{subtitle}</p>
          <p className={styles.text}>{text}</p>
        </div>
      </div>
    </article>
  )
}

export default DesignerCard;
