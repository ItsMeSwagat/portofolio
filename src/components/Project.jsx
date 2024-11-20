/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import ADP from "../assets/Ecommerce.png";
import jass from "../assets/jass.png";
import EAPP from "../assets/eapp.png";
import MovieStreaming from "../assets/MovieStreaming.png";
import { FaGithub } from "react-icons/fa";

const Project = () => {
  return (
    <div id="Projects" className=" relative w-full h-full bg-black">
      <div
        className="flex justify-center pt-16"
        data-aos="zoom-in-up"
        data-aos-duration="1500"
      >
        <h1 className=" text-center text-4xl sm:text-6xl md:text-7xl font-bold text-white">
          Proj
        </h1>
        <h1 className=" text-center text-4xl sm:text-6xl md:text-7xl font-bold text-yellow-400">
          ects
        </h1>
      </div>
      <span
        className="flex text-center justify-center font-medium text-sm sm:text-lg md:text-2xl pt-4 text-white"
        data-aos="zoom-in-up"
        data-aos-duration="1500"
      >
        Various Frontend Projects
      </span>

      <div className="grid grid-cols-1 place-items-center sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-2 md:gap-4 mt-24 mx-4 sm:mx-10 md:mx-36 pb-16 gap-4">
        <div
          className=" w-[90%] h-[650px] mx-4 p-4 border-solid border-4 border-yellow-400 bg-yellow-400 rounded-lg"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <img
            className=" object-cover w-full h-[18rem] rounded-md"
            src={ADP}
            alt="ADP"
          />

          <h1 className=" text-center text-lg sm:text-xl md:text-2xl font-bold pt-2">
            Java Project
          </h1>
          <p className=" text-justify pt-4 font-medium text-sm">
            <span className=" font-bold">Programming Language:</span> JAVA, CSS,
            JavaScript <br />
          </p>
          <p className=" text-justify pt-2 font-medium text-sm">
            <span className=" font-bold">Tools Used:</span> ECLIPSE, XAMP, MySQL{" "}
            <br />
          </p>
          <p className=" text-justify pt-4 font-medium text-sm">
            <span className=" font-bold">Description:</span>: Designed a fully
            dynamic clothing website through Java web development along with
            both admin and user interfaces. This project follows the MVC
            pattern. It contains the login system, admin panel and home page
            through which the user can register and login into the system and
            can search for the products throught the search mechanism and can
            add the product to the cart and order.
            <br />
          </p>
          <button
            type="button"
            className=" inline-flex justify-center items-center text-white bg-black rounded-xl text-lg px-3.5 py-3 mt-4 hover:text-yellow-400"
          >
            <a
              href="https://github.com/ItsMeSwagat/CW-ADP.git"
              className=" inline-flex justify-center items-center"
            >
              <FaGithub size={20} className=" mr-2" />
              View Code
            </a>
          </button>
        </div>
        <div
          className=" w-[90%] h-[650px] mx-4 p-4 border-solid border-4 border-yellow-400 bg-yellow-400 rounded-lg"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img
            className=" object-cover w-full h-[18rem] rounded-md"
            src={jass}
            alt="ADP"
          />
          <h1 className=" text-center text-lg sm:text-xl md:text-2xl font-bold pt-2">
            Saree Store
          </h1>
          <p className=" text-justify pt-4 font-medium text-sm">
            <span className=" font-bold">Stack:</span> MERN Stack
            <br />
          </p>

          <p className=" text-justify pt-4 font-medium text-sm">
            <span className=" font-bold">Description:</span>A MERN stack Saree
            store is a web application built using MongoDB, Express.js,
            React.js, and Node.js. It provides a seamless user experience for
            browsing, filtering, and purchasing sarees. With a dynamic frontend,
            secure backend, and scalable database, it ensures efficient
            inventory management, user authentication, and payment integration
            for smooth operations
            <br />
          </p>
          <button
            type="button"
            className=" inline-flex justify-center items-center text-white bg-black rounded-xl text-lg px-3.5 py-3 mt-4 hover:text-yellow-400"
          >
            <a
              href="https://github.com/ItsMeSwagat/BookStore.git"
              className=" inline-flex justify-center items-center"
            >
              <FaGithub size={20} className=" mr-2" />
              View Code
            </a>
          </button>
        </div>
        <div
          className=" w-[90%] h-[650px] mx-4 p-4 border-solid border-4 border-yellow-400 bg-yellow-400 rounded-lg"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <img
            className=" object-cover w-full h-[18rem] rounded-md"
            src={MovieStreaming}
            alt="ADP"
          />
          <h1 className=" text-center text-lg sm:text-xl md:text-2xl font-bold pt-2">
            Movie Streaming Project
          </h1>
          <p className=" text-justify pt-4 font-medium text-sm">
            <span className=" font-bold">Programming Language:</span> HTML, CSS,
            JavaScript <br />
          </p>
          <p className=" text-justify pt-2 font-medium text-sm">
            <span className=" font-bold">Tools and Framework Used:</span>{" "}
            ReactJs, TailwindCSS, Firebase, VsCode
            <br />
          </p>
          <p className=" text-justify pt-4 font-medium text-sm">
            <span className=" font-bold">Description:</span>In this project I
            build a front-end Netflix clone with a Firebase back-end! It also
            use the TMDB API for all of the data AND we will be using Firebase
            Authentication to give login functionality. We will be able to store
            user specific data with a React front-end and a Firebase back-end.
            For styling the frontend I used the Tailwind CSS, an incredible CSS
            framework.
            <br />
          </p>
          <button
            type="button"
            className=" inline-flex justify-center items-center text-white bg-black rounded-xl text-lg px-3.5 py-3 mt-4 hover:text-yellow-400"
          >
            <a
              href="https://github.com/ItsMeSwagat/gpt3-Frontend.git"
              className=" inline-flex justify-center items-center"
            >
              <FaGithub size={20} className=" mr-2" />
              View Code
            </a>
          </button>
        </div>
        <div
          className=" w-[90%] h-[650px] mx-4 p-4 border-solid border-4 border-yellow-400 bg-yellow-400 rounded-lg"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <img
            className=" object-cover w-full h-[18rem] rounded-md"
            src={EAPP}
            alt="ADP"
          />
          <h1 className=" text-center text-lg sm:text-xl md:text-2xl font-bold pt-2">
            Ecommerce Project
          </h1>
          <p className=" text-justify pt-4 font-medium text-sm">
            <span className=" font-bold">Programming Language:</span> HTML, CSS,
            JavaScript <br />
          </p>
          <p className=" text-justify pt-2 font-medium text-sm">
            <span className=" font-bold">Tools and Framework Used:</span>{" "}
            ReactJs, TailwindCSS, Firebase, VsCode
            <br />
          </p>
          <p className=" text-justify pt-4 font-medium text-sm">
            <span className=" font-bold">Description:</span>The E-commerce
            Website Development with React project was a dynamic endeavor
            focused on creating a modern, user-friendly, and responsive online
            shopping platform using the React JavaScript library. This project
            aimed to provide users with a seamless and engaging shopping
            experience while showcasing my expertise in React development, and
            frontend technologies.
            <span className=" text-red-500">Under Development</span>
            <br />
          </p>

          <button
            type="button"
            className=" inline-flex justify-center items-center text-white bg-black rounded-xl text-lg px-3.5 py-3 mt-4 hover:text-yellow-400"
          >
            <a
              href="https://github.com/ItsMeSwagat/ecommerceApp.git"
              className=" inline-flex justify-center items-center"
            >
              <FaGithub size={20} className=" mr-2" />
              View Code
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
