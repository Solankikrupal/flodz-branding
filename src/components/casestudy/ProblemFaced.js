import React from "react";

function ProblemFaced() {
  let data = [
    {
      problem_name: "Limited Efficiency",
      desc: "Salespersons lacked an efficient way to streamline their selling process.",
    },
    {
      problem_name: "Lack of Engagement",
      desc: "Customer engagement was low due to outdated methods.",
    },
    {
      problem_name: "Sales Performance Gap",
      desc: "Sales performance struggled to meet expectations in a competitive market.",
    },
  ];

  let solutionData = [
    {
      solution_name: "Comprehensive Toolkit",
      desc: "Tailored for car sales professionals, equipped with tools to enhance efficiency.",
    },
    {
      solution_name: "Enhanced Engagement",
      desc: "App facilitated better interactions through personalized features & information.",
    },
    {
      solution_name: "Boosted Performance",
      desc: "Improved sales by empowering salespersons with data-driven insights.",
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
              <h1 className="text-2xl lg:text-4xl font-bold tracking-tight leading-none xl:text-4xl text-wheat-white ">
                Problems Faced
              </h1>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-12 pt-16 gap-2 lg:gap-10">
          {data.map((item) => (
            <div className="lg:col-span-4">
              <div className="grid grid-cols-12 text-white mb-8">
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
                  <h2 className="text-xl lg:text-2xl font-normal mb-2 text-custom-gradient">
                    {item.problem_name}
                  </h2>
                  <p className="text-sm lg:text-base font-normal text-[#D9D9D9] opacity-30 font-serif max-w-[300px] lg:max-w-xl">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap mt-14">
          <div className="w-full px-4">
            <div className="">
              <h1 className="text-2xl lg:text-4xl font-bold tracking-tight leading-none xl:text-4xl text-wheat-white ">
                Solutions Provided
              </h1>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-12 pt-16 gap-2 lg:gap-10">
          {solutionData.map((item) => (
            <div className="lg:col-span-4">
              <div className="grid grid-cols-12 text-white mb-8">
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
                  <h2 className="text-xl lg:text-2xl font-normal mb-2 text-custom-gradient">
                    {item.solution_name}
                  </h2>
                  <p className="text-sm lg:text-base font-normal text-[#D9D9D9] opacity-30 font-serif max-w-[300px] lg:max-w-xl">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProblemFaced;
