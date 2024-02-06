import React, { useState } from "react";
import Navbar from "./Components/Helper/Navbar";
import MobileNav from "./Components/Helper/MobileNav";
import Hero from "./Components/Helper/Hero";

const HomePage = () => {
  const [nav, setNav] = useState(false);
  const openNavHandler = () => setNav(true);
  const closeNavHandler = () => setNav(false);

  return (
    <div className="overflow-x-hidden">
      <MobileNav nav={nav} closeNav={closeNavHandler} />
      <Navbar openNav={openNavHandler} />
      <Hero />
    </div>
  );
};

export default HomePage;
