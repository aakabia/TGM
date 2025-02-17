import React from "react";
import Image from "next/image";
import clsx from "clsx";

const CollageComponent = ({pic, alt, className}) => {
  return (
    <div className="relative w-[160px] md:w-[200px] lg:w-[250px]  h-[150px]">
      <Image
        src={pic}
        alt={alt}
        fill 
        quality={100} 
        style={{
          filter: "brightness(100%)",
          objectFit: "cover",
        }} 
        className={clsx("-z-10 rounded-lg shadow-glass-sm", className)} // Merging class names properly with clsx
      />
    </div>
  );
};

export default CollageComponent;

// Above is a collage component that takes a picture, alt and any additional class names