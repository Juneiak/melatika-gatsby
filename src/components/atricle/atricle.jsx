import React from 'react';
import * as styles from './atricle.module.css';

const Atricle = ({ articleData: {text, title, image}, articleStyles, aboutStyles}) => {
  return (
    <article className={styles.article}>
      <div className={`
        ${styles.content}
        ${articleStyles}
      `}>
        <img className={styles.image} src={image} alt="фото статьи" />
        <div className={`
          ${styles.about}
          ${aboutStyles}
        `}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.text}>{text}</p>
        </div>
      </div>
    </article>
  )
}

export default Atricle;
