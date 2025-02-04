import React from "react";
import { BtnList } from "@/app/data";
import NavLink from "../NavLink";

const HamburgerMenu = ({ className, onClick }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-screen w-full max-w-[250px] z-50  bg-offScreenDark ham-menu ${className}`}
    >
      <div className="w-full flex justify-end p-5">
        <div
          className="relative flex w-[55px] h-[50px] cursor-pointer"
          onClick={onClick}
        >
          <span className="ham-menu-span active"></span>
          <span className="ham-menu-span active"></span>
          <span className="ham-menu-span active"></span>
        </div>
      </div>

      <ul className="flex p-4 flex-col justify-center items-center ">
        {BtnList.map((btn, index) => {
          return (
            <li key={btn.label} className="text-white my-7 ">
              <NavLink {...btn} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

// Above is our HamburgerMenu component which will be displayed once the Hamburger Icon is clicked.
// It recieves a onClick prop used to toggle the hamburger menu on and a "show" className when active.
// Last it takes our BtnList and maps over it to create our links using our NavLink component.

export default HamburgerMenu;
