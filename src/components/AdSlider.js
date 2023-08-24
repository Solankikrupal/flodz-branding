/* eslint-disable jsx-a11y/no-distracting-elements */
import React from "react";

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
        <div className="bg-white relative w-100 py-6 flex items-center skew-y-[9.971deg] ">
          <marquee>
            <div className="flex justify-center items-center">
              {data.map((item) => (
                <div className="flex items-center mx-3 skew-x-[-9.971deg]">
                  <img src="/svg/bolt-black.svg" alt="" />
                  <p className="ml-3 text-xs lg:text-lg font-normal text-[#080807]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </marquee>
        </div>
      </>
      <div className="bg-white relative w-100 py-6 flex items-center ad-slider-background-primary skew-y-[-3.995deg] translate-y-[-px] lg:translate-y-[-158px]">
        <marquee >
          <div className="flex justify-center items-center">
            {data.map((item) => (
              <div className="flex items-center mx-3 skew-x-[3.995deg]">
                <img src="/svg/bolt-white.svg" alt="" />
                <p className="ml-3 text-xs lg:text-lg font-normal text-white">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </marquee>
      </div>
    </section>
  );
}

export default AdSlider;
