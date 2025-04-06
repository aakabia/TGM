import React from "react";
import { lawnBio } from "@/app/data";

const GalleryIntro = () => {
  return (
    <div className="w-full h-auto p-5">
      <div className="flex justify-center p-5">
        <p className="text-center font-thin  md:w-[80%] lg:w-[60%]">
          {lawnBio.galleryBio}
        </p>
      </div>
    </div>
  );
};

export default GalleryIntro;

// GalleryIntro returns a intro paragraph for the page.
