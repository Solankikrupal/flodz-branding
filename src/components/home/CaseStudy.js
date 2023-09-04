import React from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
/* import { Carousel } from "react-responsive-carousel"; */

function CaseStudy() {
  let data = [
    {
      img: "/images/project01.png",
      title: "Drive sales performance in the automotive industry",
      disc: "Automotive Sales",
      tags: [{ tag: "Auto" }, { tag: "Mobile App" }, { tag: "UI UX Design" }],
    },
    {
      img: "/images/project02.png",
      title:
        "Explore a vibrant community redefining the way we experience literature",
      disc: "Infotainment",
      tags: [{ tag: "Media" }, { tag: "Web App" }, { tag: "UI UX Design" }],
    },
    {
      img: "/images/project03.png",
      title: "Empower yourself to take control of your health journey",
      disc: "Doctor Consultation",
      tags: [
        { tag: "Healthcare" },
        { tag: "Mobile App" },
        { tag: "UI UX Design" },
      ],
    },
  ];
  return (
    <section
      className="pt-8 md:pt-16 px-5 md:px-10 pb-12 md:pb-24"
      id="caseStudy"
    >
      <div className="flex flex-wrap -mx-4">
        <div className="w-full px-4">
          <div className="">
            <div className="flex items-center mb-7">
              <svg
                width="8"
                height="9"
                viewBox="0 0 8 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  opacity="0.9"
                  y="0.5"
                  width="8"
                  height="8"
                  rx="4"
                  fill="#8E64FF"
                />
              </svg>
              <span className="ml-2 font-normal text-md text-title-tag ">
                Projects We Served
              </span>
            </div>
            <h1 className="text-2xl lg:text-4xl font-bold tracking-tight leading-none xl:text-4xl text-wheat-white">
              Explore Our Case Studies of
            </h1>
            <h1 className="text-2xl lg:text-4xl font-bold tracking-tight leading-none  xl:text-4xl text-custom-gradient-secondary">
              Triumph and Transformation
            </h1>
          </div>
        </div>
      </div>

      <div className="pt-14 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
        {data.map((item, index) => (
          <Link
            key={index}
            to={"/case-study/0" + index}
            className=" rounded-xl  transform hover:scale-105 transition duration-500"
          >
            <div className="relative">
              <img className="w-full rounded-xl" src={item.img} alt="Colors" />
            </div>
            <div className="mt-2 mb-6">
              {item.tags.map((item, index) => (
                <div
                  key={index}
                  className="text-xs inline-flex items-center font-normal leading-sm  px-2 py-1 text-custom-gradient-pink text-wheat-white rounded-full mx-1"
                >
                  {item.tag}
                </div>
              ))}
            </div>
            <h1 className="text-custom-gradient text-xl font-bold cursor-pointer">
              {item.title}
            </h1>
            <p className="text-base font-normal text-[#D9D9D9] opacity-30 font-serif mt-2">
              {item.disc}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default CaseStudy;
