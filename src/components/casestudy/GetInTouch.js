import React from "react";
import { Link } from "react-scroll";
import Marquee from "react-fast-marquee";

function GetInTouch() {
  let data = [
    "Strategic Brilliance",
    "Content Mastery",
    "Social Amplification",
    "UI UX Designing",
    "Graphic Designing",
    "Development",
    "Saas Products",
    "App & Web Development",
  ];

  return (
    <section
      className="pt-8 lg:pt-16 px-5 lg:px-10 pb-12 lg:pb-24"
    >
      <div className="bg-[#080807] rounded-2xl ">
        <div className="grid lg:grid-cols-12">
          <div className=" lg:col-span-6 pl-4 py-8 lg:pl-10 lg:py-20">
            <div className="text-left">
              <h2 className="text-xl lg:text-2xl font-normal mb-2 text-custom-gradient">
                Got an Idea?
              </h2>
              <div className="text-2xl lg:text-5xl font-bold  leading-none inline ml-2 title-text-gradient">
                Lets build it Together
              </div>
              <div className="mt-6 lg:text-md font-light text-wheat-white opacity-50 max-w-2xl">
                Unlocking Success: Journey with us as we unveil the driving
                force behind our revolutionary mobile app and the logo that
                encapsulates its power.
              </div>
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
            </div>
          </div>
          <div className=" lg:col-span-6 overflow-hidden sm:none md:none">
            <>
              <div className="bg-white relative w-100 py-3 3xl:py-6 flex items-center skew-y-[30deg] translate-y-[110px]">
                <Marquee
                  pauseOnHover
                  pauseOnClick
                  direction={"right"}
                  speed={50}
                >
                  <div className="flex justify-center items-center">
                    {data.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center mx-3 skew-x-[-25deg]"
                      >
                        <img src="/svg/bolt-black.svg" alt="" />
                        <p className="ml-3 text-xs lg:text-lg font-normal text-[#080807]">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </Marquee>
              </div>
            </>
            <div className="bg-white relative w-100 py-3 3xl:py-6 flex items-center ad-slider-background-primary skew-y-[-36.22deg] translate-y-[200px] 3xl:translate-y-[200px]">
              <Marquee pauseOnHover pauseOnClick direction={"left"} speed={50}>
                <div className="flex justify-center items-center">
                  {data.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center mx-3 skew-x-[30.22deg]"
                    >
                      <img src="/svg/bolt-white.svg" alt="" />
                      <p className="ml-3 text-xs lg:text-lg font-normal text-white">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetInTouch;
