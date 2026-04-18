import React from 'react';

import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from './Button';
import { AppContext, useGlobalContext } from '../context';
const HeroSection = ({ name, Image }) => {
    const firstName = useGlobalContext();
  return <Wrapper>
    <div className="container grid grid-two-column">
      <div className="section-hero-data">
      <p className='hero-top-data'>THIS IS ME</p>
      <h1 className='hero-heading'>{name}</h1>
      <p className='hero-para'>
        I am {firstName}.A passionate student exploring the intersection of
         technology, design, and human experience.
         Building meaningful things one line of code at a time.
      
      </p>
      
      <Button className="btn hireme-btn">
        <NavLink to="/contact">Hire me</NavLink>
      </Button>
      </div>
      <div className="section-hero-image">
      <picture>
        <img src={Image}  alt="hero image" className='hero-img' />
      </picture>
      </div>
    </div>  

  </Wrapper>
};
const Wrapper = styled.section`
  height: 100vh;
  background: linear-gradient(
    135deg,
    #f5f7ff 0%,
    #eef1ff 100%
  );

  display: flex;
  align-items: center;

  .container {
    max-width: 120rem;
    margin: 0 auto;
    padding: 0 2rem;
    width: 100%;
  }

  .grid {
    display: grid;
    gap: 6rem;
  }

  .grid-two-column {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }

  /* LEFT SIDE */
  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    animation: fadeInLeft 1s ease;
  }

  .hero-top-data {
    text-transform: uppercase;
    font-size: 2rem;
    letter-spacing: 0.2rem;
    color: ${({ theme }) => theme.colors.helper};
    margin-bottom: 0rem;
  }

  .hero-heading {
    font-size: 5rem;
    font-weight: 800;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.heading};
  }

  .hero-para {
    margin: 2rem 0;
    max-width: 45rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
  }

  .btn {
    width: 18rem;
    padding: 1.2rem 2rem;
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.helper};
    color: white;
    transition: all 0.3s ease;
  }

  .btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  }

  /* RIGHT SIDE */
  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
    animation: fadeInRight 1s ease;
  }

  .hero-img {
    width: 85%;
    max-width: 42rem;
    transition: transform 0.4s ease;
  }

  .hero-img:hover {
    transform: scale(1.05);
  }

  /* ✨ Animations */
  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  /* 📱 Responsive */
  @media (max-width: 768px) {
    .grid-two-column {
      grid-template-columns: 1fr;
      text-align: center;
    }

    .hero-img {
      width: 65%;
      margin-top: 3rem;
    }
  }
`;

export default HeroSection;