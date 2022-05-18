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
  SecondPartArticles,
  FirstPartArticles,
} from '../components/sections/index';
import IndexLayout from "../components/index-layout/index-layout";
import PopupLayout from "../components/popup-layout/popup-layout";
import FormPopup from "../components/form-popup/form-popup";

const IndexPage = () => {
  const [ isFormPopupOpen, setIsFormPopupOpen ] = React.useState(false);
  const isShouldFormMount = useDelayUnmountState(isFormPopupOpen, 500)
  const animStyle = isFormPopupOpen ? {animation: 'openAniamtion 0.5s linear'} : {animation: 'closeAniamtion 0.5s linear forwards'}

  return (
    <IndexLayout >
      <main style={{width: '100%', height: '100%'}}>
        <Opening />
        <Catalog />
        <FirstPartArticles />
        <WeWillSelect openPopupHanler={() => setIsFormPopupOpen(true)} />
        <SecondPartArticles />
        <AboutUs openPopupHanler={() => setIsFormPopupOpen(true)} />
        {/* <ClientArticles openPopupHanler={() => setIsFormPopupOpen(true)} /> */}
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
