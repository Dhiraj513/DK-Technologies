import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";


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
`;

const Navbar = () => {
  return (
    <Nav>
      <div className="menuIcon">
        <ul className="navbar-list">
          <li>
            <NavLink className="navbar-link" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/about">About</NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </Nav>
  );
};

export default Navbar;