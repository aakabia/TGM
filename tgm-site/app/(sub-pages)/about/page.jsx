import React from "react";
import brandoPic from "../../../public/images/brandoNewPic.jpg";
import bryanPic from "../../../public/images/BryanPhoto.jpg";
import { lawnBio } from "@/app/data";
import PictureBio from "@/app/components/aboutPage/PictureBio";



const About = () => {
  return (
    <div className=" w-full  h-auto py-[30px] flex flex-col justify-between items-center ">
      <div className="p-5 text-center md:w-[80%] lg:w-[60%]">
        <p>{lawnBio.foundingStatment}</p>
      </div>

      <div className="p-5 mt-5 ">
        <h2 className="text-xl">
          Meet our <span className="text-emerald">Founder</span> and{" "}
          <span className="text-emerald">CEO</span>!
        </h2>
      </div>

      <PictureBio pic={brandoPic} bio={lawnBio.brandonBio} name="Brandon" />
      <PictureBio pic={bryanPic} bio={lawnBio.bryanBio} name="Bryan" />
      {/* Above, we use our PictureBio component and pass in our props */}
    </div>
  );
};

export default About;
