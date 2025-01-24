import React from "react";

const Banner = () => {
  return (
    <div className=" w-full h-auto bg-emerald  ">
      <div className=" flex flex-row justify-center  p-2 text-white font-bold">
        <h3 className="mx-5 text-black">
          Please support our mission towards Suicide Awareness!
        </h3>
        <h3>
          <a className="underline hover:text-black" href="">
            Learn More
          </a>
        </h3>
      </div>
    </div>
  );
};

export default Banner;

// may change position to fixed?
// component returns a banner used to inform users on certain topics.
