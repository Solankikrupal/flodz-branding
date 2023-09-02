import React from "react";

function Introduction() {
  let data = [
    {
      name: "Industry",
      type: "Automotive",
    },
    {
      name: "Platform",
      type: "Mobile App",
    },
    {
      name: "Services",
      type: "UX & UI Design",
    },
  ];
  return (
    <section className="pt-8 md:pt-16 px-5 md:px-10 pb-12 md:pb-24">
      <h1 className="text-2xl lg:text-4xl font-bold tracking-tight leading-none xl:text-4xl text-custom-gradient-white mb-8">
        Introduction
      </h1>
      <p className="lg:text-xl font-light text-wheat-white antialiased opacity-60">
        A cutting-edge mobile application designed to empower salespersons in
        the automotive industry to enhance their efficiency, customer
        engagement, and overall sales performance. This user-friendly app is
        tailored specifically for car sales professionals, providing them with a
        comprehensive toolkit to streamline their selling process and drive
        success in a competitive market.
      </p>
      <div className="grid grid-cols-6 mt-11">
        {data.map((item) => (
          <div>
            <h5 className=" text-sm font-normal text-wheat-white antialiased opacity-60">
              {item.name}
            </h5>
            <h4 className=" text-2xl font-semibold text-custom-gradient-secondary">
              {item.type}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Introduction;
