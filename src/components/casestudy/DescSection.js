import React, { useEffect, useState } from "react";

function DescSection() {
  const { pathname } = document.location;
  const [tagBottomContent, setTagBottomContent] = useState("");
  const dataMap = {
    "/case-study/00": {
      descBanner: "/svg/casestudy-desc01.svg",
      tagLine: "Rev Up Your Sales",
      tagTitle: "Funcationally used",
      tagDesc:
        "Suggesting that your mobile app is seamlessly blending various functions to transform the automotive sales industry.",
      tagBottomContent:
        "<div class='text-xs inline-flex items-center font-normal leading-sm  px-2 py-1 bg-wheat-white  text-[#494847] rounded-lg mx-1 my-2'>Power</div><div class='text-xs inline-flex items-center font-normal leading-sm  px-2 py-1 bg-wheat-white  text-[#494847] rounded-lg mx-1 my-2'>Mileage</div><div class='text-xs inline-flex items-center font-normal leading-sm  px-2 py-1 bg-wheat-white  text-[#494847] rounded-lg mx-1 my-2'>Rating 4.0+</div><div class='text-xs inline-flex items-center font-normal leading-sm  px-2 py-1 bg-wheat-white  text-[#494847] rounded-lg mx-1 my-2'>Safest</div><div class='text-xs inline-flex items-center font-normal leading-sm  px-2 py-1 bg-wheat-white  text-[#494847] rounded-lg mx-1 my-2'>Built quality</div><div class='text-xs inline-flex items-center font-normal leading-sm  px-2 py-1 bg-wheat-white  text-[#494847] rounded-lg mx-1 my-2'>Affordable</div>",
      sideBanner: "/images/sales_automative.png",
      sideTextTag: "Turning Wheels into Win",
      sideTextTitle: "Automotive Sales",
    },
    "/case-study/01": {
      descBanner: "/svg/casestudy-desc02.svg",
      tagLine: "Dive into audiobook bliss",
      tagTitle: "Seamless Listening",
      tagDesc: "Captivating visuals & concise descriptions for enticing titles",
      tagBottomContent: "<img src='/svg/tag-bottom-content-02.svg'  alt='' />",
      sideBanner: "/images/side-banner-bg-01.png",
      sideTextTag: "transform your literature",
      sideTextTitle: "Infotainment",
    },

    "/case-study/02": {
      descBanner: "/svg/casestudy-desc02.svg",
      tagLine: "Prioritize self-care",
      tagTitle: "Simplified Care",
      tagDesc: "Optimized Design Systems for Seamless Roommate Finding",
      tagBottomContent: "<img src='/svg/tag-bottom-content-03.svg'  alt='' />",
      sideBanner: "/images/side-banner-bg-02.png",
      sideTextTag: "Where Design Meets Care",
      sideTextTitle: "Doctor Consultation",
    },
    "/case-study/03": {
      descBanner: "/svg/casestudy-desc04.svg",
      tagLine: "Prioritize self-care",
      tagTitle: "Meet your  Roomie",
      tagDesc: "Optimized Design Systems for Seamless Roommate Finding",
      tagBottomContent: "<img src='/svg/tag-bottom-content-04.svg'  alt='' />",
      sideBanner: "/images/side-banner-bg-03.png",
      sideTextTag: "Turning Wheels into Win",
      sideTextTitle: "Real Estate",
    },
    // Add more case studies as needed
  };
  const data = dataMap[pathname] || [];
  useEffect(() => {
    if (data) {
      setTagBottomContent(data.tagBottomContent);
    } else {
      console.log("Case study not found for the given pathname.");
    }
  }, [data, pathname]);

  return (
    <section className="pt-8 md:pt-16 px-5 md:px-10 pb-12 md:pb-24">
      <div className="grid lg:grid-cols-12 gap-5">
        <div className="md:col-span-6 lg:col-span-3 text-center items-center justify-center flex bg-[#262626] rounded-2xl p-5">
          <img className="m-auto" src={data.descBanner} alt="" />
        </div>
        <div className="md:col-span-6 lg:col-span-3 bg-[#262626] rounded-2xl p-6">
          <p className="text-base font-normal text-[#D9D9D9] opacity-30 font-serif uppercase">
            {data.tagLine}
          </p>
          <h1 className="text-2xl lg:text-4xl font-bold tracking-tight leading-none  xl:text-4xl text-custom-gradient-secondary my-3">
            {data.tagTitle}
          </h1>
          <p className="text-base font-normal text-[#D9D9D9] opacity-30 font-serif mb-3">
            {data.tagDesc}
          </p>

          <div
            id="tag-bottom-content"
            dangerouslySetInnerHTML={{ __html: tagBottomContent }}
          ></div>
        </div>
        <div className="md:col-span-12 lg:col-span-6 relative bg-[#262626] rounded-2xl">
          <img src={data.sideBanner} className="w-full h-full" alt="" />
          <div className=" absolute right-0 top-0 md:top-6 pr-3 md:pr-6">
            <p className="text-base font-normal text-[#D9D9D9] opacity-30 font-serif uppercase">
              {data.sideTextTag}
            </p>
            <h1 className=" text-md md:text-4xl font-bold tracking-tight leading-none  xl:text-4xl text-wheat-white my-1 md:my-3">
              {data.sideTextTitle}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DescSection;
