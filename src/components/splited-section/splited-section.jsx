import React from 'react';
import * as styles from './splited-section.module.css';
import useWidthMediaMatch from '../hooks/use-width-media-match';
import MediaImage from '../media-image/media-image';

const SplitedSection = ({ image, image460, children, isReversed=false, is460Cover=false }) => {
  const is460 = useWidthMediaMatch('(max-width: 460px)');

  return (
    <section className={styles.splitedSection}>
      <div className={`
        ${styles.content}
        ${isReversed ? styles.isReversed : ''}
        ${is460Cover ? styles.is460Cover : ''}

      `}>
        <div className={styles.image}>
          <MediaImage image={image} image460={image460} alt='фоновая картинка'/>
        </div>
        <div className={styles.aboutContainer}>
          {children}
        </div>
      </div>
    </section>
  )
}

export default SplitedSection;
