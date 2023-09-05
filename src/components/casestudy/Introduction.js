import React from "react";

function Introduction() {
  const { pathname } = document.location;
  const dataMap = {
    "/case-study/00": {
      introduction:
        "A cutting-edge mobile application designed to empower salespersons in the automotive industry to enhance their efficiency, customer engagement, and overall sales performance. This user-friendly app is tailored specifically for car sales professionals, providing them with a comprehensive toolkit to streamline their selling process and drive success in a competitive market.",
      tags: [
        { tag_name: "Industry", tag_detail: "Automotive" },
        { tag_name: "Platform", tag_detail: "Mobile App" },
        { tag_name: "Services", tag_detail: "UX & UI Design" },
      ],
    },
    "/case-study/01": {
      introduction:
        "Vagoda Audiobooks is a premier online platform dedicated to providing an exceptional audiobook experience. The Vagoda Audiobook Web app utilizes the power of thoughtful user interfaces and visually captivating layouts. Explore a world of audiobooks, where seamless navigation, personalized recommendations, offline listening, exclusive titles, and a vibrant community redefine the way we experience literature.",
      tags: [
        { tag_name: "Industry", tag_detail: "Media" },
        { tag_name: "Platform", tag_detail: "Web App" },
        { tag_name: "Services", tag_detail: "UX & UI Design" },
      ],
    },
    "/case-study/02": {
      introduction:
        "AidLink is a design-driven health app meticulously crafted to provide essential support for your medical and well-being needs. With an expansive network of healthcare providers and accessible medical services, AidLink reimagines the way you schedule doctor appointments, access critical health information, and empower yourself to take control of your health journey.",
      tags: [
        { tag_name: "Industry", tag_detail: "Healthcare" },
        { tag_name: "Platform", tag_detail: "Mobile App" },
        { tag_name: "Services", tag_detail: "UX & UI Design" },
      ],
    },
    "/case-study/03": {
      introduction:
        "Vagoda Audiobooks is a premier online platform dedicated to providing an exceptional audiobook experience. The Vagoda Audiobook Web app utilizes the power of thoughtful user interfaces and visually captivating layouts. Explore a world of audiobooks, where seamless navigation, personalized recommendations, offline listening, exclusive titles, and a vibrant community redefine the way we experience literature.",
      tags: [
        { tag_name: "Industry", tag_detail: "Media" },
        { tag_name: "Platform", tag_detail: "Web App" },
        { tag_name: "Services", tag_detail: "UX & UI Design" },
      ],
    },
    "/case-study/04": {
      introduction:
        "Magz is your passport to a world of knowledge, inspiration, and connection. With a vibrant and inclusive community, embark on a journey of exploration and personal growth. We curate a rich tapestry of insightful articles, stories, and perspectives that cover a wide spectrum of topics, ensuring there's something for everyone",
      tags: [
        { tag_name: "Industry", tag_detail: "Media & Publishing" },
        { tag_name: "Platform", tag_detail: "Web App" },
        { tag_name: "Services", tag_detail: "UX & UI Design" },
      ],
    },
    "/case-study/05": {
      introduction:
        "Vagoda Audiobooks is a premier online platform dedicated to providing an exceptional audiobook experience. The Vagoda Audiobook Web app utilizes the power of thoughtful user interfaces and visually captivating layouts. Explore a world of audiobooks, where seamless navigation, personalized recommendations, offline listening, exclusive titles, and a vibrant community redefine the way we experience literature.",
      tags: [
        { tag_name: "Industry", tag_detail: "Lifestyle" },
        { tag_name: "Platform", tag_detail: "Mobile App" },
        { tag_name: "Services", tag_detail: "UX & UI Design" },
      ],
    },
    // Add more case studies as needed
  };

  const data = dataMap[pathname] || [];
  return (
    <section className="pt-4 md:pt-4 px-5 md:px-10 pb-4 md:pb-4">
      <h1 className="text-2xl lg:text-4xl font-bold tracking-tight leading-none xl:text-4xl text-custom-gradient-white mb-2">
        Introduction
      </h1>
      <p className="lg:text-xl font-light text-wheat-white antialiased opacity-60">
        {data.introduction}
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mt-5">
        {data.tags.map((item, index) => (
          <div key={index}>
            <h5 className=" text-sm font-normal text-wheat-white antialiased opacity-60 uppercase">
              {item.tag_name}
            </h5>
            <h4 className=" text-2xl font-semibold text-custom-gradient-secondary">
              {item.tag_detail}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Introduction;
