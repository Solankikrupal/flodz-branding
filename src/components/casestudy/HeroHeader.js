import React from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";

function HeroHeader() {
  return (
    <div className="text-center mt-32 xl:mt-26">
      <>
        <div className="grid grid-cols-2">
          <div className="text-left">
            <div className="text-2xl lg:text-7xl font-bold  leading-none inline ml-2 title-text-gradient">
              <Typewriter
                options={{
                  strings: ["Igniting Growth"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <div className="mt-6 lg:text-xl font-light text-wheat-white antialiased mx-auto max-w-2xl">
              Explore how ZAP partnered with a dynamic startup in the automotive
              industry to launch a revolutionary mobile application. In this
              case study, We delve into the strategic digital marketing approach
              that drove rapid adoption and success for this groundbreaking app.
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.83333 5.83337H14.1667V14.1667"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </Link>
            <Link
              to="contact-us"
              spy={true}
              smooth={true}
              offset={-70} // Adjust offset as needed
              duration={600}
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.83333 5.83337H14.1667V14.1667"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </Link>
          </div>
          <div className="text-center relative w-full h-full">
            <img className="m-auto" src="./images/hand-mockup.png" alt=""></img>
          </div>
        </div>
      </>
    </div>
  );
}

export default HeroHeader;
