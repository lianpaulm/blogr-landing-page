import React, { useState } from "react";
import Logo from "../assets/images/logo.svg";
import Hamburger from "../assets/images/icon-hamburger.svg";
import CloseIcon from "../assets/images/icon-close.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 max-w-[1112px] mt-0 mx-auto flex gap-x-12 items-center px-5 md:px-7 h-[110px] md:h-[160px] text-white ">
      <a
        href="#"
        className="w-[4.5rem] md:w-[auto] flex-shrink-0 mr-auto md:mr-0"
        aria-label="logo"
      >
        <img src={Logo} alt="" />
      </a>

      {isMenuOpen ? (
        <button className="flex-shrink-0 ">
          <img
            src={CloseIcon}
            alt=""
            className="md:hidden cursor-pointer p-2 h-[2.5rem]"
            onClick={() => setIsMenuOpen(false)}
          />
        </button>
      ) : (
        <button className="flex-shrink-0 " aria-label="mobile menu">
          <img
            src={Hamburger}
            alt=""
            className="md:hidden cursor-pointer p-2"
            onClick={() => setIsMenuOpen(true)}
          />
        </button>
      )}

      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } rounded-md absolute top-[100px] left-5 right-5 bg-white md:bg-[transparent] text-very-dark-grayish-blue md:static md:text-white  py-5 md:flex md:items-center md:w-full`}
      >
        <nav className=" flex gap-5 flex-col items-center w-full md:flex-row md:gap-10 md:w-full font-[500] px-7 pb-3">
          <ul className="flex flex-col gap-5 md:flex-row md:gap-10 md:mr-auto items-center">
            <li className="p-2">
              <a href="#" className="hover:underline">
                Product
              </a>
            </li>
            <li className="p-2">
              <a href="#" className="hover:underline">
                Company
              </a>
            </li>
            <li className="p-2">
              <a href="#" className="hover:underline">
                Connect
              </a>
            </li>
          </ul>

          <ul className="flex flex-col items-center gap-5 md:flex-row md:items-center md:gap-10 border-t border-grayish-blue border-solid w-full md:w-auto md:border-t-0">
            <li className="p-2 mt-5 md:mt-0">
              <a href="#">Login</a>
            </li>
            <li>
              <button className="font-[500] w-[124px] h-[40px] bg-  text-white md:w-[137px] md:h-[46px] rounded-[3rem] md:bg-white md:text-light-red duration-200 hover:bg-cta-hover hover:text-white">
                Sign Up
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
