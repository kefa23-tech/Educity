import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { Link, Element } from 'react-scroll';
import menu_icon from'../../assets/menu-icon.png'


const Navbar = () => {

  const [sticky, setSticky] = useState(false);
useEffect(()=>{
  window.addEventListener('scroll',()=>{
    window.scrollY > 50 ? setSticky(true) : setSticky(false);
  })
})
  const[mobilMenu, setMobileMenu] = useState(false)
  const toggleMenu = ()=>{
    mobilMenu ? setMobileMenu(false): setMobileMenu(true);
  }


  return (
    <nav className={`container ${sticky? 'dark-nav':''}`}>
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className='logo' />
      </div>
      
     <ul className={mobilMenu ? "":'hide-mobile-menu'}>
      
        <li> <Link to ='hero' smooth={true} offset = {0} duration={500}>
        Home</Link> </li>
        <li><Link to ='program' smooth={true} offset = {-260} duration={500}>
        Program</Link></li>
       <li> <Link to ='about' smooth={true} offset = {-150} duration={500}>
        About</Link> </li>
        <li><Link to ='campus' smooth={true} offset = {-260} duration={500}>
        Campus</Link></li>
        <li><Link to ='testimonials' smooth={true} offset = {-260} duration={500}>
        Testimonials</Link></li>
        <li> <Link  to ='contact' smooth={true} offset = {-260} duration={500} className='btn'>Contact us</Link></li> 
      </ul>
         <img src={menu_icon} alt="Logo" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  );
};

export default Navbar;
