import React from "react";
import {
  Opening,
  Catalog,
  WeWillSelect,
  AboutUs,
} from '../components/sections/index';

import IndexLayout from "../components/index-layout/index-layout";
import * as styles from '../styles/page-styles/index-page.css';

const IndexPage = () => {
  const [ isFormPopupOpen, setIsFormPopupOpen ] = React.useState(false);
  
  return (
    <IndexLayout>
      <main className={styles.main}>
        <Opening />
        <Catalog />
        <WeWillSelect openPopupHanler={() => setIsFormPopupOpen(true)} />
        <AboutUs openPopupHanler={() => setIsFormPopupOpen(true)} />
      </main>
      {isFormPopupOpen && <div><h1>hello!</h1></div>}
    </IndexLayout>

  )
}

export default IndexPage;
