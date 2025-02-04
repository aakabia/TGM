"use Client";
import React, { useState } from "react";

const HamburgerIcon = ({ onClick }) => {
  return (
    <div
      className="relative w-[55px] h-[50px] cursor-pointer md:hidden "
      onClick={onClick}
    >
      <span className="ham-menu-span"></span>
      <span className="ham-menu-span"></span>
      <span className="ham-menu-span"></span>
    </div>
  );
};

// Above is our HamburgerIcon component  which will be displayed on small screens.
// it recieves a onClick prop used to toggle the hamburger menu on

export default HamburgerIcon;
