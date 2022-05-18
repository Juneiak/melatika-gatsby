import React from 'react';
import * as styles from './client-articles.module.css';
import Article from '../../atricle/atricle';
import { articlesData3 } from '../../../misc/data';
import WorkWithUs from '../../work-with-us/work-with-us';

const ClientArticles = ({ openPopupHanler }) => {

  return (
    <section id='toDesigners' className={styles.aboutUs}>
      <div className={styles.content}>
        <div className={styles.titleConatainer}>
          <WorkWithUs openPopupHanler={openPopupHanler} />
        </div>
        <ul className={styles.list}>
          <li className={styles.elementContainer}><WorkWithUs openPopupHanler={openPopupHanler} /></li>
          <Article articleData={articlesData3[0]}/>
          <Article articleData={articlesData3[1]}/>
          <Article articleData={articlesData3[2]}/>
        </ul>
      </div>
    </section>
  )
}

export default ClientArticles;
