"use client";

import { useEffect, useState } from "react";

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState();

  useEffect(() => {
    function getScreenSize() {
      return window.innerWidth;
    }
    // get window innerwidth

    function handleResize() {
      setScreenSize(getScreenSize());
    }
    // set screen size from return of get screen size

    handleResize();

    // get first size

    window.addEventListener("resize", handleResize);

    // add event listener to window of resize

    return () => window.removeEventListener("resize", handleResize);

    // remove event listener to prevent data leaking and for clean up
  }, []);

  return screenSize;

  // return screen size
};

export default useScreenSize;

// Above, the useScreenSize custom hook gets the size of the window and returns to the user.
