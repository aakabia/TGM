"use client";
import React, { useState } from "react";
import "boxicons/css/boxicons.min.css";

const Faq = ({ question, paragraph }) => {
  const [showFirstElement, setFirstElement] = useState(false);

  //  showFirstElement for conditional rendering.

  return (
    <div
      className="w-full md:w-[60%] h-auto bg bg-emerald cursor-pointer"
      onClick={() => {
        setFirstElement(!showFirstElement);
      }}
    >
      <div
        className={`w-full h-[50px] p-2 relative flex items-center font-bold text-lg text-emerald bg-gray-200 ${
          showFirstElement ? "border-b-2 border-white" : ""
        }`}
      >
        <h3>{question}</h3>

        <i
          className={`bx bx-chevron-up text-3xl absolute right-2 ${
            showFirstElement ? "opacity-0" : "opacity-100"
          } `}
        ></i>
        <i
          className={`bx bx-chevron-down text-3xl absolute right-2 ${
            showFirstElement ? "opacity-100" : "opacity-0"
          } opacity-0`}
        ></i>
      </div>
      {showFirstElement && (
        <div className=" p-2 mt-2  flex items-center bg-emerald text-white text-lg">
          <p>{paragraph}</p>
        </div>
      )}
      {/* conditionally renders body for FAQ card */}
    </div>
  );
};

export default Faq;

// Above we create a FAQ component that conditionally renders a body if it is clicked.
