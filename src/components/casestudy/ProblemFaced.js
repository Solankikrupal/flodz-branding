import React from "react";

function ProblemFaced() {
  const { pathname } = document.location;
  const dataMap = {
    "/case-study/00": {
      problems: [
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
      ],
      solutions: [
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
      ],
    },
    "/case-study/01": {
      problems: [
        {
          problem_name: "User Engagement",
          desc: "Low user interest and engagement due to complex design",
        },
        {
          problem_name: "Content Discovery",
          desc: "Extensive libraries made users struggle to discover content that aligns with their interests",
        },
        {
          problem_name: "Offline Access",
          desc: "Unavailability of reliable offline access along with management systems",
        },
      ],
      solutions: [
        {
          solution_name: "Personalized Recommendation",
          desc: "Intuitive recommendation interface that displays suggested audiobooks based on the user's listening history and preferences.",
        },
        {
          solution_name: "Improved Search",
          desc: "Optimize the search bar's design for easy access and visibility. Use filter options with visually appealing icons for refining search results",
        },
        {
          solution_name: "Download Experience",
          desc: "Implemented a user-friendly download manager that clearly shows the progress of ongoing downloads and available offline content.",
        },
      ],
    },
    "/case-study/02": {
      problems: [
        {
          problem_name: "Doctor-Patient Matching",
          desc: "Facilitating efficient and accurate doctor-patient matching",
        },
        {
          problem_name: "Quality Assurance",
          desc: "Absence of a mechanism for continuous quality assurance and monitoring of the healthcare provided by the doctor",
        },
        {
          problem_name: "Appointment Scheduling",
          desc: "Process of scheduling appointments is cumbersome, leading to user frustration and appointment errors",
        },
      ],
      solutions: [
        {
          solution_name: "Smart Matching",
          desc: "A visually appealing and easy-to-use profile setup process for patients to provide relevant information.",
        },
        {
          solution_name: "Improved Trust",
          desc: "Implemented a visually clear and transparent system for collecting patient feedback and reviews after consultations",
        },
        {
          solution_name: "Smart Calendar Integration",
          desc: "Implement a smart calendar system that displays the availability of doctors in real-time",
        },
      ],
    },
    "/case-study/03": {
      problems: [
        {
          problem_name: "User Engagement",
          desc: "Low user interest and engagement due to complex design",
        },
        {
          problem_name: "Content Discovery",
          desc: "Extensive libraries made users struggle to discover content that aligns with their interests",
        },
        {
          problem_name: "Offline Access",
          desc: "Unavailability of reliable offline access along with management systems",
        },
      ],
      solutions: [
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
      ],
    },
    "/case-study/04": {
      problems: [
        {
          problem_name: "Content Management",
          desc: "Growing library of articles, images, and multimedia content becomes complex without a management system",
        },
        {
          problem_name: "User Engagement",
          desc: "Low user engagement through comments and discussions",
        },
        {
          problem_name: "Content Promotion",
          desc: "Integration with social media platforms was missing for promotion of content",
        },
      ],
      solutions: [
        {
          solution_name: "Archive and Pagination",
          desc: "Pagination system for large archives to prevent overwhelming users with too much content ",
        },
        {
          solution_name: "Quality Content",
          desc: "Humanized the community with avatars and brief bios for regular contributors to improve visibility",
        },
        {
          solution_name: "Boosted Performance",
          desc: "Engaging headlines and dynamic visuals to draw attention to popular articles",
        },
      ],
    },
    "/case-study/05": {
      problems: [
        {
          problem_name: "User Engagement",
          desc: "Low user interest and engagement due to complex design",
        },
        {
          problem_name: "Content Discovery",
          desc: "Extensive libraries made users struggle to discover content that aligns with their interests",
        },
        {
          problem_name: "Offline Access",
          desc: "Unavailability of reliable offline access along with management systems",
        },
      ],
      solutions: [
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
      ],
    },
    "/case-study/06": {
      problems: [
        {
          problem_name: "Ordering Process",
          desc: "Customers struggled with complicated and time-consuming ordering processes",
        },
        {
          problem_name: "Order Transparency ",
          desc: "Customers are anxious about the status of their food orders",
        },
        {
          problem_name: "Informed Dining Choices",
          desc: "Choosing the right restaurant and dish was challenging, especially in a crowded marketplace",
        },
      ],
      solutions: [
        {
          solution_name: "Seamless Ordering",
          desc: "Intuitive and user-friendly interface for ordering your favorite meals",
        },
        {
          solution_name: "Track Your Feast in Real-Time",
          desc: "Know precisely when your meal is being prepared and when it's on its way",
        },
        {
          solution_name: "Community Recommendations",
          desc: "Make informed decisions with DashEats's restaurant ratings and customer reviews ",
        },
      ],
    },

    // Add more case studies as needed
  };

  const data = dataMap[pathname] || [];

  return (
    <section className="pt-8 lg:pt-16 px-5 lg:px-10 pb-12 lg:pb-24">
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
          {data.problems.map((item, index) => (
            <div key={index} className="lg:col-span-4">
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
          {data.solutions.map((item, index) => (
            <div key={index} className="lg:col-span-4">
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
