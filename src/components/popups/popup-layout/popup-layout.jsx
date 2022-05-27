import React from 'react';
import * as styles from './popup-layout.module.css';
import useDelayUnmountState from '../../hooks/use-delay-unmount-state';
import CloseButton from '../../close-button/close-button';

const PopupLayout = ({ children, isNav, isOpen, closeHandler }) => {

  const isShouldVideoPopupMount = useDelayUnmountState(!!isOpen, 500)
  const animation = isOpen ? {animation: 'openAniamtion 0.5s linear'} : {animation: 'closeAniamtion 0.5s linear forwards'}

  const overlayClose = (evt) => {
    if (evt.target.classList.contains(styles.popupLayout)) closeHandler()
  }

  return (
    isShouldVideoPopupMount && 
      <div 
        style={{...animation, zIndex: [isNav ? 1 : 3]}}
        className={styles.popupLayout}
        onClick={overlayClose}
      >
        {closeHandler && <div className={styles.closeButtonContainer}><CloseButton handler={closeHandler} /></div>
      }
        {children}
      </div>
  )
}

export default PopupLayout;
