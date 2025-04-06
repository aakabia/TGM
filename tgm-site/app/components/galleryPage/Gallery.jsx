"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import SwiperButtons from "./SwiperButtons";
import GalleryImage from "./GalleryImage";
import { galleryPhotos } from "@/app/data";
import useScreenSize from "../hooks/UseScreenSize";




const Gallery = () => {
  const screenSize = useScreenSize();

  return (
    <div className="w-[100%] h-screen flex justify-center">
      <div className="w-[95%] sm:w-[85%] md:w-[75%] lg:w-[65%] h-[90%] self-center bg-gradient-to-br from-gray-200 to-gray-500 rounded-lg ">
        <div className=" w-full h-auto flex flex-col mt-16">
          <h2 className="self-center text-emerald font-bold text-3xl  shadow-glass-sm">
            TGM GALLERY
          </h2>
        </div>
        <div className=" w-full h-[75%] flex justify-center mt-10  ">
          <div className=" w-full h-full p-3">
            <Swiper
              centeredSlides={true}
              loop={true}
              grabCursor={true}
              lazyPreloadPrevNext={3}
              speed={400}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                slideShadows: false,
                scale: 1,
                depth: 100,
                modifier: 1,
              }}
              autoplay={{
                delay: 5000, // time in ms between slides
                disableOnInteraction: true, // keeps autoplay after user swipes
              }}
              modules={[Navigation, EffectCoverflow, Autoplay]}
              effect="coverflow"
              className="relative h-[90%] mt-10"
              spaceBetween={20}
              slidesPerView={"auto"}
              breakpoints={{ // allows for screen breakpoints
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
              }}
              onSlideChange={() => {}}
              onSwiper={() => {
                console.log("Swiper is ready."); // Log the swiper instance
              }}
            >
              {galleryPhotos.map((photo, index) => {
                return (
                  <SwiperSlide key={index}>
                    {({ isActive }) => (
                      <>
                        <GalleryImage
                          alt={photo.alt}
                          pic={photo.picLink}
                          isActive={isActive}
                          screenSize={screenSize}
                        />
                      </>
                    )}
                  </SwiperSlide>
                );
              })}

              <SwiperButtons />
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

// Gallery creates our swiper gallery for us.
// we create a gallery with swiper and its props 
// we map over gallery photos and create a swiperSlide for each of our gallery photos 
// within that swiperSlide we destructure isActive and return a react fragment containing a <GalleryImage/> component.
// alt and pic are provided from each object within gallery photos
// isActive is provided from swiperSlider 
// useScreenSize is a custom hook provided by us.
//  <SwiperButtons /> is a custom component for our navigation within the swiper. 

