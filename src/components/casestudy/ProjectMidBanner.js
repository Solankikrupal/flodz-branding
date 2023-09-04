import React from "react";

function ProjectMidBanner() {
  const { pathname } = document.location;
  const dataMap = {
    "/case-study/00": {
      banner: "/images/case-study-mid-banner-01.png",
    },
    "/case-study/01": {
      banner: "/images/case-study-mid-banner-02.png",
    },
    "/case-study/02": {
      banner: "/images/case-study-mid-banner-03.png",
    },
    "/case-study/03": {
      banner: "/images/case-study-mid-banner-04.png",
    },
    "/case-study/04": {
      banner: "/images/case-study-mid-banner-05.png",
    },
    "/case-study/05": {
      banner: "/images/case-study-mid-banner-06.png",
    },
    // Add more case studies as needed
  };

  const data = dataMap[pathname] || [];

  return (
    <section className="pt-8 lg:pt-16 px-5 lg:px-10 ">
      <img
        className="w-full h-full object-cover rounded-xl"
        src={data.banner}
        alt=""
      />
    </section>
  );
}

export default ProjectMidBanner;
