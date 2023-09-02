import React from "react";

function QuoteSection() {
  return (
    <section className="pt-4 md:pt-6 px-5 md:px-10 pb-4 md:pb-8">
      <div className="grid grid-cols-12 items-center">
        <div className=" col-span-2">
          <img src="/svg/quotes.svg" alt="quote" />
        </div>
        <div className=" col-span-10">
          <h1 className="text-2xl lg:text-4xl font-bold tracking-tight leading-none  xl:text-4xl text-custom-gradient-secondary">
            The main objective is impact on efficiency, customer engagement, &
            sales performance in automotive Industry.
          </h1>
        </div>
      </div>
    </section>
  );
}

export default QuoteSection;
