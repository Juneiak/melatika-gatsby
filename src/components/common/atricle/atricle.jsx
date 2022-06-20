import React from 'react';
import * as styles from './atricle.module.css';
import { MediaImage } from '../../ui';

export default function Atricle({ articleData: {text, title, image, image_480, imageWebp, imageWebp_480}, articleStyles, aboutStyles}) {
  return (
    <article className={styles.article}>
      <div className={`
        ${styles.content}
        ${articleStyles}
      `}>
        <div className={styles.imageContainer} src={image}><MediaImage imageWebp={imageWebp} imageWebp_480={imageWebp_480} image={image} image_480={image_480}/></div>
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
