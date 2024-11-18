/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import CV from "../assets/SWCV.pdf";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" flex justify-center items-center h-20">
      <div
        className=" fixed hidden md:flex justify-between items-center bg-yellow-400 p-2 mt-4 rounded-xl z-10"
        data-aos="fade-down"
        data-aos-duration="3000"
      >
        <div className="logo mr-4 ml-2">
          <a href="#" className=" text-2xl font-bold">
            SWAGAT SHRESTHA
          </a>
        </div>
        <div className="flex justify-between gap-4 text-lg font-semibold ">
          <a href="#home" className=" cursor-pointer hover:text-white">
            Home
          </a>
          <a href="#About" className=" cursor-pointer hover:text-white">
            About
          </a>
          <a href="#Projects" className=" cursor-pointer hover:text-white">
            Projects
          </a>
          <a href="#Contact" className=" cursor-pointer hover:text-white">
            Contact
          </a>
        </div>
        <button
          type="button"
          className=" text-white bg-black ml-4 rounded-xl text-lg px-3.5 py-3 hover:text-yellow-400"
        >
          <a href={CV} download="Swagat Shrestha CV">
            Download CV
          </a>
        </button>
      </div>

      {/* Mobile Menu*/}

      <div
        onClick={handleNav}
        className=" md:hidden absolute right-2"
        data-aos="fade-down"
        data-aos-duration="2000"
      >
        {nav ? (
          <AiOutlineClose size={30} color="white" />
        ) : (
          <BiMenu size={30} color="white" />
        )}
      </div>

      <div className="md:hidden flex items-center z-10">
        <a
          href="#"
          className=" absolute left-3 text-2xl font-bold items-start text-yellow-400"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          SWAGAT SHRESTHA
        </a>
        <div
          className={
            nav
              ? "absolute right-2 top-14 w-[200px] rounded-lg bg-yellow-400"
              : " hidden"
          }
        >
          <div className=" flex flex-col gap-5 justify-center items-center p-4  text-lg font-semibold">
            <a href="#home" className=" cursor-pointer hover:text-white">
              Home
            </a>
            <a href="#About" className=" cursor-pointer hover:text-white">
              About
            </a>
            <a href="#Projects" className=" cursor-pointer hover:text-white">
              Projects
            </a>
            <a href="#Contact" className=" cursor-pointer hover:text-white">
              Contact
            </a>
            <button
              type="button"
              className=" text-white bg-black w-full rounded-xl text-lg px-3.5 py-3 hover:text-yellow-400"
            >
              <a href={CV} download="Swagat Shrestha CV">
                Download CV
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
