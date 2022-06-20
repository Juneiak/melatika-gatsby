import React from 'react';
import * as styles from './catalog-card.module.css';
import { MediaImage } from '../../../ui';

export default function CatalogCard({ clickHandler, title, imageSrc, imageWebpSrc }) {

  return (
    <li onClick={clickHandler} className={styles.listElement}>
      <div className={styles.elementImage}>
        <MediaImage image={imageSrc} imageWebp={imageWebpSrc} />
      </div>
      <p className={styles.elementTitle}>{title}</p>
    </li>
  )
}
