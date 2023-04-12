import React from 'react'
import { NavLink } from "react-router-dom";
import image from "../image/logo.png"

export default function Navbar() {
  return (
    <nav className="w-full min-h-[15vh] bg-[#3d3d3db3] fixed z-[999]">
      <div className="nav-top w-full min-h-[6vh] flex bg-[#494949] py-[2px]">
        <div className="w-[50%] pl-4">
          <h2 className="text-white text-3xl">Свяжитесь с нами</h2>
        </div>
        <div className="w-[50%] flex justify-evenly items-center gap-4">
          <a href="Tel:+99890 580 58 78" className=" text-white">
            +99890 580 58 78
          </a>
          <a href="Tel:+99890 301 70 60" className=" text-white">
            +99890 301 70 60
          </a>
          <a href="Tel:+99899 995 20 00" className=" text-white">
            +99899 995 20 00
          </a>
        </div>
      </div>
      <div className="nav-bottom w-full min-h-[9vh] flex items-center justify-between">
        <div className="logo w-[20%] flex justify-end items-center min-h-[9vh]">
          <img src={image} alt="" className="w-[35px] h-[35px] rounded-md" />
        </div>
        <div className="menu w-[70%] flex justify-evenly gap-4">
          <NavLink
            to={"/home"}
            className="text-[#fff] relative content-none before:absolute before:w-0 before:h-[1.5px] before:bg-[#fd7e14] before:left-0 before:top-full hover:text-[#fd7e14] hover:before:w-[100%] duration-500 before:duration-500"
          >
            Главная
          </NavLink>
          <NavLink
            to={"/about"}
            className="text-[#fff] relative content-none before:absolute before:w-0 before:h-[1.5px] before:bg-[#fd7e14] before:left-0 before:top-full hover:text-[#fd7e14] hover:before:w-[100%] duration-500 before:duration-500"
          >
            О нас
          </NavLink>
          <NavLink
            to={"/product"}
            className="text-[#fff] relative content-none before:absolute before:w-0 before:h-[1.5px] before:bg-[#fd7e14] before:left-0 before:top-full hover:text-[#fd7e14] hover:before:w-[100%] duration-500 before:duration-500"
          >
            Наши продукты
          </NavLink>
          <NavLink
            to={"/partnor"}
            className="text-[#fff] relative content-none before:absolute before:w-0 before:h-[1.5px] before:bg-[#fd7e14] before:left-0 before:top-full hover:text-[#fd7e14] hover:before:w-[100%] duration-500 before:duration-500"
          >
            Партнеры
          </NavLink>
          <NavLink
            to={"/contact"}
            className="text-[#fff] relative content-none before:absolute before:w-0 before:h-[1.5px] before:bg-[#fd7e14] before:left-0 before:top-full hover:text-[#fd7e14] hover:before:w-[100%] duration-500 before:duration-500"
          >
            Свяжитесь с нами
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
