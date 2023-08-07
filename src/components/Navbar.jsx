import React from "react";
import { BiMenu } from "react-icons/bi";


const Navbar = () => {
  return (
    <div className=" flex justify-center items-center h-20 bg-black">
      <div className=" fixed hidden md:flex justify-between items-center bg-yellow-400 p-2 mt-4 rounded-xl z-10">
        <div className="logo mr-4 ml-2">
          <h1 className=" text-2xl font-bold">PORTOFOLIO</h1>
        </div>
        <div className="flex justify-between gap-4 text-lg font-semibold ">
          <a href="#home" className=" cursor-pointer hover:text-white">Home</a>
          <a href="#About" className=" cursor-pointer hover:text-white">About</a>
          <a href="#Projects" className=" cursor-pointer hover:text-white">Projects</a>
          <a href="#Contact" className=" cursor-pointer hover:text-white">Contact</a>
        </div>
        <button
          
          type="button"
          className=" text-white bg-black ml-4 rounded-xl text-lg px-3.5 py-3 hover:text-yellow-400"
        >
          <a href="https://drive.google.com/file/d/1cYF0_30mOscrCK1qx_HFgLWJrJg9O0iO/view?usp=drive_link">View CV</a>
        </button>
      </div>

      <div className="md:hidden inline-flex items-center z-10">
        <h1 className=" absolute left-3 text-2xl font-bold items-start text-yellow-400">
          PORTOFOLIO
        </h1>
        <div className="absolute right-3">
          <BiMenu size={30} color="#fff" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
