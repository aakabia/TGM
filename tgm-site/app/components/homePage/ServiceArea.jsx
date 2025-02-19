"use client";
import { useRouter } from 'next/navigation';
import React from "react";
import Image from "next/image";
import { serviceAreas } from "@/app/data";
import grassPic from "../../../public/images/grass.jpg";

const ServiceArea = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/quote`);
  };

  return (
    <div className=" py-20 w-full h-auto flex justify-between  md:p-5 lg:p-20 ">
      <div className="  w-[800px]  p-5 overflow-hidden  ">
        <h2 className=" font-bold  md:text-4xl">
          <span className="text-emerald">Servicing</span> Gwinnett <br /> County &
          More
        </h2>
        <p className=" indent-2 p-3 md:p-5 text-sm md:text-base font-thin">{serviceAreas.areaStatment}</p>
        <h3 className="py-3 md:p-5  font-thin text-lg md:text-2xl">Areas We <span className="text-emerald">Proudly </span>Service:</h3>
        <ul className="p-1 md:p-5 font-bold text-[15px]  md:text-xl overflow-hidden">
          {serviceAreas.areas.map((area, index) => {
            return (
              <li className="p-1" key={index}>
                {area}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="w-[300px] p-4 md:p-10 mx-14 relative flex flex-col justify-center items-center  bg-emeraldOp overflow-hidden shadow-glass-sm">
        <Image
          src={grassPic}
          alt="grass Image"
          fill
          objectFit="cover" // handy on making images seem closer
          quality={100} // Optional: ensures high-quality rendering
          style={{ filter: "brightness(100%)" }} // Darkens the image
          className=" -z-10 " // Places the image behind other content
        />
        <h2 className="p-20 font-thin text-2xl md:text-4xl text-white text-center ">Areas We Service</h2>
        <div>
          <button
            onClick={handleClick}
            className="bg-emeraldOp text-white px-3 md:px-4 py-3 font-thin text-sm rounded border  border-white hover:text-emerald hover:bg-white"
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
