import React from "react";
import Image from "next/image";
import servicePic from "../../../public/images/lawnCut.jpg";
import {lawnBio} from "@/app/data";

const CompanyIntro = () => {
  return (
    <div className="w-full h-auto py-20 flex justify-between p-36 ">
      <div className="relative flex w-[300px] h-[600px] overflow-hidden">
        <Image
          src={servicePic}
          alt="man cutting grass"
          fill // parent container must have relative absolute or fixed position
          objectFit="cover" // handy on making images seem closer
          quality={100} // Optional: ensures high-quality rendering
          style={{ filter: "brightness(100%)" }} // Darkens the image
          className="-z-10" // Places the image behind other content
        />
      </div>
      {/* Above is the side image on left */}

      <div className="relative flex flex-col justify-between w-[600px] h-[550px] overflow-hidden">
        <div className="flex flex-col overflow-hidden w-full">
          <h2 className="font-bold text-xl ">
            Cutting-Edge <span className="text-emerald">Expertise</span> &
            Customer <span className="text-emerald">Satisfaction</span>
          </h2>
          <br />
          <p className="font-thin">{lawnBio.serviceStatment}</p>
          <br />
          <p className="font-thin">{lawnBio.experienceStatment}</p>
          {/* Above is where I use the imported react fragments */}
        </div>
        <div className="w-full flex flex-row justify-between items-center">
          <h3 className="flex flex-col items-center justify-end">
            <span className="text-4xl">
              15<span className="text-[20px] px-2 font-bold">+</span>
            </span>{" "}
            <br /> <span className="text-lg">years of experience</span>
          </h3>
          {/* can possibly make a component for these h3 becuase they all use the same styles and elements. */}
          <h3 className="flex flex-col items-center justify-end">
            <span className="text-4xl">
              500<span className="text-[20px] px-2 font-bold">+</span>
            </span>{" "}
            <br /> <span className="text-lg">satisfied customers</span>
          </h3>
          <h3 className="flex flex-col items-center justify-end">
            <span className="text-4xl">
              100<span className="text-[20px] px-2 font-bold">%</span>
            </span>{" "}
            <br /> <span className="text-lg">satisfaction guaranteed</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

// Above is the end of our side (left) image and company statement on home page
export default CompanyIntro;
