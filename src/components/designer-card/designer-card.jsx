import React from 'react';
import * as styles from './designer-card.module.css';

const DesignerCard = ({ data: {text, name, subtitle, image}, isReversed }) => {
  return (
    <article className={styles.article}>
      <div className={`
        ${styles.content}
        ${isReversed ? styles.isReversed : ''}
      `}>
        <img className={styles.image} src={image} alt="фото дизайнера" />
        <div className={styles.about}>
          <span className={styles.watchVideo}>Смотреть видео-отзыв</span>

          <h3 className={styles.title}>{name}</h3>
          <p className={styles.subtitle}>{subtitle}</p>
          <p className={styles.text}>{text}</p>
        </div>
      </div>
    </article>
  )
}

export default DesignerCard;
