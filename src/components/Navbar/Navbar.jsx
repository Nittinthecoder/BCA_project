import React from 'react'
import './Navbar.scss'

import { images } from '../../constants'

const Navbar = () => {
  return (
    <nav className='app_navbar'>
      <div className='app_navbar-logo'>
        <img src={images.download} alt=" LOGO " />
      </div>      
      <ul className='app_navbar-menu'>
        {['Home', 'About','Semester'].map((item) => (
          <li className="app_navbar_links-key" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
