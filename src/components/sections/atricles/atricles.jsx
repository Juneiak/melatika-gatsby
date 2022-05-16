import React from 'react';
import * as styles from './atricles.module.css';
import Article from '../../atricle/atricle';
import { articlesData } from '../../../misc/data';

const Atricles = () => {

  return (
    <section className={styles.aboutUs}>
      <div className={styles.content}>
        <ul className={styles.list}>
          {
            articlesData.map((articleData, index) => (
              <Article
                key={index}
                text={articleData.text}
                title={articleData.title}
                image={articleData.image}
                inRow={articleData.inRow}
                isBig={articleData.isBig}
                isTurned={articleData.isTurned}
              />
            ))
          }

        </ul>
      </div>
    </section>
  )
}

export default Atricles;
