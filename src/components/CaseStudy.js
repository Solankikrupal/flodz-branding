import React from "react";

function CaseStudy() {
  let data = [
    {
      img: "/images/project01.png",
      title: "Let's inspire the future with a free online academy",
      disc: "Skybox x Samsung",
      tags: [{ tag: "Design" }, { tag: "Build" }, { tag: "Automate" }],
    },
    {
      img: "/images/project02.png",
      title: "Let's inspire the future with a free online academy",
      disc: "Skybox x Samsung",
      tags: [{ tag: "Design" }, { tag: "Build" }, { tag: "Automate" }],
    },
    {
      img: "/images/project03.png",
      title: "Let's inspire the future with a free online academy",
      disc: "Skybox x Samsung",
      tags: [{ tag: "Design" }, { tag: "Build" }, { tag: "Automate" }],
    },
  ];
  return (
    <section className="pt-8 md:pt-16 px-5 md:px-10 pb-12 md:pb-24">
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
                Projects We Served
              </span>
            </div>
            <h1 className="text-2xl lg:text-4xl font-bold tracking-tight leading-none xl:text-4xl text-wheat-white">
              Explore Our Case Studies of
            </h1>
            <h1 className="text-2xl lg:text-4xl font-bold tracking-tight leading-none  xl:text-4xl text-custom-gradient-secondary">
              Triumph and Transformation
            </h1>
          </div>
        </div>
      </div>

      <div class="pt-14 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
        {data.map((item) => (
          <div class=" rounded-xl  transform hover:scale-105 transition duration-500">
            <div class="relative">
              <img class="w-full rounded-xl" src={item.img} alt="Colors" />
            </div>
            <div className="mt-2 mb-6">
              {item.tags.map((item) => (
                <div class="text-xs inline-flex items-center font-normal leading-sm  px-2 py-1 text-custom-gradient-pink text-wheat-white rounded-full mx-1">
                  {item.tag}
                </div>
              ))}
            </div>
            <h1 class="text-custom-gradient text-xl font-bold cursor-pointer">
              {item.title}
            </h1>
            <p class="text-base font-normal text-[#D9D9D9] opacity-30 font-serif mt-2">
              {item.disc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CaseStudy;
