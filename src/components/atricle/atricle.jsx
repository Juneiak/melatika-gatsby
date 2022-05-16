import React from 'react';
import * as styles from './atricle.module.css';


const Atricle = ({ articleData:{isBig=false, inRow=false, isTurned=false, text, title, image }}) => {

  return (
    <li className={`
      ${styles.listElement}
      ${isBig ? styles.isBig : ''}
    `}>
      <article className={styles.article}>
        <div className={`
          ${styles.content}
          ${inRow ? styles.inRow : ''}
          ${isTurned ? styles.isTurned : ''}
        `}>
          <img className={styles.image} src={image} alt="фото статьи" />

          <div style={{
            justifyContent: [isTurned ? 'flex-end' : inRow ? 'center' : 'flex-start']
          }} className={styles.about}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.text}>{text}</p>
          </div>
        </div>
      </article>
    </li>
  )
}

export default Atricle;
