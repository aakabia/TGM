"use client"; // to handle on client side
import React from "react";
import Image from "next/image";
import bg from "../../../public/images/TGMLogo.jpg";
import { BtnList } from "@/app/data";
import NavLink from "./NavLink";

const Navigation = () => {
  const handleClick = () => {
    console.log("button clicked");
  };

  return (
    <div className="relative flex flex-row justify-between items-center p-5">
      <div>
        <a href="/">
        <Image
          src={bg}
          alt="Background Logo Image"
          width={150} // Width of the image
          height={100} // Height of the image
          quality={100} // Optional: ensures high-quality rendering
          style={{ filter: "brightness(100%)" }} // Darkens the image
          className="-z-10 " // Places the image behind other content
        />
        </a>
      </div>

      <div className="h-auto flex flex-row w-[60%]">
        {/* can apple inline custome css with [] */}

        {BtnList.map((btn, index) => {
          return <NavLink key={btn.label} {...btn} />;
        })}

        {/* Above maps over our button list and returns a NavLink Component with  the btn label as the key and the button properties spreaded as props.*/}
      </div>

      <div className="flex items-center justify-center w-[10%]">
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

// button only console logs currently
