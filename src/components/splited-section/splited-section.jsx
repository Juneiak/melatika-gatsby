import React from 'react';
import * as styles from './splited-section.module.css';


const SplitedSection = ({ image, children, isReversed=false, is460Cover=false }) => {

  return (
    <section className={styles.splitedSection}>
      <div className={`
        ${styles.content}
        ${isReversed ? styles.isReversed : ''}
        ${is460Cover ? styles.is460Cover : ''}

      `}>
        <img src={image} alt="иконка вк" className={styles.image}/>
        <div className={styles.aboutContainer}>
          {children}
        </div>
      </div>
    </section>
  )
}

export default SplitedSection;
