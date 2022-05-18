import React from 'react';
import * as styles from './popup-layout.module.css';

const PopupLayout = ({ children, mountAnim, isNav }) => {

  return (
    <div style={{
      ...mountAnim,
      zIndex: [isNav ? 1 : 3]
    }} className={styles.popupLayout}>
      {children}
    </div>
  )
}

export default PopupLayout;
