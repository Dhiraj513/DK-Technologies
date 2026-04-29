import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { CgMenu,CgCloseR } from "react-icons/cg";
import { useState } from "react";


const Nav = styled.nav`
  .navbar-list {
    display: flex;
    gap: 4.8rem;
    list-style: none;
  }

  .navbar-link {
    text-decoration: none;

    &:link,
    &:visited {
      display: inline-block;
      font-size: 1.8rem;
      transition: color 0.3s ease;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.text};
    }

    &:hover,
    &:active {
      color: ${({ theme }) => theme.colors.helper};
    }
  }
  .mobile-navbar-btn{
    display: none;
    .close-outline
    {display: none;
    }
  }

  

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .mobile-navbar-btn{
      display: inline-block;
      z-index: 999;
      border: ${({ theme }) => theme.colors.text};
      .mobile-nav-icon{
        font-size: 4.2rem;
        color: ${({ theme }) => theme.colors.text};
      }
    }
    /* Hide the original navbar list on mobile */
    .navbar-list {
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      background-color: #fff;
     transform: translateX(100%);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 3rem;
      transition: transform 0.3s ease;
      text-align: center;

      li{
      &.navbar-link{
        &:link,
        &:visited {
          font-size: 4.2rem;
        }
        &:hover,
        &:active {
          color: ${({ theme }) => theme.colors.helper};
        }
      }
    }
    }
    .active.mobile-nav-icon{
      display: none;
      font-size: 4.2rem;
      position: absolute;
      top:3%;
      right: 10%;
      color: ${({ theme }) => theme.colors.text};
      z-index: 999;
    }

    
    .active .navbar-list{
      visibility: visible;
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <Nav>
      <div className={openMenu ? "menuIcon active" : "menuIcon"}      >
        <ul className="navbar-list">
          <li>
            <NavLink className="navbar-link"
            onClick={() => setOpenMenu(false)}
            to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/about" onClick={() => setOpenMenu(false)}>About</NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/services" onClick={() => setOpenMenu(false)}>Services</NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/contact" onClick={() => setOpenMenu(false)}>Contact</NavLink>
          </li>
        </ul>
        { /*navbar menu icon for mobile view*/ }
        <div className="mobile-navbar-btn">
  {openMenu ? (
    <CgCloseR
      className="mobile-nav-icon"
      onClick={() => setOpenMenu(false)}
    />
  ) : (
    <CgMenu
      className="mobile-nav-icon"
      onClick={() => setOpenMenu(true)}
    />
  )}
</div>
      </div>
    </Nav>
  );
};

export default Navbar;