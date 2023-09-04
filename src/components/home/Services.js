import React from "react";

function Services() {
  let data = [
    {
      title: "Designing",
      desc: "Serving designs that transcend imagination, turning concepts into captivating realities.",
    },
    {
      title: "Branding",
      desc: "Forge Lasting Impressions. Crafting Your Unique Brand Identity with Distinction.",
    },
    {
      title: "SEO",
      desc: "Tailored to boost visibility and drive organic Growth.",
    },
    {
      title: "Product Development",
      desc: "Elevating SaaS, App, and Web Experiences. Expert Development Redefined.  ",
    },
    {
      title: "Development",
      desc: "Crafting digital innovations through expert development, turning ideas into realities.",
    },
    {
      title: "Content Writing",
      desc: "Our content writing ignites engagement & fuels your brand's voice",
    },
  ];
  return (
    <section
      className="pt-8 lg:pt-16 px-5 lg:px-10 pb-12 lg:pb-24"
      id="services"
    >
      <div className="bg-[#080807] rounded-2xl px-4 py-8 lg:px-10 lg:py-20">
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
                  Services
                </span>
              </div>
              <h1 className="text-2xl lg:text-4xl font-bold tracking-tight leading-none xl:text-4xl text-custom-gradient-white ">
                Discover Our Services for{" "}
                <p className="lg:mt-5"> Your Success </p>
              </h1>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-12 pt-16 gap-2 lg:gap-10">
          {data.map((item, index) => (
            <div
              key={index}
              className="lg:col-span-4 py-4 lg:py-6 lg:px-8 custom-border-primary mb-3 lg:mb-6"
            >
              <div className="">
                <div className=""></div>
                <h4 className="font-semibold text-3xl text-wheat-white mb-3">
                  {item.title}
                </h4>
                <p className="text-base font-normal text-[#D9D9D9] opacity-30 font-serif">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
