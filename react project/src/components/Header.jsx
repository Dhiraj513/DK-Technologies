import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import styled from 'styled-components';
const Header = () => {
  return ( 
    <MainHeader>
        <NavLink to="/">
           <img src="/DK.png" height={80} width={150} alt="logo" />
        </NavLink>
        <Navbar />
    </MainHeader>
  )
};
const MainHeader=styled.header`
display:flex;
justify-content:space-between;
align-items:center;         
padding: 0 4.8rem;
background-color:${({theme})=>theme.colors.bg};
height:10vh;
display:flex;
justify-content:space-between;
.logo{
    height:auto;
    width:50px; 
}
   `; 
export default Header;