import CareerBanner from "@/app/components/careerPage/CareerBanner";
import React from "react";
import { lawnBio } from "@/app/data";
import CareerForm from "@/app/components/careerPage/CareerForm";

const Careers = () => {
  return (
    <div className="w-full h-screen">
      <div className="w-full h-auto flex flex-col items-center space-y-5">
        <CareerBanner />
        <h2 className="font-bold text-xl text-emerald capitalize pt-5">
          Career Services
        </h2>
        <div className="w-full h-auto p-5 flex items-center justify-center ">
          <p className="text-center font-thin md:w-[80%] lg:w-[60%]">
            {lawnBio.careerBio}
          </p>
        </div>

        <CareerForm/>
      </div>
    </div>
  );
};

export default Careers;
