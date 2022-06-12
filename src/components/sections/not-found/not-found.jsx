import React from 'react';
import * as styles from './not-found.module.css';
import Logo from '../../common/logo/logo';
import { navigate } from 'gatsby';
import {BasicButton} from '../../ui';

export default function NotFound() {

  return (
    <section className={styles.notFound}>
      <div className={styles.logoContainer}><Logo /></div>
      <div className={styles.content}>
        <h1 className={styles.title}>404</h1>
        <p className={styles.subtitle}>Такой страницы не существует</p>
        <BasicButton type='tertiary' text='На главную' handler={() => navigate('/')}/>
      </div>
      
    </section>
  )
}
