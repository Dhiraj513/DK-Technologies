import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./Button";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      {/* 🔥 FLOATING CTA */}
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to build something amazing?</h3>
            <p>Let’s create your next big idea together.</p>
          </div>

          <div>
            <NavLink to="/contact">
              <Button className="cta-btn">Get Started</Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* 🔥 MAIN FOOTER */}
      <footer>
        <div className="container grid grid-four-column">

          {/* 1 */}
          <div className="footer-col">
            <h3>DK Technologies</h3>
            <p>
              Where innovation meets precision to build the future.
            </p>
          </div>

          {/* 2 */}
          <div className="footer-col">
            <h3>Subscribe</h3>
            <div className="subscribe-box">
              <input type="email" placeholder="Enter your email" />
              <button>🚀</button>
            </div>
          </div>

          {/* 3 */}
          <div className="footer-col">
            <h3>Follow Us</h3>
            <div className="social">
              <a href="https://twitter.com/dhiraj513" target="_blank"><FaTwitter /></a>
              <a href="https://www.facebook.com/dhiraj.kushwaha.31149" target="_blank"><FaFacebookF /></a>
              <a href="https://www.instagram.com/dhiraj513" target="_blank"><FaInstagram /></a>
            </div>
          </div>

          {/* 4 */}
          <div className="footer-col">
            <h3>Contact</h3>
            <p>Kathmandu, Nepal</p>
            <p>+977 984703250</p>
          </div>

        </div>

        {/* 🔥 BOTTOM BAR */}
        <div className="bottom">
          <p>© {new Date().getFullYear()} DK Technologies</p>
          <div className="links">
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* 🔥 CTA CARD */
  .contact-short {
    max-width: 70vw;
    margin: auto;
    padding: 4rem;
    border-radius: 20px;
    background: linear-gradient(135deg, #6c63ff, #5a54e8);
    color: white;
    transform: translateY(50%);
    box-shadow: 0 20px 60px rgba(0,0,0,0.2);
  }

  .cta-btn {
    background: white;
    color: #6c63ff;
    border-radius: 30px;
    padding: 1rem 2rem;
    transition: 0.3s;
  }

  .cta-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.3);
  }

  .grid {
    display: grid;
    gap: 4rem;
  }

  .grid-two-column {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }

  .grid-four-column {
    grid-template-columns: repeat(4, 1fr);
  }

  /* 🔥 FOOTER */
  footer {
    padding: 15rem 0 5rem 0;
    background: radial-gradient(circle at top, #1e1e2f, #0f172a);
    color: white;
  }

  .footer-col h3 {
    margin-bottom: 1.5rem;
  }

  .footer-col p {
    color: #cbd5e1;
    font-size: 1.4rem;
  }

  /* 🔥 SUBSCRIBE */
  .subscribe-box {
    display: flex;
    border-radius: 50px;
    overflow: hidden;
    background: rgba(255,255,255,0.1);
    backdrop-filter: blur(10px);
  }

  .subscribe-box input {
    flex: 1;
    padding: 1rem;
    border: none;
    outline: none;
    background: transparent;
    color: white;
  }

  .subscribe-box button {
    padding: 1rem 1.5rem;
    border: none;
    background: linear-gradient(135deg, #6c63ff, #5a54e8);
    color: white;
    cursor: pointer;
    transition: 0.3s;
  }

  .subscribe-box button:hover {
    transform: scale(1.1);
  }

  /* 🔥 SOCIAL ICONS */
  .social {
    display: flex;
    gap: 1.5rem;
  }

  .social a {
    width: 40px;
    height: 40px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: rgba(255,255,255,0.1);
    color: white;
    transition: 0.3s;
  }

  .social a:hover {
    background: #6c63ff;
    transform: translateY(-5px);
  }

  /* 🔥 BOTTOM */
  .bottom {
    margin-top: 4rem;
    padding-top: 2rem;
    border-top: 1px solid #333;
    display: flex;
    justify-content: space-between;
    color: #aaa;
  }

  .links span {
    margin-left: 1rem;
    cursor: pointer;
  }

  /* 📱 MOBILE */
  @media (max-width: 768px) {
    .grid-four-column {
      grid-template-columns: 1fr;
      text-align: center;
    }

    .grid-two-column {
      grid-template-columns: 1fr;
      text-align: center;
    }

    .bottom {
      flex-direction: column;
      gap: 1rem;
      text-align: center;
    }
  }
`;

export default Footer;