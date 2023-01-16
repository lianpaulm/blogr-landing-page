import React from "react";
import heroPatternM from "../assets/images/bg-pattern-intro-mobile.svg";
import heroPatternD from "../assets/images/bg-pattern-intro-desktop.svg";

const Hero = () => {
  return (
    <section className="relative h-[100vh] max-h-[523px] md:max-h-[600px] bg-gradient-to-br from-very-light-red to-light-red grid place-content-center md:bg-gradient-to-r md:from-very-light-red md:to-light-red rounded-bl-[50px] lg:rounded-bl-[90px] overflow-hidden ">
      <div className="absolute top-0 left-0 right-0 ">
        <img
          src={heroPatternM}
          alt=""
          className="scale-[3.6] translate-x-36 translate-y-60 md:hidden"
        />
        <img
          src={heroPatternD}
          alt=""
          className="scale-[2] md:translate-x-[13rem] md:-translate-y-[8rem] lg:translate-x-[23rem] lg:-translate-y-[27rem] hidden md:block "
        />
      </div>

      <div className="text-white text-center z-10 md:mx-10 md:mt-[1.8rem] lg:mt-[2rem]">
        <h1 className="font-heading font-[600] text-[2.4rem] md:text-[3.2rem] lg:text-[3.4rem] min-[375px]:max-w-[23rem] md:max-w-[100%] leading-[1.2] mb-4 md:mb-3 mx-auto px-2">
          A modern publishing platform
        </h1>

        <p className="font-body font-[400] text-[1.1rem] md:text-[1.2rem] md:max-w-[100%] px-10 min-[375px]:max-w-[25rem]">
          Grow your audience and build your online brand
        </p>

        <div className="mt-10 md:mt-12 flex justify-center gap-5">
          <button className="font-[500] w-[124px] h-[40px] md:w-[137px] md:h-[46px] rounded-[3rem] bg-white text-light-red duration-200 hover:bg-cta-hover hover:text-white">
            Start for free
          </button>
          <button className="font-[500] w-[124px] h-[40px] md:w-[137px] md:h-[46px] border border-white border-solid rounded-[3rem] duration-200 hover:bg-white hover:text-cta-hover">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};
export default Hero;
