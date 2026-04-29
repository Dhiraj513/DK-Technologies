import React, { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import { useGlobalContext } from './context';

const About = () => {
  const { name, Image, updateAboutpage } = useGlobalContext();

  useEffect(() => {
    updateAboutpage();
  }, []);

  return <HeroSection name={name} Image={Image} />;
};

export default About;