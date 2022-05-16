import React from 'react';
import * as styles from './popup-layout.module.css';

const PopupLayout = ({ children, mountAnim }) => {

  return (
    <div style={mountAnim} className={styles.popupLayout}>
      {children}
    </div>
  )
}

export default PopupLayout;
