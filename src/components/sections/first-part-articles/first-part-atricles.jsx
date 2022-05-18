import React from 'react';
import * as styles from './first-part-articles.module.css';
import Article from '../../atricle/atricle';
import { articlesData1 } from '../../../misc/data';

const FirstPartArticles = () => {

  return (
    <section className={styles.atricles}>
      <div className={styles.content}>
        <ul className={styles.list}>

          <li className={styles.listElement1}>
            <Article
                articleData={articlesData1[0]}
                articleStyles={styles.articleCard1}
                aboutStyles={styles.about1}
              />
          </li>
          <li className={styles.listElement2}>
            <Article
                articleData={articlesData1[1]}
                articleStyles={styles.articleCard2}
                aboutStyles={styles.about2}
              />
          </li>
          <li className={styles.listElement3}>
            <Article
                articleData={articlesData1[2]}
                articleStyles={styles.articleCard3}
                aboutStyles={styles.about3}
              />
          </li>

        </ul>
      </div>
    </section>
  )
}

export default FirstPartArticles;
