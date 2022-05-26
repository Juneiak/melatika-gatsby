import React from 'react';
import * as styles from './designers-list.module.css';
import WorkWithUs from '../../work-with-us/work-with-us';
import DesignerCard from '../../designer-card/designer-card';
import { designerCardsData } from '../../../misc/data';

const DesignersList = ({ openPopupHandler }) => {

  return (
    <section id='toDesigners' className={styles.aboutUs}>
      <div className={styles.content}>
        <div className={styles.titleConatainer}>
          <WorkWithUs openPopupHanler={openPopupHandler} />
        </div>
        <ul className={styles.list}>
          <li className={styles.elementContainer}><WorkWithUs openPopupHanler={openPopupHandler} /></li>
          <li className={styles.listElement1}>
            <DesignerCard
              data={designerCardsData[0]}
              isReversed={true}

            />
          </li>
          <li className={styles.listElement2}>
            <DesignerCard
              data={designerCardsData[1]}
            />
          </li>
          <li className={styles.listElement3}>
            <DesignerCard
              data={designerCardsData[2]}
              isReversed={true}
            />
          </li>
        </ul>
      </div>
    </section>
  )
}

export default DesignersList;
