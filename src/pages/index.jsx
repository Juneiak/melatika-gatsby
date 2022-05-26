import React from "react";
import useDelayUnmountState from "../components/hooks/use-delay-unmount-state";
import {
  Opening,
  Catalog,
  WeWillSelect,
  AboutUs,
  Footer,
  SecondPartArticles,
  FirstPartArticles,
  DesignersList,
} from '../components/sections/index';
import IndexLayout from "../components/index-layout/index-layout";
import PopupLayout from "../components/popup-layout/popup-layout";
import FormPopup from "../components/form-popup/form-popup";

const IndexPage = () => {
  const [ isFormPopupOpen, setIsFormPopupOpen ] = React.useState(false);
  const [ formTitle, setFormTitle ] = React.useState('');


  const isShouldFormMount = useDelayUnmountState(isFormPopupOpen, 500)
  const animStyle = isFormPopupOpen ? {animation: 'openAniamtion 0.5s linear'} : {animation: 'closeAniamtion 0.5s linear forwards'}
  
  const openForm = (title) => {
    setIsFormPopupOpen(true);
    setFormTitle(title)
  }

  const closeForm = () => {
    setIsFormPopupOpen(false);
    setFormTitle('')
  }

  return (
    <IndexLayout>
      <main style={{width: '100%', height: '100%'}}>
        <Opening />
        <Catalog openPopupHandler={() => openForm(true)} />
        <FirstPartArticles />
        <WeWillSelect openPopupHandler={() => openForm('Получите своего персонального менеджера для комфортной работы')} />
        <SecondPartArticles />
        <AboutUs />
        <DesignersList openPopupHandler={() => openForm('Оставьте заявку и мы рассчитаем цену')} />
      </main>
      <Footer />

      {isShouldFormMount &&
        <PopupLayout mountAnim={animStyle}>
          <FormPopup title={formTitle}  closeHandler={closeForm} />
        </PopupLayout>
      }
    </IndexLayout>
  )
}

export default IndexPage;
