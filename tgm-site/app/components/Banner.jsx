import React from "react";

const Banner = () => {
  return (
    <div className=" w-full h-auto bg-emerald">
      <div className="flex flex-col sm:flex-row items-center justify-center p-2 text-white font-bold">
        <h3 className=" text-[13px] sm:text-md   mx-5 text-white">
        Don't Miss Out on Our Latest Promotions!
        </h3>
        <h3>
          <a className="underline text-yellow-300 hover:text-white" href="">
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
