import React from 'react';
import '../../styles/global.css'
import * as styles from './index-layout.module.css';
import Logo from '../logo/logo';
import Contacts from '../contacts/contacts';
import BurgerMenuButton from '../burger-menu-button/burger-menu-button';
import NavMenu from '../nav-menu/nav-menu'
import useDelayUnmountState from '../hooks/use-delay-unmount-state';
import PopupLayout from '../popup-layout/popup-layout';

const IndexLayout = ({ children }) => {
  const [isNavMenuOpen, setIsNavMenuOpen] = React.useState(false);
  const isShouldNavMount = useDelayUnmountState(isNavMenuOpen, 500);

  const animStyle = isNavMenuOpen ? {animation: 'openAniamtion 0.5s linear'} : {animation: 'closeAniamtion 0.5s linear forwards'}

  return (
    <div className={styles.layout}>

      {children}

      <div className={styles.logoContainer}><Logo /></div>
      <div className={styles.contactsContainer}><Contacts whiteColor={true}/></div>
      <div className={styles.buttonContainer}>
        <BurgerMenuButton handler={() => setIsNavMenuOpen(!isNavMenuOpen)}/>
      </div>

      {isShouldNavMount &&
        <PopupLayout isNav={true} mountAnim={animStyle}>
          <NavMenu closeNavHandler={() => setIsNavMenuOpen(false)} />
        </PopupLayout>
      }

    </div>
  )
}

export default IndexLayout
