import React from 'react';
import * as styles from './media-image.module.css';

const MediaImage = ({ image460=false, image, alt }) => {

  return (
    <picture>
      {image460 && <source media='(max-width: 460px)' srcSet={image460} />}
      <img src={image} alt={alt} style={{width: "100%", height:"100%"}}  />
    </picture>
  )
}

export default MediaImage;
