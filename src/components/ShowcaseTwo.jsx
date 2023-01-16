import React from "react";
import MobileImg from "../assets/images/illustration-phones.svg";

const ShowcaseTwo = () => {
  return (
    <section className=" bg-[url('/src/assets/images/bg-pattern-circles.svg')] bg-no-repeat max-[410px]:bg-[center_top_-21rem] bg-[center_top_-18rem] md:bg-[left_-8.5rem_top_-14rem] lg:bg-[left_-14rem_top_-33rem] lg:bg-[length:63rem_63rem] bg-[length:42rem_42rem] relative bg-very-dark-gray-blue rounded-tr-[50px] rounded-bl-[50px] lg:rounded-tr-[90px] lg:rounded-bl-[90px] text-white text-center md:text-left w-full lg:-mt-[330px] md:-mt-5 mt-[7rem]">
      <div className="max-w-[1112px] mx-auto md:flex md:gap-5 lg:gap-14 items-center px-5 pt-24 pb-28 md:py-2 ">
        <img
          src={MobileImg}
          alt=""
          className="max-w-[23rem] md:max-w-[24rem] lg:max-w-[100%] w-full relative md:static -top-[15rem] left-1/2 -translate-x-1/2 md:translate-x-0 lg:relative lg:left-0 lg:-top-[4rem] -mb-[15rem] md:mb-0 lg:-mb-[10rem]"
        />

        <div className="md:basis-[100%] max-w-[30rem] mx-auto md:mx-0 md:max-w-none">
          <h3 className="text-[1.8rem] lg:text-[1.9rem] font-[600] font-heading max-[768px]:max-w-[210px] mx-auto leading-[1.3] mb-5 md:mb-4 ">
            State of the Art Infrastructure
          </h3>
          <p className="text-grayish-blue">
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter wher eyour readers are, keeping your
            site competitive.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseTwo;
