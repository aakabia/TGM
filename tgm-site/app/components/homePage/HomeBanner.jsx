"uae client";
import React from "react";
import Image from "next/image";
import bg from "../../../public/images/homeLawn.jpg";

const HomeBanner = () => {
  const handleClick = () => {
    console.log("button clicked");
  };
  
  // button only console.logs currently

  return (
    <div className=" relative w-full h-[550px]">
      <Image
        src={bg}
        alt="lawn care Image"
        fill
        objectFit="cover" // handy on making images seem closer
        quality={100} // Optional: ensures high-quality rendering
        style={{ filter: "brightness(100%)" }} // Darkens the image
        className="-z-10 " // Places the image behind other content
      />

      <div className="flex flex-col justify-center items-center  bg-emeraldOp w-[50%] h-[550px] ">
        <div>
          <p className=" w-full text-white font-bold md:text-[30px]">
            CONSIDER YOUR <br />
            LAWN CARE,
            <br /> CUTTING, MOWING,
            <br /> AND LANDSCAPING
            <br /> NEEDS SOLVED!
          </p>
        </div>

        <div className="flex justify-start w-[50%] my-2 md:w-[37%] ">
          <button
            onClick={handleClick}
            className="bg-emeraldOp text-white rounded border  border-white hover:text-emerald hover:bg-white p-1 my-4  text-[15px]  md:px-4  md:text-sm "
          >
            GET QUOTE
          </button>
        </div>
      </div>
    </div>
  );
};

{
  /* Above is the end of our top background image */
}
export default HomeBanner;
