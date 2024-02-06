import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import MobileNav from "./Components/MobileNav";
import Hero from "./Components/Hero";
import TopDestination from "./Components/TopDestination";

const HomePage = () => {
  const [nav, setNav] = useState(false);
  const openNavHandler = () => setNav(true);
  const closeNavHandler = () => setNav(false);

  return (
    <div className="overflow-x-hidden">
      <MobileNav nav={nav} closeNav={closeNavHandler} />
      <Navbar openNav={openNavHandler} />
      <Hero />
      <TopDestination />
    </div>
  );
};

export default HomePage;
