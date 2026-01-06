import React from "react";
import Hero from "../Component/Core/HeroSection";
import Services from "../Component/Core/Services";
import AboutHero from "../Component/Core/AboutHero";
import StatsSection from "../Component/Core/StatsSection";

const Home = () => {
  return (
 <div>
  <Hero/>
  <Services/>
  <AboutHero/>
  <StatsSection/>
 </div>
  );
};

export default Home;
