import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex bg-[#32b6bb] justify-between  gap-32 h-20 items-center px-32 ">
        <h1 className="text-[45px] text-[#ad4242]">React</h1>
        <div className="flex gap-20">
          <a href="#" className="text-white">
            Home
          </a>
          <a href="#" className="text-white">
            About
          </a>
          <a href="#" className="text-white">
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
