import React from "react";
import { Link } from "react-router-dom";
/* import Typewriter from "typewriter-effect"; */
/* import { Link } from "react-scroll"; */

function HeroHeader() {
  const { pathname } = document.location;
  const dataMap = {
    "/case-study/00": {
      project_name: "Igniting Growth",
      desc: "Explore how ZAP partnered with a dynamic startup in the automotive industry to launch a revolutionary mobile application. In this case study, We delve into the strategic digital marketing approach that drove rapid adoption and success for this groundbreaking app.",
      project_banner: "/images/case-study-banner-01.png",
    },
    "/case-study/01": {
      project_name: "Engagement Elevator",
      desc: "Explore a world of audiobooks, where seamless navigation, personalized recommendations, offline listening, exclusive titles, and a vibrant community redefine the way we experience literature.",
      project_banner: "/images/case-study-banner-02.png",
    },
    "/case-study/02": {
      project_name: "Simplify Healthcare",
      desc: "Discover AidLink, where innovative design seamlessly intertwines with compassionate healthcare. From intuitive appointment booking to a secure health profile",
      project_banner: "/images/case-study-banner-03.png",
    },
    "/case-study/03": {
      project_name: "Redefined Co-Living",
      desc: "Explore a world of audiobooks, where seamless navigation, personalized recommendations, offline listening, exclusive titles, and a vibrant community redefine the way we experience literature.",
      project_banner: "/images/case-study-banner-04.png",
    },
    "/case-study/04": {
      project_name: "Collaboration Catalyst",
      desc: "Magz is a dynamic and diverse blog website dedicated to sparking your curiosity, fostering meaningful connections, and inspiring personal growth",
      project_banner: "/images/case-study-banner-05.png",
    },
    "/case-study/05": {
      project_name: "Engagement Elevator",
      desc: "Uncover hidden talents, ignite your creativity, and unlock new horizons in the company of experienced guides at HobbyMentor who are eager to share their expertise with you",
      project_banner: "/images/case-study-banner-06.png",
    },
    "/case-study/06": {
      project_name: "Elevated Comfort",
      desc: "DashEats is the ultimate food delivery app that's set to revolutionize the way you experience the world of flavors. Say goodbye to ordinary dining and embrace a world of extraordinary tastes, all from the comfort of your own home",
      project_banner: "/images/case-study-banner-07.png",
    },
    // Add more case studies as needed
  };

  const data = dataMap[pathname] || [];

  // Use the data object as needed in your code

  return (
    <div className="text-center mt-10 xl:mt-10">
      <>
        <div className="grid  md:grid-cols-2">
          <div className="text-left self-start pt-14">
            <div className="text-2xl lg:text-7xl font-bold  leading-none inline title-text-gradient">
              {data.project_name}
            </div>
            <div className="mt-6 lg:text-xl font-light text-wheat-white antialiased max-w-2xl">
              {data.desc}
            </div>
            <Link
              to="/get-a-quote"
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
          </div>
          <div className="text-center relative w-full h-full pt-5 md:pt-0">
            <img className="mx-auto" src={data.project_banner} alt=""></img>
          </div>
        </div>
      </>
    </div>
  );
}

export default HeroHeader;
