import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./Button";

const HeroSection = ({ name, Image }) => {
  return (
    <Wrapper>
      <div className="container grid grid-two-column">

        {/* LEFT */}
        <div className="section-hero-data">
          <p className="hero-top-data">THIS IS ME</p>

          <h1 className="hero-heading">
            {name}
          </h1>

          <p className="hero-para">
            I am Dhiraj Kushwaha. A passionate student exploring the intersection of
            technology, design, and human experience. Building meaningful things
            one line of code at a time.
          </p>

          <div className="btn-group">
            <Button className="btn primary">
              <NavLink to="/contact">Hire Me</NavLink>
            </Button>

            <Button className="btn ghost">
              <NavLink to="/services">Explore</NavLink>
            </Button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="section-hero-image">
          {Image && <img src={Image} alt="hero" className="hero-img" />}
        </div>

      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 10rem 0;
  background: linear-gradient(135deg, #f5f7ff, #eef1ff);

  .container {
    max-width: 120rem;
    margin: 0 auto;
    padding: 0 2rem;
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
    animation: fadeInLeft 1s ease;
  }

  .hero-top-data {
    text-transform: uppercase;
    font-size: 1.4rem;
    letter-spacing: 2px;
    color: #6c63ff;
    margin-bottom: 1rem;
  }

  .hero-heading {
    font-size: 5rem;
    font-weight: 800;
    line-height: 1.2;
    background: linear-gradient(135deg, #2c2c2c, #6c63ff);
    -webkit-background-clip: text;
    color: transparent;
  }

  .hero-para {
    margin: 2rem 0;
    font-size: 1.6rem;
    max-width: 45rem;
    color: #555;
  }

  .btn-group {
    display: flex;
    gap: 1.5rem;
  }

  .btn {
    padding: 1rem 2rem;
    border-radius: 30px;
    font-size: 1.4rem;
    transition: all 0.3s ease;
  }

  .primary {
    background: linear-gradient(135deg, #6c63ff, #5a54e8);
    color: #fff;
    box-shadow: 0 10px 25px rgba(108, 99, 255, 0.4);
  }

  .primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(108, 99, 255, 0.5);
  }

  .ghost {
    border: 1px solid #6c63ff;
    color: #6c63ff;
    background: transparent;
  }

  .ghost:hover {
    background: #6c63ff;
    color: white;
  }

  /* RIGHT SIDE */
  .section-hero-image {
    display: flex;
    justify-content: center;
    animation: fadeInRight 1s ease;
  }

  .hero-img {
    width: 85%;
    max-width: 42rem;
    filter: drop-shadow(0 20px 40px rgba(0,0,0,0.2));
    transition: transform 0.4s ease;
  }

  .hero-img:hover {
    transform: scale(1.05);
  }

  /* Animations */
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

  /* MOBILE */
  @media (max-width: 768px) {
    .grid-two-column {
      grid-template-columns: 1fr;
      text-align: center;
    }

    .btn-group {
      justify-content: center;
    }

    .hero-img {
      width: 65%;
      margin-top: 3rem;
    }
  }
`;

export default HeroSection;