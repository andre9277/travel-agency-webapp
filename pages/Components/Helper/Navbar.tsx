import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="w-[100%] bg-white">
      <div className="flex w-[80%] mx-auto items-center justify-between h-[12vh">
        <div className="relative w-[70px] h-[70px] cursor-pointer lg:w-[100px] lg:h-[100px] object-contain">
          <Image src="/images/logo.png" alt="logo" layout="fill" />
        </div>
        <div className="flex items-center space-x-12">
          <a href="#" className="nav-link">
            Home
          </a>
          <a href="#" className="nav-link">
            Tour
          </a>
          <a href="#" className="nav-link">
            Hotel
          </a>
          <a href="#" className="nav-link">
            Review
          </a>
          <a href="#" className="nav-link">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
