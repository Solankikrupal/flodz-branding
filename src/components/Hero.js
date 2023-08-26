import React from "react";



function Hero() {
  return (
    <div className="xl:min-h-screen min-w-full  flex flex-col justify-center  px-5 lg:px-10 pb-10 ">
      <div className="relative w-full mx-auto">
        <div className="relative  custom-backgrond shadow-lg rounded-3xl xl:min-h-screen">
          <div className="px-2 lg:px-6 3xl:px-20 py-6 z-30">
            {/* <!-- nav --> */}
            <div className="flex items-center justify-between ">
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center text-3xl font-bold text-true-gray-800">
                  <img alt="" src="svg/Logo.svg"></img>
                </div>
              </div>
              <div className="hidden md:flex items-center justify-center gap-3">
                <a
                  href="/"
                  className="flex items-center justify-center  text-base  text-wheat-white font-normal tracking-tight transition duration-150 ease-in-out p-2 nav-hover-btn"
                >
                  Home
                </a>
                <a
                  href="/"
                  className="flex items-center justify-center  text-base text-wheat-white  font-normal tracking-tight transition duration-150 ease-in-out p-2 nav-hover-btn"
                >
                  Services
                </a>
                <a
                  href="/"
                  className="flex items-center justify-center  text-base text-wheat-white  font-normal tracking-tight transition duration-150 ease-in-out p-2 nav-hover-btn"
                >
                  CaseStudy
                </a>
                <button className="px-6 py-3 rounded-lg font-normal border text-sm  text-white border-gra border-gradient-to-r from-btn-purple to-btn-secondary nav-hover-primary-btn">
                  Get in Touch
                </button>
              </div>
            </div>
            {/* <!-- /nav --> */}

            {/* <!-- hero section --> */}
            <div className="text-center mt-32 xl:mt-26">
              <div className="text-2xl lg:text-7xl font-bold  leading-none text-wheat-white inline">
                We elevate
              </div>
              <div className="text-2xl lg:text-7xl font-bold  leading-none text-wheat-white inline ml-2 title-text-gradient">
                Experiences,
              </div>
              <div className="mt-6 text-lg lg:text-4xl font-light text-wheat-white antialiased">
                Propelling brilliance to new heights!
              </div>
              <div className="mt-6 lg:text-xl font-light text-wheat-white antialiased mx-auto max-w-2xl">
                Nurturing Growth, Inspiring Excellence: Unleashing the Power of
                Improvement. Embrace a journey of constant evolution, where
                progress knows no bounds.
              </div>
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
            </div>

            {/* <!-- /hero section --> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
