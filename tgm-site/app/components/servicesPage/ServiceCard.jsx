"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import "boxicons/css/boxicons.min.css";
import Image from "next/image";

const ServiceCard = ({
  pic,
  alt,
  title,
  serviceBio,
  plansDiscription,
  plans,
}) => {
  const [showFirstElement, setShowFirstElement] = useState(false);
  const router = useRouter();
  // Above calls the next router

  const handleClick = (event) => {
    event.stopPropagation();
    router.push(`/quote?service=${encodeURIComponent(title)}`);
  };
   // Our handle click push the router to our quote page with params in the url

  return (
    <div
      onClick={() => setShowFirstElement(!showFirstElement)}
      className=" w-full sm:w-[75%] md:w-[40%] lg:w-[30%] h-auto mt-5"
    >
      <div className="w-full h-auto p-3 bg-darkGreen border border-gray-300 rounded-lg shadow-md hover:shadow-glass-sm space-y-5">
        <div className="w-full h-[150px] relative">
          <Image
            src={pic}
            alt={alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 250px"
            quality={100}
            style={{
              filter: "brightness(100%)",
              objectFit: "cover",
            }} 
            className="rounded-lg"
          />
        </div>
        <div className="space-y-2">
          <div className="mt-5 text-2xl text-white font-bold">
            {" "}
            <h3>{title}</h3>
          </div>
          <div className="w-full h-auto  text-white text-md">
            <p
              className={` overflow-hidden ${
                showFirstElement ? " " : "line-clamp-4"
              }`}
            >
              {serviceBio}
            </p>
          </div>
        </div>

        {showFirstElement && (
          <div className="w-full h-auto">
            <div className="text-xl text-white font-bold">
              {" "}
              <h3>Plans:</h3>
            </div>
            <div className="mt-2 w-full h-auto text-white text-md">
              <p>{plansDiscription}</p>
            </div>
            <div className="mt-4 w-full h-auto text-white text-md space-y-4">
              {plans.map((plan, index) => {
                return <p key={index}>{plan}</p>;
              })}
            </div>
          </div>
        )}

        <div className=" p-2 relative w-full h-auto">
          <div className="flex justify-start w-[50%]">
            <button
              onClick={handleClick}
              className="bg-emeraldOp text-white rounded border  border-white hover:text-emerald hover:bg-white p-1 text-[15px] md:text-sm "
            >
              GET QUOTE
            </button>
          </div>

          <div
            className={`absolute bottom-1 right-1 text-white cursor-pointer ${
              !showFirstElement ? "opacity-100" : "opacity-0"
            } `}
          >
            <i className="bx bx-chevron-up text-3xl"></i>
          </div>
          {/* conditional rendering up or down arrow */}
          <div
            className={`absolute bottom-1 right-1 text-white cursor-pointer ${
              showFirstElement ? "opacity-100" : "opacity-0"
            }`}
          >
            <i className="bx bx-chevron-down text-3xl"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

/* This is a responsive card component that accepts pic, title, serviceBio, plansDescription, and plans as props. 
  The card is clickable and expands when selected. 
  This functionality is achieved through conditional rendering of a div based on the value of showFirstElement.
 */

  // useRouter helps us navigate and pass params to other pages.