import React from "react";
import wip from '../assets/work-in-progress.png'

const UnderConstruction = () => {
  return (
    <div
      id="home"
      className=" relative w-full h-screen flex justify-center items-center bg-[#f5f5f5]"
    >
        <img src={wip} alt="" className="" />
    </div>
  );
};

export default UnderConstruction;
