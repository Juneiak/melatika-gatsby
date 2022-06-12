import React from 'react';
import * as styles from './video-popup.module.css';
import PopupLayout from '../popup-layout/popup-layout';

export default function VideoPopup({ videoUrl, isOpen, closeHandler }) {

  return (
    <PopupLayout isOpen={isOpen} closeHandler={closeHandler}>
      <section className={styles.videoPopup}>
        <iframe
          width="100%"
          height="100%"
          src={videoUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>
    </PopupLayout>
  )
}
