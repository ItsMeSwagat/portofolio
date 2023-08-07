/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import ADP from "../assets/Ecommerce.png";
import Bookstore from "../assets/bookstore.png";
import GPT from "../assets/gpt3.png";
import EAPP from "../assets/eapp.png";
import { FaGithub } from "react-icons/fa";

const Project = () => {
  return (
    <div id="Projects" className=" relative w-full h-full bg-black">
      <div className="flex justify-center pt-16">
        <h1 className=" text-center text-4xl sm:text-6xl md:text-7xl font-bold text-white">
          Proj
        </h1>
        <h1 className=" text-center text-4xl sm:text-6xl md:text-7xl font-bold text-yellow-400">
          ects
        </h1>
      </div>
      <span className="flex text-center justify-center font-medium text-sm sm:text-lg md:text-2xl pt-4 text-white">
        Various Frontend Projects
      </span>

      <div className="grid grid-cols-1 place-items-center sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-2 md:gap-4 mt-24 mx-4 sm:mx-10 md:mx-36 pb-16 gap-4">
        <div className=" mx-4 p-4 border-solid border-4 border-yellow-400 bg-yellow-400 rounded-lg">
          <img className=" object-cover" src={ADP} alt="ADP" />
          <h1 className=" text-center text-lg sm:text-xl md:text-2xl font-bold pt-2">
            Java Project
          </h1>
          <p className=" text-justify pt-4 font-medium text-sm">
            Designed a fully dynamic clothing website through Java web
            development along with both admin and user interfaces. This project
            follows the MVC pattern. It contains the login system, admin panel
            and home page through which the user can register and login into the
            system and can search for the products throught the search mechanism
            and can add the product to the cart and order. It also contains the
            admin panel through which the user can add the product information
            and edit or delete the products. It also allows the admin to view
            the order list of each client and can also view the total number of
            users, products, and orders.{" "}
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
        <div className=" mx-4 p-4 border-solid border-4 border-yellow-400 bg-yellow-400 rounded-lg">
          <img className=" object-cover" src={Bookstore} alt="ADP" />
          <h1 className=" text-center text-lg sm:text-xl md:text-2xl font-bold pt-2">
            BookStore Project
          </h1>
          <p className=" text-justify pt-4 font-medium text-sm">
            A static bookshop website developed using HTML, CSS and Javascript
            is a platform that displays a variety of books and enables users to
            explore and buy them. The website predominantly comprises fixed
            information and does not include interactive or dynamically changing
            elements. The Online BookStore Static Frontend Website Design
            project aimed to create an engaging and user-friendly website for an
            online bookstore. The purpose of the website was to provide a
            platform for users to explore and purchase books online. This was my
            first college project and I was very happy of this outcome.
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
        <div className=" mx-4 p-4 border-solid border-4 border-yellow-400 bg-yellow-400 rounded-lg">
          <img className=" object-cover" src={GPT} alt="ADP" />
          <h1 className=" text-center text-lg sm:text-xl md:text-2xl font-bold pt-2">
            GPT-3 Project
          </h1>
          <p className=" text-justify pt-4 font-medium text-sm">
            The GPT-3-Powered React Frontend Project was an innovative
            undertaking that harnessed the capabilities of OpenAI's GPT-3
            language model to create an interactive and dynamic user interface
            using the React JavaScript library. This project aimed to showcase
            the integration of advanced AI technologies within a user-friendly
            web application, demonstrating my proficiency in React development
            and API integration. I structured the frontend application using
            React's component-based architecture. This allowed for modular and
            maintainable code, facilitating the development of various UI
            elements and functionalities.
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
        <div className=" mx-4 p-4 border-solid border-4 border-yellow-400 bg-yellow-400 rounded-lg">
          <img className=" object-cover" src={EAPP} alt="ADP" />
          <h1 className=" text-center text-lg sm:text-xl md:text-2xl font-bold pt-2">
            Ecommerce Project
          </h1>
          <p className=" text-justify pt-4 font-medium text-sm">
            The E-commerce Website Development with React project was a dynamic
            endeavor focused on creating a modern, user-friendly, and responsive
            online shopping platform using the React JavaScript library. This
            project aimed to provide users with a seamless and engaging shopping
            experience while showcasing my expertise in React development, UI/UX
            design, and frontend technologies. I utilized React's
            component-based architecture to design and implement various UI
            elements and features. Through efficient state management, I ensured
            dynamic updates to the user interface without page reloads,
            resulting in smooth interactions.
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
