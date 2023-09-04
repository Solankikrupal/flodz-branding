/* eslint-disable jsx-a11y/no-distracting-elements */
import React from "react";
import Marquee from "react-fast-marquee";

function AdSlider() {
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
    <section className="pb-20 xl:pb-40 pt-24 xl:pt-44 overflow-hidden">
      <>
        <div className="grid grid-cols-12 skew-y-[9.971deg]">
          <Marquee
            className="bg-white relative py-3 3xl:py-6 col-span-12 w-full"
            gradient={false}
            pauseOnHover
            pauseOnClick
            direction={"right"}
            speed={100}
            continuous={true}
          >
            <div className="flex justify-center items-center grid grid-cols-8 px-7">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center skew-x-[-9.971deg] mx-3 col-span-1"
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
      <div className="grid grid-cols-12 skew-y-[-3.995deg] translate-y-[-25px] 3xl:translate-y-[-158px]">
        <Marquee
          className="bg-white relative py-3 3xl:py-6 ad-slider-background-primary col-span-12 w-full"
          gradient={false}
          pauseOnHover
          pauseOnClick
          direction={"left"}
          speed={100}
          continuous={true}
        >
          <div className="flex justify-center items-center grid grid-cols-8 px-7">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex items-center skew-x-[3.995deg] mx-3 col-span-1"
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
    </section>
  );
}

export default AdSlider;
