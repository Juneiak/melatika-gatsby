import React from "react";
import {
  Opening,
  Catalog,
  WeWillSelect,
  AboutUs,
  OurClients,
  Footer,
} from '../components/sections/index';

import IndexLayout from "../components/index-layout/index-layout";

const IndexPage = () => {
  const [ isFormPopupOpen, setIsFormPopupOpen ] = React.useState(false);
  
  return (
    <IndexLayout>
      <main style={{width: '100%', height: '100%'}}>
        <Opening />
        <Catalog />
        <WeWillSelect openPopupHanler={() => setIsFormPopupOpen(true)} />
        <AboutUs openPopupHanler={() => setIsFormPopupOpen(true)} />
        <OurClients openPopupHanler={() => setIsFormPopupOpen(true)} />
      </main>
      <Footer />
      {isFormPopupOpen && <div><h1>hello!</h1></div>}
    </IndexLayout>

  )
}

export default IndexPage;
