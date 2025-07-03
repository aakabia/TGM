"use client";
import HomeBanner from "./components/homePage/HomeBanner";
import CompanyIntro from "./components/homePage/CompanyIntro";
import ServiceArea from "./components/homePage/ServiceArea";
import Marquee from "./components/homePage/Marquee";

export default function Home() {

  console.log("Hello")
  return (
    <main className=" relative flex flex-col h-screen  w-screen">
      <HomeBanner />

      <CompanyIntro />

      <ServiceArea />

      <Marquee />
    </main>
  );
}

// Home page composed of different components from homepage folder
