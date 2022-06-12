import React from 'react';
import * as styles from './catalog-card.module.css';

export default function CatalogCard({ clickHandler, title, imageSrc }) {

  return (
    <li onClick={clickHandler} className={styles.listElement}>
      <img className={styles.elementImage} src={imageSrc} alt={`иконка ${title}`} />
      <p className={styles.elementTitle}>{title}</p>
    </li>
  )
}
