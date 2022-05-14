import React from 'react';
import * as styles from './opening.module.css';

const Opening = () => {

  return (
    <section className={styles.opening}>
      <div className={styles.content}>
        <h1 className={styles.title}>Мебель для тех, кто <br/> знает цену комфорту</h1>
      </div>
    </section>
  )
}

export default Opening;
