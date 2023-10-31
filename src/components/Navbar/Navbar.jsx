import React from 'react'
import './navbar.scss'
import { useState } from 'react';
import { GrFormClose } from 'react-icons/gr';
import { GiHamburgerMenu } from 'react-icons/gi';
const Navbar = () => {
  const [active, setActive] = useState('navBar');
  const showNav = () => {
    setActive('navBar activeNavbar');
  }
  const closeNav = () => {
    setActive('navBar');
  }

  return (
    <section className='navbarSection'>
      <header className='header flex'>
        <div className="logoDiv">
          <a href="/" className='logo flex'>
            <h1>TouristaTrail</h1>
          </a>
        </div>
        <div className= { active }>
          <div className="navLists flex">
              <li className='navItem'>
                <a href="#Home" className='navLink'>Home</a>
              </li>
    
              <li className='navItem'>
                <a href="#Packages" className='navLink'>Packages</a>
              </li>

              <li className='navItem'>
                <a href="#Contact" className='navLink'>Contact</a>
              </li>

              <button className="btn">
                <a href="/">BOOK NOW</a>
              </button>
          </div>
          <div onClick={ closeNav } className="closeNavbar">
              <GrFormClose className="icon"/>
          </div>
        </div>

        <div onClick={ showNav } className="toggleNavbar">
          <GiHamburgerMenu className='icon'/>
        </div>
      </header>
    </section>
  )
}
export default Navbar
