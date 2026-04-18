import React from 'react';
import HeroSection from './components/HeroSection';

const About = () => {
  const data={
    name:"DHIRAJ KUSHWAHA",
    Image:"/about1.svg",
  };
  return (
    <HeroSection {...data} />
  );
};

export default About;