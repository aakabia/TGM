"use client"; // to handle on client side
import React, { useState } from 'react';
import Image from "next/image";
import bg from "../../../public/images/TGMLogo.jpg";
import { BtnList } from "@/app/data";
import NavLink from "./NavLink";
import HamburgerMenu from "./hamburgerMenu/HamburgerMenu";
import HamburgerIcon from "./hamburgerMenu/HamburgerIcon";


const Navigation = () => {

    
  
    const handleClick = (event) => {
      // Use window.location.href to navigate
      event.stopPropagation();
      window.location.href = "/quote";
      
     
      
    };
  // Above does nothing yet 

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Above uses state to help toggle the hamburger menu 



  return (
    <div className="relative flex flex-row justify-between items-center p-5">
      <div className= 'w-[25%] md:w-[15%] '>
        <a href="/">
        <Image
          src={bg}
          alt="Background Logo Image"
          quality={100} // Optional: ensures high-quality rendering
          style={{ filter: "brightness(100%)" }} // Darkens the image
          className=" w-[100px]  -z-10 " // Places the image behind other content
        />
        </a>
      </div>

      <HamburgerIcon onClick={handleMenuToggle} />
      <HamburgerMenu className={`${isMenuOpen? "show":" "} `} onClick={handleMenuToggle}/>
      {/* Above, HamburgerIcon is used and the onClick is passed to it.*/}
      {/* Above, HamburgerMenu is passed extra css if isMenuOpen is true also, the onClick is passed to it.*/}
      


      
      <div className="hidden md:flex flex-row justify-between h-auto  w-[70%] ">
        

        {BtnList.map((btn, index) => {
          return <NavLink key={btn.label} {...btn} />;
        })}

        
      </div>






      <div className=" hidden md:flex items-center justify-center w-[10%]">
        <button
          onClick={handleClick}
          className="bg-emerald text-white px-2 py-3 font-thin text-sm rounded hover:text-black"
        >
          GET QUOTE
        </button>
      </div>
    </div>
  );
};

export default Navigation;


