import React from 'react';
import * as styles from './opening.module.css';

const Opening = () => {

  return (
    <section className={styles.opening}>
      <div className={styles.content}>
        <h1 className={styles.title}>Melatika</h1>
        <p className={styles.subtitle}>Мебель для тех, кто знает цену комфорту</p>
      </div>
    </section>
  )
}

export default Opening;
