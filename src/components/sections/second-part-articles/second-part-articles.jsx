import React from 'react';
import * as styles from './second-part-articles.module.css';
import Article from '../../common/atricle/atricle';
import { articlesData2 } from '../../../misc/data';

export default function SecondPartArticles() {

  return (
    <section className={styles.atricles}>
      <div className={styles.content}>
        <ul className={styles.list}>

          <li className={styles.listElement1}>
            <Article
                articleData={articlesData2[0]}
                articleStyles={styles.articleCard1}
                aboutStyles={styles.about1}
              />
          </li>
          <li className={styles.listElement2}>
            <Article
                articleData={articlesData2[1]}
                articleStyles={styles.articleCard2}
                aboutStyles={styles.about2}
              />
          </li>
          <li className={styles.listElement3}>
            <Article
                articleData={articlesData2[2]}
                articleStyles={styles.articleCard3}
                aboutStyles={styles.about3}
              />
          </li>

        </ul>
      </div>
    </section>
  )
}
