import React from 'react';
import * as styles from './media-image.module.css';

export default function MediaImage({ image_480=false, image, alt }) {

  return (
    <picture>
      {image_480 && <source media='(max-width: 480px)' srcSet={image_480} />}
      <img src={image} alt={alt} style={{width: "100%", height:"100%"}}  />
    </picture>
  )
}
