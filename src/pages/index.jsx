import React from "react";
import useDelayUnmountState from "../components/hooks/use-delay-unmount-state";
import {
  Opening,
  Catalog,
  WeWillSelect,
  Atricles,
  AboutUs,
  Footer,
  ClientArticles,
} from '../components/sections/index';
import { articlesData1, articlesData2 } from "../misc/data";
import IndexLayout from "../components/index-layout/index-layout";
import PopupLayout from "../components/popup-layout/popup-layout";
import FormPopup from "../components/sections/form-popup/form-popup";

const IndexPage = () => {
  const [ isFormPopupOpen, setIsFormPopupOpen ] = React.useState(false);
  const isShouldFormMount = useDelayUnmountState(isFormPopupOpen, 500)
  const animStyle = isFormPopupOpen ? {animation: 'openAniamtion 0.5s linear'} : {animation: 'closeAniamtion 0.5s linear'}

  return (
    <IndexLayout >
      <main style={{width: '100%', height: '100%'}}>
        <Opening />
        <Catalog />
        <Atricles articlesData={articlesData1} />
        <WeWillSelect openPopupHanler={() => setIsFormPopupOpen(true)} />
        <Atricles articlesData={articlesData2} />
        <AboutUs openPopupHanler={() => setIsFormPopupOpen(true)} />
        <ClientArticles openPopupHanler={() => setIsFormPopupOpen(true)} />
      </main>
      <Footer />

      {isShouldFormMount &&
        <PopupLayout mountAnim={animStyle}>
          <FormPopup closeHandler={() => setIsFormPopupOpen(false)}  />
        </PopupLayout>
      }
    </IndexLayout>
  )
}

export default IndexPage;
