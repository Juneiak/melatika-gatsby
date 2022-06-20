import React from 'react';
import * as styles from './catalog.module.css';
import {catalogData} from '../../../misc/data';
import CatalogCard from './catalog-card/catalog-card';

export default function Catalog({ openFormPopupHandler }) {

  return (
    <section id='catalog' className={styles.catalog}>
      <ul className={styles.list}>
        {catalogData.map((item, index) => (
          <CatalogCard
            key={index}
            clickHandler={openFormPopupHandler}
            imageSrc={item.image}
            imageWebpSrc={item.imageWebp}
            title={item.title}
          />
        ))}
      </ul>
    </section>
  )
}
