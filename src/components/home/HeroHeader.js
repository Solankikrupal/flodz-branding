import React from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";
import { Link as Direct } from "react-router-dom";

function HeroHeader() {
  return (
    <div className="text-center mt-32 xl:mt-26 pb-6">
      <>
        <div className="text-2xl lg:text-7xl font-bold  leading-none text-wheat-white inline">
          We elevate
        </div>
        <div className="text-2xl lg:text-7xl font-bold  leading-none inline ml-2 title-text-gradient">
          <Typewriter
            options={{
              strings: ["Ideas","Experiences","Performance"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="mt-6 text-lg lg:text-4xl font-light text-wheat-white antialiased">
          Propelling brilliance to new heights!
        </div>
        <div className="mt-6 lg:text-xl font-light text-wheat-white antialiased mx-auto max-w-3xl">
          Nurturing Growth, Inspiring Excellence: Unleashing the Power of
          Improvement. Embrace a journey of constant evolution, where progress
          knows no bounds.
        </div>
        <Link
          to="services"
          spy={true}
          smooth={true}
          offset={-70} // Adjust offset as needed
          duration={600}
          className=""
        >
          <button className="group text-sm mt-6 mx-1 px-4 lg:px-8 py-4 rounded-lg font-normal tracking-wide bg-btn-purple text-white outline-none ">
            Get a Quote
            <svg
              className="inline transition duration-150 ease-in-out group-hover:scale-150"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.83333 14.1667L14.1667 5.83337"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.83333 5.83337H14.1667V14.1667"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </Link>
        <Direct
          to="/contact-us"
          className=""
        >
          <button className="group text-sm mt-6 mx-1 px-4 lg:px-8 py-4 rounded-lg font-normal tracking-wide border text-white bg-btn-secondary border-wheat-white ">
            Get in Touch
            <svg
              className="inline transition duration-150 ease-in-out group-hover:scale-150"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.83333 14.1667L14.1667 5.83337"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.83333 5.83337H14.1667V14.1667"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </Direct>
      </>
    </div>
  );
}

export default HeroHeader;
