import React from 'react';
import * as styles from './client-articles.module.css';
import Article from '../../atricle/atricle';
import { articlesData3 } from '../../../misc/data';
import WorkWithUs from '../../work-with-us/work-with-us';
import useWidthMediaMatch from '../../hooks/use-width-media-match';
import image375 from '../../../images/about/about-8-375.jpg'
const ClientArticles = ({ openPopupHanler }) => {

  const is460 = useWidthMediaMatch('(max-width: 460px)');
  return (
    <section id='toDesigners' className={styles.aboutUs}>
      <div className={styles.content}>
        <div className={styles.titleConatainer}>
          <WorkWithUs openPopupHanler={openPopupHanler} />
        </div>
        <ul className={styles.list}>
          <li className={styles.elementContainer}><WorkWithUs openPopupHanler={openPopupHanler} /></li>
          <li className={styles.listElement1}>
            <Article
                articleData={articlesData3[0]}
                articleStyles={styles.articleCard1}
                aboutStyles={styles.about1}
              />
          </li>
          <li className={styles.listElement2}>
            <Article
                articleData={{...articlesData3[1], image: [!is460 ? articlesData3[1].image : image375]}}
                articleStyles={styles.articleCard2}
                aboutStyles={styles.about2}
              />
          </li>
          <li className={styles.listElement3}>
            <Article
                articleData={articlesData3[2]}
                articleStyles={styles.articleCard3}
                aboutStyles={styles.about3}
              />
          </li>
        </ul>
      </div>
    </section>
  )
}

export default ClientArticles;
