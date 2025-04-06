"use client";
import React from "react";
import Image from "next/image";

const GalleryImage = ({ alt, pic, isActive, screenSize }) => {



  const sizeLimit = 700;

  return (
    <div
      className={` swiper-lazy w-full h-[85%] relative overflow-hidden rounded-md ${
        isActive ? "shadow-glass-sm" : " "
      }`}
    >
      <Image
        src={pic}
        alt={alt}
        loading={"lazy"}
        fill
        quality={100} // Optional: ensures high-quality rendering
        style={{
          filter: "brightness(100%)",
        }}
        sizes={`(max-width: ${sizeLimit}px) 100vw, 50vw`}
        className={`-z-10 ${
          screenSize >= sizeLimit && screenSize < 1200
            ? "object-none"
            : "object-cover"
        } `} // Places the image behind other content
      />

      <div className="swiper-lazy-preloader"></div>
    </div>
  );
};

export default GalleryImage;


// galleryImage is a component that returns a image for our gallery.
// it takes four props alt, pic, isActive, screenSize
// is active and screenSize are used for styling
// swiper-lazy-preloader is to provid a spinner in place of the picture while next slide loading 