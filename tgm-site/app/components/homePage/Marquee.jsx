import React from "react";
import { marqueeWords } from "@/app/data";

const Marquee = () => {
  return (
    <div className=" relative bg-gray-100 w-full h-auto whitespace-nowrap py-32 flex flex-col justify-center items-center">
      <div className="w-full h-auto overflow-hidden fadeout-horizontal">
        <div className=" w-max pl-5 h-[150px] flex flex-row justify-between items-center  text-9xl animate-marquee hover:paused whitespace-nowrap ">
          {marqueeWords.top.map((word, index) => {
            return (
              <h3 key={index} className="relative mx-4 p-4">
                {word}
                <span className="absolute mx-5  bottom-12">.</span>
              </h3>
            );
          })}
          {marqueeWords.top.map((word, index) => {
            return (
              <h3
                aria-hidden="true"
                key={`duplicate-${index}`}
                className="relative mx-4 p-4"
              >
                {word}
                <span className="absolute mx-5  bottom-12">.</span>
              </h3>
            );
          })}
        </div>
      </div>

      <div className="w-full h-auto m-10 overflow-hidden fadeout-horizontal">
        <div className=" w-max pl-5 h-[150px] flex flex-row justify-between items-center animate-reverseMarquee hover:paused text-9xl  whitespace-nowrap ">
          {marqueeWords.bottom.map((word, index) => {
            return (
              <h3 key={index} className="relative mx-4 p-4">
                {word}
                <span className="absolute mx-5  bottom-12">.</span>
              </h3>
            );
          })}
          {marqueeWords.bottom.map((word, index) => {
            return (
              <h3
                aria-hidden="true"
                key={`duplicate-${index}`}
                className="relative mx-4 p-4"
              >
                {word}
                <span className="absolute mx-5  bottom-12">.</span>
              </h3>
            );
          })}
        </div>
      </div>
    </div>
  );
};

{
  /* end of marquee area on home page. */
}
export default Marquee;
