import React from "react";
import collagePicOne from "../../../public/images/collageOne.jpg";
import collagePicTwo from "../../../public/images/collageTwo.jpeg";
import collagePicThree from "../../../public/images/collageThree.jpg";
import collagePicFour from "../../../public/images/collageFour.jpeg";
import CollageComponent from "./CollageComponent";

const Collage = () => {
  return (
    <div className="w-full h-auto flex justify-center ">
      <div className="grid grid-cols-2 gap-3 md:gap-4 lg:gap-5 my-7">
        <CollageComponent pic={collagePicOne} alt={"Mand holding grass"} className={"rounded-tl-none"}/>
        <CollageComponent pic={collagePicThree} alt={"Man Cutting Shrubs"} className={"rounded-tr-none"}/>
        <CollageComponent pic={collagePicTwo} alt={"Lawn Mower"} className={"rounded-bl-none"}/>
        <CollageComponent pic={collagePicFour} alt={"Picture of a yard"} className={"rounded-br-none"}/>
      </div>
    </div>
  );
};

export default Collage;

// Above, we use our CollageComponent to render four images within a flex box