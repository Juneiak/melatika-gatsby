import React from 'react';
import * as styles from './atricle.module.css';


const Atricle = ({ articleData: {
  isBig=false,
  inRow=false,
  isTurned=false,
  is460Big=false,
  in460Row=false,
  is460Turned=false,
  text,
  title,
  image,
}}) => {

  return (
    <li className={`
      ${styles.listElement}
      ${isBig ? styles.isBig : ''}

      ${is460Big ? styles.is460Big : ''}
    `}>
      <article className={styles.article}>
        <div className={`
          ${styles.content}
          ${inRow ? styles.inRow : ''}
          ${isTurned ? styles.isTurned : ''}

          ${in460Row ? styles.in460Row : ''}
          ${is460Turned ? styles.is460Turned : ''}
        `}>
          <img className={styles.image} src={image} alt="фото статьи" />

          <div className={styles.about}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.text}>{text}</p>
          </div>
        </div>
      </article>
    </li>
  )
}

export default Atricle;
