import React from "react";
import NavbarMedium from "./navbar-medium";
import NavbarBottom from "./navbar-bottom";
import NavbarTop from "./navbar-top";

const Navbar = () => {
  return (
    <header>
      <nav className="bg-[#f0f2f5] py-2">
        <NavbarTop /> 
      </nav>
      <nav className="w-[85%] m-auto">
        <NavbarMedium />
        <NavbarBottom />
      </nav>
    </header>
  );
};

export default Navbar;
