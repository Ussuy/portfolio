import React from "react"

import Header from "components/shared/header.jsx"
import Footer from "components/shared/footer.jsx"
import './index.scss'

export default () => {

  return (
    <div className="c-index">
      <div className="c-index_container">
        <Header />
        <Footer />      
      </div>
    </div>
  )
}
