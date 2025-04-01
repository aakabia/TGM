import React from "react";
import Image from "next/image";

const PictureBio = ({ pic, bio, name }) => {
  return (
    <div
      className={`w-full h-auto p-10 flex flex-col  justify-between items-center ${
        name === "Brandon" ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >

      <div className="relative  w-[300px] md:w-[400px] lg:w-[500px] h-[200px] md:h-[300px]  shadow-glass-sm">
        <Image
          src={pic}
          alt="Photo of Brandon"
          fill // parent container must have relative absolute or fixed position
          quality={100} // Optional: ensures high-quality rendering
          sizes="(max-width: 768px) 300px, (max-width: 1024px) 400px, 500px"
          style={{
            filter: "brightness(100%)",
          }}
          className="-z-10" // Places the image behind other content
        />
      </div>

      <div className="m-14 w-full md:w-[50%] lg:w-[40%] text-center">
        <p>{bio}</p>
      </div>
    </div>
  );
};

export default PictureBio;

// PictureBio component renders a picture and bio next to it.
// it conditionally renders some css (object-fit in image and flex direction in parent div), dependeing on the value of name.
