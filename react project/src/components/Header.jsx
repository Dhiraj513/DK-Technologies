import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
const Header = () => {
  return ( 
    <header>
        <NavLink to="/">
           <img src="/DKlogo.png" height={50} width={80} alt="logo" />
        </NavLink>
        <Navbar />
    </header>
  )
};
export default Header;