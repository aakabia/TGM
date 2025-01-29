"use client";
import React from "react";
import Image from "next/image";
import { serviceAreas } from "@/app/data";
import grassPic from "../../../public/images/grass.jpg";

const ServiceArea = () => {
  const handleClick = () => {
    console.log("button clicked");
  };

  return (
    <div className=" py-20 w-full h-auto flex justify-between ">
      <div className="w-[50%] p-20 overflow-hidden ">
        <h3 className="text-4xl">
          <span className="text-emerald">Serving</span> Gwinnett <br /> County &
          More
        </h3>
        <p className="p-5 font-thin">{serviceAreas.areaStatment}</p>
        <h3 className="p-5 font-thin text-2xl">Areas We Proudly Serve:</h3>
        <ul className="p-5 font-thin text-xl overflow-hidden">
          {serviceAreas.areas.map((area, index) => {
            return (
              <li className="p-1" key={index}>
                {area}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="w-[40%] p-10 mx-14 relative flex flex-col justify-center items-center  bg-emeraldOp overflow-hidden">
        <Image
          src={grassPic}
          alt="grass Image"
          fill
          objectFit="cover" // handy on making images seem closer
          quality={100} // Optional: ensures high-quality rendering
          style={{ filter: "brightness(100%)" }} // Darkens the image
          className=" -z-10 " // Places the image behind other content
        />
        <h2 className="p-20 font-thin text-4xl text-white">Areas We Serve</h2>
        <div>
          <button
            onClick={handleClick}
            className="bg-emeraldOp text-white px-4 py-3 font-thin text-sm rounded border  border-white hover:text-emerald hover:bg-white"
          >
            GET QUOTE
          </button>
        </div>
      </div>
    </div>
  );
};

{
  /* end of serve area on home page. */
}
export default ServiceArea;
