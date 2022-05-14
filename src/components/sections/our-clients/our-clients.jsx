import React from 'react';
import * as styles from './our-clients.module.css';
import CallToActionButton from '../../call-to-action-button/call-to-action-button';
import clientLogo1 from '../../../images/our-clients/client-1.png'
import clientLogo2 from '../../../images/our-clients/client-2.png'
import clientLogo3 from '../../../images/our-clients/client-3.png'
import clientLogo4 from '../../../images/our-clients/client-4.png'
import clientLogo5 from '../../../images/our-clients/client-5.png'

const OurClients = ({ openPopupHanler }) => {
  const clientsData = [ clientLogo1, clientLogo2, clientLogo3, clientLogo4, clientLogo5 ]
  return (
    <section className={styles.aboutUs}>
      <div className={styles.content}>
        <h2 className={styles.title}>Нас выбирают профи</h2>
        <ul className={styles.list}>
          {
            clientsData.map((logo, index) => (
              <li key={index} className={styles.listElement}>
                <img src={logo} alt="лого компании" className={styles.logo} />
              </li>
            ))
          }
        </ul>
        <CallToActionButton secondary={true} small={true} clickHandler={openPopupHanler} text='Подобрать мебель' />
      </div>
    </section>
  )
}

export default OurClients;
