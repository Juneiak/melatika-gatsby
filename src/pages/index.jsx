import React from "react";
import {
  Opening,
  Catalog,
  WeWillSelect,
  AboutUs,
  SecondPartArticles,
  FirstPartArticles,
  DesignersList,
  FixedElements
} from '../components/sections/index';
import { FormPopup, VideoPopup, NavMenuPopup } from "../components/popups"
import IndexLayout from "../components/index-layout/index-layout";


export default function IndexPage() {
  const [ isFormPopupOpen, setIsFormPopupOpen ] = React.useState(false);
  const [ selectedDesignerVideo, setSelectedDesignerVideo ] = React.useState('');
  const [ isNavMenuOpened, setIsNavMenuOpened] = React.useState(false);

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
        <WeWillSelect openFormPopupHandler={() => openFormPopup('Оставьте заявку и мы рассчитаем цену')} />
        <FirstPartArticles />
        <AboutUs />
        <DesignersList selectVideoHandler={setSelectedDesignerVideo} openFormPopupHandler={() => openFormPopup('Получите своего персонального менеджера для комфортной работы')} />
        <SecondPartArticles />
      </main>
      <FixedElements isNavOpened={isNavMenuOpened} openNav={setIsNavMenuOpened} />


      <FormPopup isOpen={isFormPopupOpen} title={formTitle} closeHandler={closeFormPopup} />
      <VideoPopup
        closeHandler={() => setSelectedDesignerVideo('')}
        videoUrl={selectedDesignerVideo}
        isOpen={!!selectedDesignerVideo}
      />
      <NavMenuPopup isOpen={isNavMenuOpened} closeNavHandler={() => setIsNavMenuOpened(false)} />

    </IndexLayout>
  )
}
