/* eslint-disable jsx-a11y/no-distracting-elements */
import React from "react";

function HeaderSlider() {
  let data = [
    {
      title: "Strategic Brilliance",
      desc: "Crafted strategies that fuse creativity",
    },
    {
      title: "Content Mastery",
      desc: "Compelling content that resonates & engages",
    },
    {
      title: "Social Amplification",
      desc: "Elevate your brand's voice across social platforms,",
    },
  ];
  return (
    <section className="px-10">
      <div className=" relative w-100 py-2 md:py-6 flex items-center overflow-hidden grid grid-cols-12">
        <div className="flex items-center col-span-5 md:col-span-1">
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
          <span className="ml-2 font-normal text-xs md:text-md text-title-tag ">
            Active to Serve
          </span>
        </div>
        <marquee className="col-span-7 md:col-span-11">
          <div className="flex justify-center items-center">
            {data.map((item) => (
              <div className="flex items-center mx-3">
                <img src="/svg/bolt-purple.svg" alt="" />
                <p className="ml-3 text-xs md:text-lg font-normal text-white mr-3">
                  {item.title}
                </p>
                <p className=" text-xs md:text-base font-normal text-[#D9D9D9] opacity-30 font-serif max-w-2xl">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </marquee>
      </div>
    </section>
  );
}

export default HeaderSlider;