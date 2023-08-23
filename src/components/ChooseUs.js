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
    <section className="pt-24">
      <div className="grid mx-auto lg:grid-cols-12 pr-10 items-center gap-24">
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex rounded-lg">
          <img src="images/choose-us-img.png" alt="mockup" className="rounded-lg" />
        </div>
        <div className="mr-auto place-self-center lg:col-span-7 ">
          <h1 className="text-4xl font-bold tracking-tight leading-none md:text-4xl xl:text-4x text-wheat-white mb-10">
            Why Choose Us?
          </h1>

          {data.map((item) => (
            <div className="grid grid-cols-12 text-white mb-8" key={item.title}>
              <div className="col-span-1 flex align-top justify-center pt-3">
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
                <h2 className="text-3xl font-normal mb-2 text-custom-gradient">
                  {item.title}
                </h2>
                <p className="text-base font-normal text-[#D9D9D9] opacity-30 font-serif max-w-2xl">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center pt-14">
        <img src="/svg/fueling-success.svg" alt="" />
      </div>
    </section>
  );
}

export default ChooseUs;
