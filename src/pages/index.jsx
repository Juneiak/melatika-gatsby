import React from "react";
import Opening from '../components/sections/opening/opening'
import IndexLayout from "../components/index-layout/index-layout";
import * as styles from '../styles/page-styles/index-page.css';

const IndexPage = () => {
  const [ isFormPopupOpen, setIsFormPopupOpen ] = React.useState(false);
  
  return (
    <IndexLayout>
      <main className={styles.main}>
        <Opening />
      </main>
      {setIsFormPopupOpen && <div></div>}
    </IndexLayout>

  )
}

export default IndexPage;
