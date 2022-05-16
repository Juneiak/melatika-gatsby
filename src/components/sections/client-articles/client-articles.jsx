import React from 'react';
import * as styles from './client-articles.module.css';
import Article from '../../atricle/atricle';
import { articlesData3 } from '../../../misc/data';
import WorkWithUs from '../../work-with-us/work-with-us';

const ClientArticles = ({openPopupHanler}) => {

  return (
    <section id='clients' className={styles.aboutUs}>
      <div className={styles.content}>
        <ul className={styles.list}>
          <Article articleData={articlesData3[0]}/>
          <WorkWithUs openPopupHanler={openPopupHanler} />
          <Article articleData={articlesData3[1]}/>
          <Article articleData={articlesData3[2]}/>
        </ul>
      </div>
    </section>
  )
}

export default ClientArticles;
