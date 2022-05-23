import React from 'react';
import * as styles from './splited-section.module.css';
import useWidthMediaMatch from '../hooks/use-width-media-match';

const SplitedSection = ({ image, image375, children, isReversed=false, is460Cover=false }) => {
  const is460 = useWidthMediaMatch('(max-width: 460px)');


  return (
    <section className={styles.splitedSection}>
      <div className={`
        ${styles.content}
        ${isReversed ? styles.isReversed : ''}
        ${is460Cover ? styles.is460Cover : ''}

      `}>
        <img src={!is460 ? image : image375} alt="иконка вк" className={styles.image} />
        <div className={styles.aboutContainer}>
          {children}
        </div>
      </div>
    </section>
  )
}

export default SplitedSection;
