import React from "react";

import MTmockup from "../assets/updated MTapp.png";

const UIUX = () => {
  return (
    <div id="UIUX" className=" relative w-full h-full bg-black">
      <div
        className="flex justify-center pt-16"
        data-aos="zoom-in-up"
        data-aos-duration="1500"
      >
        <h1 className=" text-center text-4xl sm:text-6xl md:text-7xl font-bold text-white">
          UI/UX &nbsp;
        </h1>
        <h1 className=" text-center text-4xl sm:text-6xl md:text-7xl font-bold text-yellow-400">
          Designs
        </h1>
      </div>
      <span
        className="flex text-center justify-center font-medium text-sm sm:text-lg md:text-2xl pt-4 text-white"
        data-aos="zoom-in-up"
        data-aos-duration="1500"
      >
        Various UI/UX Design Projects are Shown Below
      </span>

      <div className=" flex flex-col justify-center items-center py-20">
        <h1
          className=" text-white text-xl font-medium sm:text-2xl md:text-3xl"
          data-aos="zoom-in-up"
          data-aos-duration="1500"
        >
          <span className=" text-yellow-400">1. </span>Movie Ticketing App
          Design
        </h1>
        <img
          src={MTmockup}
          alt="ticketingApp"
          className=" w-full md:w-[80%] lg:w-[80%]"
          width="59%"
          data-aos="zoom-in-up"
          data-aos-duration="2000"
        />
      </div>
    </div>
  );
};

export default UIUX;
