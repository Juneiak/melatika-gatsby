import React from 'react';
import * as styles from './catalog.module.css';
import image1 from '../../../images/catalog-1.jpg'
import image2 from '../../../images/catalog-2.jpg'
import image3 from '../../../images/catalog-3.jpg'
import image4 from '../../../images/catalog-4.jpg'

const Catalog = () => {

  const catalogData = [
    {
      title: 'Диваны',
      linkUrl: '#',
      image: image1,
    },
    {
      title: 'Диваны',
      linkUrl: '#',
      image: image2,
    },
    {
      title: 'Кровати',
      linkUrl: '#',
      image: image3,
    },
    {
      title: 'Кровати',
      linkUrl: '#',
      image: image4,
    }
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
