import React from "react";

function Process() {
  let data = [
    {
      img: "/svg/process01.svg",
      title: "Vision & Exploration",
      details: [
        {
          title: "Brainstorming and Ideation",
          desc: "Collect insights, trends & references to fuel your design vision.",
        },
        {
          title: "Inspiration Gathering",
          desc: "Generate diverse concepts and possibilities to explore different design directions.",
        },
      ],
    },
    {
      img: "/svg/process02.svg",
      title: "Crafting & Development",
      details: [
        {
          title: "Design Evolution",
          desc: "Refine the chosen concept, focusing on visual appeal, usability, and coherence.",
        },
        {
          title: "Visual Elements Integration",
          desc: "Seamlessly integrate typography, color schemes, imagery, and graphical elements.",
        },
      ],
    },
    {
      img: "/svg/process03.svg",
      title: "Polish & Delivery",
      details: [
        {
          title: "Feedback Incorporation",
          desc: "Analyze feedback to refine and enhance the design's strengths.",
        },
        {
          title: "Final Touches",
          desc: "Perfect the design, ensuring consistency, adherence to specifications, & meticulous detail.",
        },
      ],
    },
  ];

  return (
    <section className="pt-8 lg:pt-16 px-5 lg:px-10 pb-12 lg:pb-24">
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
                Process
              </span>
            </div>
            <h1 className="text-2xl lg:text-4xl font-bold tracking-tight leading-none  xl:text-4xl text-wheat-white">
              Elevating Visions,
            </h1>
            <h1 className="text-2xl lg:text-4xl font-bold tracking-tight leading-none  xl:text-4xl text-custom-gradient-secondary">
              Crafting Experiences
            </h1>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 pt-16">
        {data.map((item,index) => (
          <div key={index} className="mt-6 lg:mt-0 ">
            <div className="">
              <div className="">
                <img src={item.img} alt="" />
              </div>
              <h4 className="font-semibold text-xl lg:text-3xl text-wheat-white my-6">
                {item.title}
              </h4>
              {item.details.map((item,index) => (
                <div key={index} className="grid grid-cols-12 text-white mb-8 lg:pr-16">
                  <div className="col-span-1 flex align-top justify-center pt-2 lg:pt-3">
                    <svg
                      width="8"
                      height="14"
                      viewBox="0 0 8 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 1L1 7H7L3 13"
                        stroke="#6633EE"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="col-span-11">
                    <h2 className="text-lg lg:text-xl font-normal mb-2 text-custom-gradient">
                      {item.title}
                    </h2>
                    <p className="text-base font-normal text-[#D9D9D9] opacity-30 font-serif">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Process;
