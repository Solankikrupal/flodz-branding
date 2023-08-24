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
    <section className=" pb-40 pt-32">
      <div className="bg-white relative w-100 py-6 flex items-center skew-y-[9.971deg] ">
        {data.map((item) => (
          <div className="flex items-center mx-3 skew-x-[-9.971deg]">
            <img src="/svg/bolt-black.svg" alt="" />
            <p className="ml-3 text-lg font-normal text-[#080807]">{item}</p>
          </div>
        ))}
      </div>

      <div className="bg-white relative w-100 py-6 flex items-center ad-slider-background-primary skew-y-[-3.995deg] translate-y-[-158px]">
        {data.map((item) => (
          <div className="flex items-center mx-3 skew-x-[3.995deg]">
            <img src="/svg/bolt-white.svg" alt="" />
            <p className="ml-3 text-lg font-normal text-white">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AdSlider;
