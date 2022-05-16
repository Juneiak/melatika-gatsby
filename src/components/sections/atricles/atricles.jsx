import React from 'react';
import * as styles from './atricles.module.css';
import Article from '../../atricle/atricle';

const Atricles = ({ articlesData }) => {

  return (
    <section className={styles.aboutUs}>
      <div className={styles.content}>
        <ul className={styles.list}>
          {
            articlesData.map((articleData, index) => (
              <Article
                key={index}
                articleData={articleData}
              />
            ))
          }
        </ul>
      </div>
    </section>
  )
}

export default Atricles;
