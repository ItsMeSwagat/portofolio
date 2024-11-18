import React from "react";
import Bman from "../assets/me.jpg";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div
      id="home"
      className=" relative w-full h-screen justify-center items-center bg-black"
    >
      <Navbar />
      <div className=" flex justify-center items-center text-center pt-20">
        <div data-aos="fade-right" data-aos-duration="3000">
          <img
            className=" inline-flex justify-center items-center border-4 border-yellow-400 rounded-[20px]"
            src={Bman}
            alt="bman"
          />
        </div>
        <div data-aos="fade-left" data-aos-duration="3000">
          <div className=" flex flex-col">
            <span className=" text-white text-4xl sm:text-6xl md:text-7xl font-extrabold">
              SWAGAT
            </span>
            <span className="  text-yellow-400 text-4xl sm:text-6xl md:text-7xl font-extrabold">
              SHRESTHA
            </span>
          </div>
          <br />

          <h3 className=" text-white text-sm w-auto h-auto sm:text-lg md:text-2xl pt-12 px-10">
            Hello, I'm Swagat Shrestha and thank you for visiting my portfolio!
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
