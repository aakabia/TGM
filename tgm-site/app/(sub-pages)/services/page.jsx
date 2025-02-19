import React from "react";
import { lawnBio, serviceDiscriptions } from "@/app/data";
import Collage from "@/app/components/servicesPage/Collage";
import ServiceCard from "@/app/components/servicesPage/ServiceCard";

const Services = () => {
  return (
    <div className="w-full h-screen">
      <div className="w-full h-auto mt-5">
        <div className="w-full h-auto p-5 flex flex-col items-center space-y-5">
          <h2 className="font-bold text-xl text-emerald capitalize">
            Our services
          </h2>
          <p className="text-center font-thin md:w-[80%] lg:w-[60%]">
            {lawnBio.serviceBio}
          </p>
          <Collage />
          {/* Above we render the collage */}
        </div>
      </div>
      <div className="w-full h-auto mt-5">
        <div className="w-full h-auto p-5 flex flex-col items-center space-y-5">
          <h2 className="font-bold text-xl text-emerald capitalize">
            services
          </h2>
          <div className="w-full  h-auto flex flex-wrap justify-center md:justify-between ">
            {serviceDiscriptions.map((service, index) => {
              return (
                <ServiceCard
                  key={index}
                  pic={service.pic}
                  alt={service.alt}
                  title={service.title}
                  serviceBio={service.serviceBio}
                  plansDiscription={service.plansDiscription}
                  plans={service.plans}
                />
              );
            })}
          </div>
          {/* maps over serviceDiscriptions and creates ServiceCard for each.*/}
        </div>
      </div>
    </div>
  );
};

export default Services;

// Renders the Services page, including the title, a picture collage,  
// and service cards for each service in serviceDescriptions.