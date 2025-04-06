import React from "react";
import { useSwiper } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

// useSwiper  allows us to keep the context of our swiper as longer as this component (SwiperButtons) is used within a swiper component.


const SwiperButtons = () => {
  const swiper = useSwiper();
  return (
    <div className=" w-full justify-center flex absolute bottom-1  left-1/2 transform -translate-x-1/2 z-10 text-emerald text-3xl">
      <div className=" cursor-pointer">
        <FontAwesomeIcon
          onClick={() => swiper.slidePrev()}
          icon={faArrowLeft}
          className="hover:shadow-glass-sm"
        />
        <FontAwesomeIcon
          onClick={() => swiper.slideNext()}
          className="ml-5 hover:shadow-glass-sm"
          icon={faArrowRight}
        />
      </div>
    </div>
  );
};

export default SwiperButtons;

// SwiperButtons returns two buttons as FontAwesomeIcons
// in one icon we call swiper.slidePrev() to get to the prev slide 
// in another we call swiper.slideNext() to get to the next slide.