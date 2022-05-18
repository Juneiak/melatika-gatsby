import React from 'react';
import logoImage from '../../images/icons/logo.svg';
import * as styles from './logo.module.css';

const Logo = () => {

  return (
    <img className={styles.logo} src={logoImage} alt="лого" />
  )
}

export default Logo;
