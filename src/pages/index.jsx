import React from "react";
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
import { FormPopup, VideoPopup } from "../components/popups"

const IndexPage = () => {
  const [ isFormPopupOpen, setIsFormPopupOpen ] = React.useState(false);
  const [ selectedDesignerVideo, setSelectedDesignerVideo ] = React.useState('');

  const [ formTitle, setFormTitle ] = React.useState('');

  const openFormPopup = (title) => {
    setIsFormPopupOpen(true);
    setFormTitle(title)
  }

  const closeFormPopup = () => {
    setIsFormPopupOpen(false);
    setTimeout(() => setFormTitle(''), 500)
  }

  return (
    <IndexLayout>
      <main style={{width: '100%', height: '100%'}}>
        <Opening />
        <Catalog openFormPopupHandler={() => openFormPopup('Оставьте заявку и мы рассчитаем цену')} />
        <FirstPartArticles />
        <WeWillSelect openFormPopupHandler={() => openFormPopup('Оставьте заявку и мы рассчитаем цену')} />
        <SecondPartArticles />
        <AboutUs />
        <DesignersList selectVideoHandler={setSelectedDesignerVideo} openFormPopupHandler={() => openFormPopup('Получите своего персонального менеджера для комфортной работы')} />
      </main>
      <Footer />

      <FormPopup isOpen={isFormPopupOpen} title={formTitle} closeHandler={closeFormPopup} />
      <VideoPopup
        closeHandler={() => setSelectedDesignerVideo('')}
        videoUrl={selectedDesignerVideo}
        isOpen={!!selectedDesignerVideo}
      />

    </IndexLayout>
  )
}

export default IndexPage;
