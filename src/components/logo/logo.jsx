import React from 'react';
import * as style from './logo.module.css';
import logoImage from '../../images/icons/logo.svg'
const Logo = ({ size="3vw" }) => {

  return (
    <img style={{
      height: size,
      width: size
    }} src={logoImage} alt="лого" />
  )
}

export default Logo;
