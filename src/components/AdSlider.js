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
        <div className="bg-white relative w-100 py-3 3xl:py-6 flex items-center skew-y-[9.971deg] ">
          <Marquee pauseOnHover pauseOnClick direction={"right"} speed={50}>
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
          </Marquee>
        </div>
      </>
      <div className="bg-white relative w-100 py-3 3xl:py-6 flex items-center ad-slider-background-primary skew-y-[-3.995deg] translate-y-[-25px] 3xl:translate-y-[-158px]">
        <Marquee pauseOnHover pauseOnClick direction={"left"} speed={50}>
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
        </Marquee>
      </div>
    </section>
  );
}

export default AdSlider;
