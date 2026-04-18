import React, { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import { useGlobalContext } from './context';

const Home = () => {
  /*const data = {
    name: "DK TECHNOLOGIES",
    Image: "/hero.svg",
  }; */
  const {updateHomepage} = useGlobalContext();
  useEffect(() => 
    updateHomepage(),[] );
  return (
  <> <HeroSection  />
  </>)
};

export default Home;