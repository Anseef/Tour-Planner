import React from 'react'
import './navbar.scss'
import { useState } from 'react';
import { GrFormClose } from 'react-icons/gr';
import { GiHamburgerMenu } from 'react-icons/gi';
import { SiYourtraveldottv } from 'react-icons/si';
const Navbar = () => {
  const [active, setActive] = useState('navBar');
  const showNav = () => {
    setActive('navBar activeNavbar');
  }
  const closeNav = () => {
    setActive('navBar');
  }

  const handleNavItemClick = () => {
    closeNav();
  };

  return (
    <section className='navbarSection'>
      <header className='header flex'>
        <div className="logoDiv">
          <a href="/" className='logo flex'>
            <SiYourtraveldottv className='icon'/>
            <h1>TouristaTrail</h1>
          </a>
        </div>
        <div className= { active }>
          <div className="navLists flex">
              <li className='navItem'>
                <a href="#Home" className='navLink' onClick={ handleNavItemClick }>Home</a>
              </li>
    
              <li className='navItem'>
                <a href="#Packages" className='navLink'  onClick={ handleNavItemClick }>Packages</a>
              </li>

              <li className='navItem'>
                <a href="#Contact" className='navLink'  onClick={ handleNavItemClick }>Contact</a>
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
