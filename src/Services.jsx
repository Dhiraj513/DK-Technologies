import React from 'react';
import{NavLink} from 'react-router-dom';
import styled from 'styled-components';
import { useGlobalContext } from './context';
import { Button } from './components/Button';
const Services = () => {
  const { services } = useGlobalContext();
  console.log(services);
  return <Wrapper className="section">
    <h2 className="common-heading">Our Services</h2>
    <div className="container grid grid-three-column">
      {services.map((curElem) => {
        const { id, title , image, description } = curElem;
        return (
          <div key={id} className="service-card">
  <figure className="img-container">
    <img src={image} alt={title} />
  </figure>

  <div className="card-content">
    <h3>{title}</h3>
    <p>{description}</p>

    <a 
  href="https://miraai.tech/service" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <Button className="read-btn">Read More</Button>
</a>
  </div>
</div>
        );
      })}
    </div>
  </Wrapper>;
};
const Wrapper = styled.section`
  padding: 8rem 0;
  background: linear-gradient(135deg, #f6f7ff, #eef1ff);

  .common-heading {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 6rem;
    font-weight: 600;
    color: #222;
  }

  .grid-three-column {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4rem;
  }

  /* CARD */
  .service-card {
    background: rgba(255, 255, 255, 0.7);
    border-radius: 20px;
    backdrop-filter: blur(12px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    overflow: hidden;
    transition: all 0.4s ease;
  }

  .service-card:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
  }

  /* IMAGE */
  .img-container {
    position: relative;
    overflow: hidden;
  }

  .img-container img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .img-container::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0);
    transition: all 0.4s ease;
  }

  .img-container:hover img {
    transform: scale(1.1);
  }

  .img-container:hover::after {
    background: rgba(0, 0, 0, 0.4);
  }

  /* CONTENT */
  .card-content {
    padding: 2rem;
  }

  .card-content h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #222;
  }

  .card-content p {
    font-size: 1.4rem;
    color: #555;
    line-height: 1.6;
    margin-bottom: 2rem;
  }

  /* BUTTON */
  .read-btn {
    padding: 0.8rem 1.6rem;
    border-radius: 30px;
    background: linear-gradient(135deg, #6c63ff, #5a54e8);
    color: white;
    font-size: 1.3rem;
    transition: all 0.3s ease;
  }

  .read-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(108, 99, 255, 0.4);
  }

  /* 📱 Responsive */
  @media (max-width: 998px) {
    .grid-three-column {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 768px) {
    .grid-three-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Services;