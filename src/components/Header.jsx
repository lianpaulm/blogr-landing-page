import React, { useState } from "react";
import Logo from "../assets/images/logo.svg";
import Hamburger from "../assets/images/icon-hamburger.svg";
import CloseIcon from "../assets/images/icon-close.svg";
import ArrowDark from "../assets/images/icon-arrow-dark.svg";
import ArrowLight from "../assets/images/icon-arrow-light.svg";
import sublinks from "../data";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropDownOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 max-w-[1112px] mt-0 mx-auto flex gap-x-12 items-center px-5 md:px-7 h-[110px] md:h-[170px] text-white ">
      {/* logo */}
      <a
        href="#"
        className="w-[4.5rem] md:w-[auto] flex-shrink-0 mr-auto md:mr-0"
        aria-label="logo"
      >
        <img src={Logo} alt="" />
      </a>

      {/* hamburger menu */}
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

      {/* navbar */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } rounded-md absolute top-[100px] left-5 right-5 bg-white md:bg-[transparent] text-very-dark-gray-blue md:static md:text-white  py-5 md:flex md:items-center md:w-full drop-shadow-xl md:drop-shadow-none`}
      >
        <nav className=" flex gap-5 flex-col items-center  w-full md:flex-row md:gap-10 md:w-full font-[500] px-7 pb-3 md:pb-0 ">
          <ul className="flex flex-col gap-2 md:flex-row md:gap-9 md:mr-auto w-full text-center md:text-left">
            {/* nav item */}
            {sublinks.map((item, index) => {
              const { links, page } = item;
              return (
                <li className="group p-2 relative" key={index}>
                  <button
                    id="dropdownDefaultButton"
                    className=" flex items-center gap-3 mx-auto md:gap-4 "
                  >
                    {page}
                    <div
                      className={`${
                        isDropDownOpen ? "rotate-180" : "rotate-0"
                      } md:group-hover:rotate-180 shrink-0 `}
                    >
                      <img src={ArrowDark} alt="" className="md:hidden" />
                      <img
                        src={ArrowLight}
                        alt=""
                        className="hidden md:block md:scale-125"
                      />
                    </div>
                  </button>

                  {/* submenu-content */}
                  <div
                    className={`${
                      isDropDownOpen ? "block" : "hidden"
                    }  group-hover:block md:absolute md:top-0 md:left-0 md:translate-y-[40px] md:w-full pt-1`}
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <ul className=" md:text-very-dark-black-blue md:px-7 md:py-5 md:min-w-[160px] p-2 rounded-md bg-light-gray mt-4 md:mt-0">
                      {links.map((item, index) => {
                        const { url, label } = item;
                        return (
                          <li className="p-2" key={index}>
                            <a
                              href={url}
                              className="text-very-dark-grayish-blue hover:text-very-dark-gray-blue md:font-[400] "
                            >
                              {label}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>

          <ul className="flex flex-col items-center gap-5 md:flex-row md:items-center md:gap-10 border-t border-grayish-blue border-solid w-full md:w-auto md:border-t-0">
            <li className="p-2 mt-5 md:mt-0">
              <a href="#">Login</a>
            </li>
            <li>
              <button className="font-[500] w-[124px] h-[40px] max-[768px]:bg-gradient-to-r from-very-light-red to-light-red  text-white md:w-[137px] md:h-[46px] rounded-[3rem] md:bg-white md:text-light-red duration-200 hover:bg-cta-hover hover:text-white">
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
