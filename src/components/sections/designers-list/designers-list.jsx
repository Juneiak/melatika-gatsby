import React, {useState} from 'react';
import * as styles from './designers-list.module.css';
import WorkWithUs from '../../work-with-us/work-with-us';
import DesignerCard from '../../designer-card/designer-card';
import { designerCardsData } from '../../../misc/data';
import Arrow from './arrow/arrow';
import DoubleElement from './double-element/double-element';

const DesignersList = ({ openFormPopupHandler, selectVideoHandler }) => {
  const [ isSecondPage, setIsSecondPage ] = useState(false);

  return (
    <section id='toDesigners' className={styles.designersList}>
      <div className={styles.content}>
        <div  className={styles.titleConatainer}>
          <WorkWithUs openPopupHanler={openFormPopupHandler} />
        </div>
        <div className={styles.listContainer}>
          <li className={styles.elementContainer}><WorkWithUs openPopupHanler={openFormPopupHandler} /></li>
          <div className={styles.listWrapper}>
            <Arrow clickHandler={() => setIsSecondPage(false)} isHide={!isSecondPage}/>

            <ul className={styles.list}>
              <DoubleElement isSecondState={isSecondPage}
                firstCard={<DesignerCard data={designerCardsData[0]} isReversed={true} selectVideoHandler={selectVideoHandler} />}
                secondCard={<DesignerCard data={designerCardsData[2]} isReversed={false} selectVideoHandler={selectVideoHandler} />}
              />
              <DoubleElement isReversed={true} isSecondState={isSecondPage}
                firstCard={<DesignerCard data={designerCardsData[1]} isReversed={false} selectVideoHandler={selectVideoHandler} />}
                secondCard={<DesignerCard data={designerCardsData[0]} isReversed={true} selectVideoHandler={selectVideoHandler} />}
              />
               <DoubleElement isSecondState={isSecondPage}
                firstCard={<DesignerCard data={designerCardsData[2]} isReversed={true} selectVideoHandler={selectVideoHandler} />}
                secondCard={<DesignerCard data={designerCardsData[1]} isReversed={false} selectVideoHandler={selectVideoHandler} />}
              />
            </ul>

            <Arrow clickHandler={() => setIsSecondPage(true)} isNextState={true} isHide={isSecondPage}/>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default DesignersList;
