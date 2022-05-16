import React from 'react';
import * as styles from './catalog.module.css';
import image1 from '../../../images/catalog/catalog-1.jpg'
import image2 from '../../../images/catalog/catalog-2.jpg'

const Catalog = () => {

  const catalogData = [
    {
      title: 'Кровати',
      linkUrl: '#',
      image: image1,
    },
    {
      title: 'Диваны',
      linkUrl: '#',
      image: image2,
    },
  ]

  return (
    <section className={styles.catalog}>
      <ul className={styles.list}>
        {catalogData.map((item, index) => (
          <li key={index} className={styles.listElement}>
            <img className={styles.elementImage} src={item.image} alt={`иконка ${item.title}`} />
            <p className={styles.elementTitle}>{item.title}</p>
          </li>
        ))}

      </ul>
    </section>
  )
}

export default Catalog;
