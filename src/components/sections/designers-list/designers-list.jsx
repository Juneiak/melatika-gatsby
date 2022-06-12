import React, {useState} from 'react';
import * as styles from './designers-list.module.css';
import WorkWithUs from '../../common/work-with-us/work-with-us';
import DesignerCard from './designer-card/designer-card';
import { designerCardsData } from '../../../misc/data';
import { BasicButton } from '../../ui';

export default function DesignersList({ openFormPopupHandler, selectVideoHandler }) {

  return (
    <section id='toDesigners' className={styles.designersList}>
      <div className={styles.content}>
        <div  className={styles.titleConatainer}><WorkWithUs openPopupHanler={openFormPopupHandler} /></div>
          <ul className={styles.list}>
            <li className={styles.elementWithButton}>
              <div className={styles.buttonContainer}>
                <p className={styles.text}>Нас выбирают профи</p>
                <BasicButton
                  handler={openFormPopupHandler}
                  type='secondary'
                  text="Работать с нами"
                  small={true}
                />
              </div>
             </li>
            <li className={styles.listElement}><DesignerCard data={designerCardsData[0]} selectVideoHandler={selectVideoHandler} /></li>
            <li className={styles.listElement}><DesignerCard data={designerCardsData[1]} selectVideoHandler={selectVideoHandler} /></li>
            <li className={styles.listElement}><DesignerCard data={designerCardsData[2]} selectVideoHandler={selectVideoHandler} /></li>
          </ul>
      </div>
    </section>
  )
}
