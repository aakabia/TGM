import React from "react";
import { lawnBio } from "@/app/data";

const Quote = () => {
  const FormID = process.env.NEXT_PUBLIC_FORM_ID;

  return (
    <div className="w-full h-screen flex flex-col justify-center mt-16 ">
      <div className=" w-full h-screen flex flex-col items-center justify-between space-y-5 ">
        <h2 className="font-bold text-xl text-emerald capitalize">
          Get A quote
        </h2>
        <div className="w-full h-auto p-5 flex items-center justify-center ">
          <p className="text-center font-thin md:w-[80%] lg:w-[60%]">
            {lawnBio.quoteBio}
          </p>
        </div>

        <h2 className="font-bold text-lg text-emerald capitalize">Contact</h2>
        <h3 className="font-bold text-lg  capitalize">
          Phone: (770)-856-3450{" "}
        </h3>
        <h3 className="font-bold text-lg  capitalize">Or</h3>

        <div className="w-full h-screen">
          <div
            id={FormID}
            className="copilot-request-container copilot-preview-loader"
          ></div>

          {/* The dive above with id={FormID} is boiler code from copilotcrm.com to import our form. */}
        </div>
      </div>
    </div>
  );
};

export default Quote;

// Above, we render the display for our quote page
