import React from 'react';
import * as styles from './splited-section.module.css';


const SplitedSection = ({ image, children, isrReversed}) => {

  return (
    <section className={styles.splitedSection}>
      <div className={`
        ${styles.content}
        ${isrReversed ? styles.isReversed : ''}
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
