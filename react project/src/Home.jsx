import React, { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import { useGlobalContext } from "./context";
import Services from "./Services";

const Home = () => {
  const { name, Image, updateHomepage } = useGlobalContext();

  useEffect(() => {
    updateHomepage();
  }, []);

  return (
    <>
      <HeroSection name={name} Image={Image} />
      <Services />
    </>
  );
};

export default Home;