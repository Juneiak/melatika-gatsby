import React from "react";
import {
  Opening,
  Catalog,
  WeWillSelect,
  AboutUs,
  SecondPartArticles,
  FirstPartArticles,
  DesignersList,
  FixedElements,
} from '../components/sections/index';
import { FormPopup, VideoPopup, NavMenuPopup } from "../components/popups"
import IndexLayout from "../components/index-layout/index-layout";


export default function IndexPage() {
  const [ isFormPopupOpen, setIsFormPopupOpen ] = React.useState(false);
  const [ selectedDesignerVideo, setSelectedDesignerVideo ] = React.useState('');
  const [ isNavMenuOpened, setIsNavMenuOpened] = React.useState(false);

  const [ formForWhom, setFormForWhom ] = React.useState('');
  const topRef = React.useRef()

  const openFormPopup = (forWhom) => {
    setIsFormPopupOpen(true);
    setFormForWhom(forWhom)
  }

  const closeFormPopup = () => {
    setIsFormPopupOpen(false);
    setTimeout(() => setFormForWhom(''), 500)
  }

  const handleScrollToTop = () => {
    topRef.current.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <IndexLayout headerRef={topRef}>
      <main style={{width: '100%', height: '100%'}}>
        <Opening />
        <Catalog openFormPopupHandler={() => openFormPopup('customer')} />
        <WeWillSelect openFormPopupHandler={() => openFormPopup('customer')} />
        <FirstPartArticles />
        <AboutUs />
        <DesignersList selectVideoHandler={setSelectedDesignerVideo} openFormPopupHandler={() => openFormPopup('designer')} />
        <SecondPartArticles />
      </main>
      <FixedElements handleScroll={handleScrollToTop} isNavOpened={isNavMenuOpened} openNav={setIsNavMenuOpened} />


      <FormPopup isOpen={isFormPopupOpen} forDesigners={formForWhom === 'designer'} closeHandler={closeFormPopup} />
      <VideoPopup
        closeHandler={() => setSelectedDesignerVideo('')}
        videoUrl={selectedDesignerVideo}
        isOpen={!!selectedDesignerVideo}
      />
      <NavMenuPopup isOpen={isNavMenuOpened} closeNavHandler={() => setIsNavMenuOpened(false)} />

    </IndexLayout>
  )
}
