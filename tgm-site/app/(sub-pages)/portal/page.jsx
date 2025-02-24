"use client";
import React from "react";
import Faq from "@/app/components/portalPage/Faq";
import { FaqQuestions } from "@/app/data";

const Portal = () => {
  const handleRedirect = () => {
    const url = "https://secure.copilotcrm.com/client/login/portal/3270"; // Replace with your desired URL
    window.open(url, "_blank"); // '_blank' opens the URL in a new tab
  };

  // handleRedirect uses the window object to redirect our page and open a new tab.

  return (
    <div className="w-full h-screen">
      <div className="w-full h-auto mt-16 flex justify-center">
        <h2 className=" font-bold text-xl text-emerald capitalize">
          frequently asked questions
        </h2>
      </div>

      <div className="w-full h-auto mt-16 flex flex-row flex-wrap space-y-5 justify-center p-2 ">
        {FaqQuestions.map((question, index) => {
          return <Faq key={index} {...question} />;
        })}
      </div>
      {/* Above, maps over our questions and returns a FAQ component for each */}

      <div className="w-full h-auto flex justify-center mt-5">
        <button
          onClick={handleRedirect}
          className="bg-emerald text-white rounded border  border-white hover:text-emerald hover:bg-white p-1 my-4  text-lg "
        >
          Client Portal
        </button>
      </div>
      {/* Above is the button link to the client portal */}
    </div>
  );
};

export default Portal;

// Above is our Portal page that has FAQs listed.
