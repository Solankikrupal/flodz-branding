import React from "react";

function QuoteSection() {
  const { pathname } = document.location;
  const dataMap = {
    "/case-study/00": {
      quotes:
        "The main objective is impact on efficiency, customer engagement, & sales performance in automotive Industry",
    },
    "/case-study/01": {
      quotes:
        "Designing an audiobook experience that captivates, connects, and empowers",
    },
    "/case-study/02": {
      quotes:
        "Revolutionize healthcare with streamlined scheduling, precise doctor-patient matching, and quality assurance in one app",
    },
    "/case-study/03": {
      quotes:
        "The main objective is impact on efficiency, customer engagement, & sales performance in automotive Industry",
    },
    "/case-study/04": {
      quotes:
        "Solving complexity with elegant design: Streamlining content management, promoting engagement, and empowering our vibrant community",
    },
    "/case-study/05": {
      quotes:
        "Bringing individuals and trainers together in a supportive and inclusive environment",
    },
    // Add more case studies as needed
  };

  const data = dataMap[pathname] || [];

  return (
    <section className="pt-4 md:pt-6 px-5 md:px-10 pb-4 md:pb-8">
      <div className="grid lg:grid-cols-12 items-center">
        <div className="col-span-2 w-full text-center items-center">
          <img className="m-auto opacity-30" src="/svg/quotes.svg" alt="quote" />
        </div>
        <div className=" col-span-10">
          <h1 className="text-2xl lg:text-4xl font-bold tracking-tight leading-none  xl:text-4xl text-custom-gradient-secondary">
            {data.quotes}
          </h1>
        </div>
      </div>
    </section>
  );
}

export default QuoteSection;
