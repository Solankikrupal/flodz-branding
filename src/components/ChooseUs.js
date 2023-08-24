import React from "react";

function ChooseUs() {
  let data = [
    {
      title: "10x Better Quality",
      desc: "Experience an astounding leap in quality that's 10 times beyond the ordinary, setting new standards for excellence.",
    },
    {
      title: "10x Better Experience",
      desc: "Immerse yourself in a transformative journey, where every moment delivers a 10x richer experience, leaving the ordinary far behind.",
    },
    {
      title: "10x Better Strategy",
      desc: "Unlock a strategy that propels growth with an impact that's 10x more profound, reshaping success in bold new dimensions.",
    },
  ];

  return (
    <section className="pt-8 lg:pt-24">
      <div className="lg:grid mx-auto lg:grid-cols-1 xl:grid-cols-2 lg:pr-10 items-center gap-24">
        <div className="lg:mt-0  lg:flex rounded-lg">
          <img
            src="images/choose-us-img.png"
            alt="mockup"
            className="rounded-lg max-w-xs lg:max-w-none"
          />
        </div>
        <div className="px-5 lg:px-5 mr-auto place-self-center  mt-10">
          <h1 className="text-2xl lg:text-4xl font-bold tracking-tight leading-none  text-wheat-white mb-10">
            Why Choose Us?
          </h1>
          <div className="md:grid md:grid-cols-2 xl:grid-cols-1">
            {data.map((item) => (
              <div
                className="grid grid-cols-12 text-white mb-8"
                key={item.title}
              >
                <div className="col-span-1  pt-3">
                  <div className="flex align-top justify-center">
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
                </div>
                <div className="col-span-11">
                  <h2 className="text-xl lg:text-3xl font-normal mb-2 text-custom-gradient">
                    {item.title}
                  </h2>
                  <p className="text-sm lg:text-base font-normal text-[#D9D9D9] opacity-30 font-serif max-w-[300px] lg:max-w-xl">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChooseUs;
