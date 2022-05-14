import React from 'react';
import * as styles from './atricle.module.css';


const Atricle = ({ isBig=false, inRow=false, isTurned=false, text, title, image }) => {

  return (
    <article className={styles.article}>
      <div className={`
        ${styles.content}
        ${isBig ? styles.big : ''}
        ${inRow ? styles.inRow : ''}
        ${isTurned ? styles.inRow : ''}

      `}>
        <img className={styles.image} src={image} alt="фото статьи" />
        <div className={styles.about}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.text}>{text}</p>
        </div>
      </div>
    </article>
  )
}

export default Atricle;
