import * as React from "react"
import NotFound from "../components/sections/not-found/not-found";
import Helmet from "react-helmet";
const NotFoundPage = () => {
  return (
    <>
    <Helmet>
      <title>Melatika - not found</title>
    </Helmet>
    <main style={{ width: '100%', height: '100vh'}}>
      <NotFound />
    </main>
    </>

  )
}

export default NotFoundPage
