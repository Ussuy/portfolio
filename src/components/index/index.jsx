import React from "react"

import Header from "components/shared/header.jsx"
import Main from "components/index/main.jsx"
import Aside from "components/index/aside.jsx"
import Footer from "components/shared/footer.jsx"
import './index.scss'

export default () => {

  return (
    <div className="c-index">
      <div className="c-index_container">
        <header className="c-index_header">
          <Header />
        </header>
        <main className="c-index_main">
          <Main />
        </main>
        <aside className="c-index_aside">
          <Aside />
        </aside>
        <footer className="c-index_footer">
          <Footer />      
        </footer>
      </div>
    </div>
  )
}
