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
        const { id, name, description } = service;
        return (
          <div key={id} className="service-card">
            <figure>
              <img src={Image} alt={name} />
            </figure>
            <h3>{name}</h3>
            <p>{description}</p>
            <NavLink to="/Services">
              <Button>Read More</Button>
            </NavLink>
          </div>
        );
      })}
    </div>
  </Wrapper>;
};
const Wrapper = styled.section``;

export default Services;