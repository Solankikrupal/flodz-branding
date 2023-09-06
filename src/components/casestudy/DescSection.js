function DescSection() {
  const { pathname } = document.location;
  const dataMap = {
    "/case-study/00": {
      descBanner: "/svg/casestudy-desc01.svg",
      tagLine: "Rev Up Your Sales",
      tagTitle: "Funcationally used",
      tagDesc:
        "Suggesting that your mobile app is seamlessly blending various functions to transform the automotive sales industry.",
      tagBottomContent: "/svg/tag-bottom-content-01.svg",
      sideBanner: "/images/sales_automative.png",
      sideTextTag: "Turning Wheels into Win",
      sideTextTitle: "Automotive Sales",
    },
    "/case-study/01": {
      descBanner: "/svg/casestudy-desc02.svg",
      tagLine: "Dive into audiobook bliss",
      tagTitle: "Seamless Listening",
      tagDesc: "Captivating visuals & concise descriptions for enticing titles",
      tagBottomContent: "/svg/tag-bottom-content-02.svg",
      sideBanner: "/images/side-banner-bg-01.png",
      sideTextTag: "transform your literature",
      sideTextTitle: "Infotainment",
    },

    "/case-study/02": {
      descBanner: "/svg/casestudy-desc03.svg",
      tagLine: "Prioritize self-care",
      tagTitle: "Simplified Care",
      tagDesc: "Optimized Design Systems for Seamless Roommate Finding",
      tagBottomContent: "/svg/tag-bottom-content-03.svg",
      sideBanner: "/images/side-banner-bg-02.png",
      sideTextTag: "Where Design Meets Care",
      sideTextTitle: "Doctor Consultation",
    },
    "/case-study/03": {
      descBanner: "/svg/casestudy-desc04.svg",
      tagLine: "Prioritize self-care",
      tagTitle: "Meet your  Roomie",
      tagDesc: "Optimized Design Systems for Seamless Roommate Finding",
      tagBottomContent: "/svg/tag-bottom-content-04.svg",
      sideBanner: "/images/side-banner-bg-03.png",
      sideTextTag: "Turning Wheels into Win",
      sideTextTitle: "Real Estate",
    },
    "/case-study/04": {
      descBanner: "/svg/casestudy-desc05.svg",
      tagLine: "Share, learn and grow",
      tagTitle: "Elegant Design",
      tagDesc:
        "Suggesting that your mobile app is seamlessly blending various functions to transform the automotive sales industry.",
      tagBottomContent: "/svg/tag-bottom-content-05.svg",
      sideBanner: "/images/side-banner-bg-04.png",
      sideTextTag: "Write your mind",
      sideTextTitle: "Personal Development",
    },
    "/case-study/05": {
      descBanner: "/svg/casestudy-desc06.svg",
      tagLine: "Master your hobby",
      tagTitle: "Dynamically Powered",
      tagDesc:
        "Easy access to qualified trainers, personalized lessons with flexible scheduling",
      tagBottomContent: "/svg/tag-bottom-content-06.svg",
      sideBanner: "/images/side-banner-bg-04.png",
      sideTextTag: "Champion your hidden talent",
      sideTextTitle: "Lifestyle and Leisure",
    },
    "/case-study/06": {
      descBanner: "/svg/casestudy-desc07.svg",
      tagLine: "Freshly served food",
      tagTitle: "Doorstep Delivery",
      tagDesc:
        "Few taps to browse menus, customize orders, and complete transactions effortlessly",
      tagBottomContent: "/svg/tag-bottom-content-07.svg",
      sideBanner: "/images/side-banner-bg-06.png",
      sideTextTag: "Feast at your comfort",
      sideTextTitle: "Food Delivery",
    },
    // Add more case studies as needed
  };

  const data = dataMap[pathname] || [];

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
          <img src={data.tagBottomContent} alt="" />
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
