import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  
  const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;

  .container {
    margin-top: 6rem;
    display: flex;
    justify-content: center;
  }

  .contact-form {
    max-width: 50rem;
    width: 100%;
  }

  .contact-inputs {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .input-group {
    position: relative;
  }

  .input-group input,
  .input-group textarea {
    width: 100%;
    padding: 1.2rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 1.4rem;
    outline: none;
    background: transparent;
  }

  .input-group label {
    position: absolute;
    left: 1.2rem;
    top: 50%;
    transform: translateY(-50%);
    background: white;
    padding: 0 0.5rem;
    color: #777;
    font-size: 1.3rem;
    transition: 0.3s ease;
    pointer-events: none;
  }

  .input-group input:focus + label,
  .input-group input:valid + label,
  .input-group textarea:focus + label,
  .input-group textarea:valid + label {
    top: -8px;
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.btn};
  }

  /* BUTTON */
  .submit-btn {
    position: relative;
    padding: 1rem;
    border: none;
    border-radius: 30px;
    background: linear-gradient(135deg, #6c63ff, #5a54e8);
    color: white;
    font-size: 1.4rem;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .submit-btn::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.3);
    transition: 0.5s;
  }

  .submit-btn:hover::before {
    left: 100%;
  }

  .submit-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(108, 99, 255, 0.4);
  }
`;
  return (
   <Wrapper className="section">
    <h2 className="common-heading">Contact Us</h2>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.664231020689!2d85.34367139999996!3d27.66585830000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1b4d59f852dd%3A0xc6d2ec31ede3fa6f!2sShrestha%20Brothers%20Auto%20parts!5e0!3m2!1sen!2snp!4v1776794209630!5m2!1sen!2snp"
     width="100%"
      height="450" 
      style={{ border: 0 }}
       allowFullScreen=""
        loading="lazy"
         referrerpolicy="no-referrer-when-downgrade">
          </iframe>
          <div className="container">
            <div className="contact-form">
              <form
  action="https://formspree.io/f/xvzdwkgb"
  method="POST"
  className="contact-inputs"
>
  <div className="input-group">
    <input type="text" name="username" required />
    <label>Username</label>
  </div>

  <div className="input-group">
    <input type="email" name="Email" required />
    <label>Email</label>
  </div>

  <div className="input-group">
    <textarea name="Message" rows="5" required></textarea>
    <label>Message</label>
  </div>

  <button type="submit" className="submit-btn">
    <span>Send Message</span>
  </button>
</form>
            </div>
          </div>
          

  </Wrapper>
  )
};

export default Contact;