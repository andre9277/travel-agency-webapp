import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="w-[100%] bg-white">
      <div className="flex w-[80%] mx-auto items-center justify-between h-[12vh">
        <div className="relative w-[70px] h-[70px] lg:w-[100px] lg:h-[100px] object-contain">
          <Image src="/images/logo.png" alt="logo" layout="fill" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
