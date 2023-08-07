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
