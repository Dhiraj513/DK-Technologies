import React, { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import { useGlobalContext } from "./context";

const Home = () => {
  const { name, Image, updateHomepage } = useGlobalContext();

  useEffect(() => {
    updateHomepage();
  }, []);

  return (
    <>
      <HeroSection name={name} Image={Image} />
    </>
  );
};

export default Home;