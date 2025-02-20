import React from "react";

const CareerBanner = () => {
  return (
    <div className="w-full h-auto ">
      <div className="relative w-full h-auto max-h-[600px]  overflow-hidden ">
        <video
          className="w-full h-auto object-cover "
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/bannerVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-emeraldExtraOp pointer-events-none">
          <div className="w-full h-full flex flex-col items-center justify-center sm:items-start sm:pl-[75px] lg:pl-[100px] text-white font-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl capitalize">
            <h2>Join our Team </h2>
            <h2>Today !</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerBanner;
