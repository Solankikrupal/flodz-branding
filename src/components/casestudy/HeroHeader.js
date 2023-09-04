import React from "react";
/* import Typewriter from "typewriter-effect"; */
import { Link } from "react-scroll";

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
      project_name: "Revolutionizing Healthcare Experience",
      desc: "Discover AidLink, where innovative design seamlessly intertwines with compassionate healthcare. From intuitive appointment booking to a secure health profile",
      project_banner: "/images/case-study-banner-03.png",
    },
    "/case-study/03": {
      project_name: "Redefined Co-Living",
      desc: "Explore a world of audiobooks, where seamless navigation, personalized recommendations, offline listening, exclusive titles, and a vibrant community redefine the way we experience literature.",
      project_banner: "/images/case-study-banner-04.png",
    },
    // Add more case studies as needed
  };

  const data = dataMap[pathname] || [];

  // Use the data object as needed in your code

  return (
    <div className="text-center mt-32 xl:mt-26">
      <>
        <div className="grid  md:grid-cols-2">
          <div className="text-left self-center">
            <div className="text-2xl lg:text-7xl font-bold  leading-none inline title-text-gradient">
              {data.project_name}
            </div>
            <div className="mt-6 lg:text-xl font-light text-wheat-white antialiased max-w-2xl">
              {data.desc}
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
          <div className="text-center relative w-full h-full pt-5 md:pt-0">
            <img className="m-auto" src={data.project_banner} alt=""></img>
          </div>
        </div>
      </>
    </div>
  );
}

export default HeroHeader;
