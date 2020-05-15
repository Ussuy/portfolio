import React from "react"
import './header.scss'

const Header = () => (
  <div className="c-header">
    <ul className="c-header_list">
      <li className="c-header_item">
        <a href="#">Home</a>
      </li>
      <li className="c-header_item">
        <a href="#">Portfólio</a>
      </li>
      <li className="c-header_item">
        <a href="#">Depoimentos</a>
      </li>
      <li className="c-header_item">
        <a href="#">Blog</a>
      </li>
    </ul>
  </div>
)

export default Header
