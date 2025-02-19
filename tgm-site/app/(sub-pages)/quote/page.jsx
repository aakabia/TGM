
import QuoteForm from "@/app/components/quotePage/QuoteForm";
import React from "react";
import { lawnBio } from "@/app/data";

const Quote = () => {
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
        <h3 className="font-bold text-lg  capitalize">Phone: (770)-856-3450 </h3>
        <h3 className="font-bold text-lg  capitalize">Or</h3>
        

        <QuoteForm />
      </div>
    </div>
  );
};

export default Quote;

// Above, we render the display for our quote page
