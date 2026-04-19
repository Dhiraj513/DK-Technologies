import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./Button";

const HeroSection = ({ name, Image }) => {
  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        
        {/* LEFT SIDE */}
        <div className="section-hero-data">
          <p className="hero-top-data">THIS IS ME</p>

          <h1 className="hero-heading">{name}</h1>

          <p className="hero-para">
            I am Dhiraj Kushwaha. A passionate student exploring the intersection of
            technology, design, and human experience. Building meaningful things
            one line of code at a time.
          </p>

          <Button className="btn hireme-btn">
            <NavLink to="/contact">Hire me</NavLink>
          </Button>
        </div>

        {/* RIGHT SIDE */}
        <div className="section-hero-image">
          {Image && (
            <img src={Image} alt="hero" className="hero-img" />
          )}
        </div>

      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 100vh;
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

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .hero-top-data {
    text-transform: uppercase;
    font-size: 1.4rem;
    color: #6c63ff;
    margin-bottom: 1rem;
  }

  .hero-heading {
    font-size: 4rem;
    font-weight: bold;
  }

  .hero-para {
    margin: 2rem 0;
    font-size: 1.6rem;
    max-width: 45rem;
  }

  .btn {
    width: 16rem;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
  }

  .hero-img {
    width: 80%;
    max-width: 40rem;
  }

  @media (max-width: 768px) {
    .grid-two-column {
      grid-template-columns: 1fr;
      text-align: center;
    }

    .hero-img {
      width: 60%;
      margin-top: 2rem;
    }
  }
`;

export default HeroSection;