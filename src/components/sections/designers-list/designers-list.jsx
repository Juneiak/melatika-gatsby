import React from 'react';
import * as styles from './designers-list.module.css';
import DesignerCard from './designer-card/designer-card';
import { designerCardsData } from '../../../misc/data';
import { BasicButton } from '../../ui';
import DesignersSliderList from './designers-slider-list/designers-slider-list';
import ButtonListElement from './button-list-element/button-list-element';

import { Is480Context } from '../../../utils/contexts';

export default function DesignersList({ openFormPopupHandler, selectVideoHandler }) {
  const is480 = React.useContext(Is480Context);

  return (
    <section id='designers' className={styles.designersList}>
      <div className={styles.content}>
        <div  className={styles.buttonConatainer}>
          <h2 className={styles.text}>Нас выбирают профи</h2>
          <button type='button' className={styles.button} onClick={openFormPopupHandler}>Работать с нами</button>
        </div>
        <div styles={{width: '375rem'}}>
          { is480
            ? <DesignersSliderList selectVideoHandler={selectVideoHandler} />
            : <ul className={styles.list}>
                <li className={styles.elementWithButton}><ButtonListElement openFormPopupHandler={openFormPopupHandler} /></li>
                <li className={styles.listElement}><DesignerCard data={designerCardsData[0]} selectVideoHandler={selectVideoHandler} /></li>
                <li className={styles.listElement}><DesignerCard data={designerCardsData[1]} selectVideoHandler={selectVideoHandler} /></li>
                <li className={styles.listElement}><DesignerCard data={designerCardsData[2]} selectVideoHandler={selectVideoHandler} /></li>
              </ul>
          }
        </div>
          
      </div>
    </section>
  )
}
