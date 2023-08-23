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
    <section className="pt-16 px-10 pb-24">
      <div className="bg-[#080807] rounded-2xl px-10 py-20">
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
              <h1 className="text-4xl font-bold tracking-tight leading-none md:text-4xl xl:text-4x text-custom-gradient-white ">
                Discover Our Services for <p className="mt-5"> Your Success </p>
              </h1>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 pt-16 gap-10">
          {data.map((item) => (
            <div className="col-span-4 py-6 px-8 custom-border-primary mb-6">
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
