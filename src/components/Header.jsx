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
      <div className=" flex flex-col-reverse md:flex-row justify-center items-center gap-4 text-center pt-10 md:pt-20">
        <div className=" md:pl-10" data-aos="fade-right" data-aos-duration="3000">
          <img
            className=" w-[70%] md:w-[100%] inline-flex justify-center items-center border-4 border-yellow-400 rounded-[20px]"
            src={Bman}
            alt="bman"
          />
        </div>
        <div data-aos="fade-left" data-aos-duration="3000">
          <div className=" flex flex-col text-4xl sm:text-6xl md:text-6xl lg:text-7xl">
            <span className=" text-white  font-extrabold">
              SWAGAT
            </span>
            <span className="  text-yellow-400 font-extrabold">
              SHRESTHA
            </span>
          </div>
          <br />

          <h3 className=" text-white text-sm w-auto h-auto sm:text-lg md:text-xl lg:text-2xl sm:pt-5 px-10">
            Hello, I'm Swagat Shrestha and thank you for visiting my portfolio!
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
