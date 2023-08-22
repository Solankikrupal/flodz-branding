import React from "react";

function ChooseUs() {
  return (
    <section class=" dark:bg-gray-900">
      <div class="grid px-4 py-8 mx-auto lg:gap-15 xl:gap-0 lg:py-16 lg:grid-cols-12 gap-28">
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex rounded-lg">
          <img src="images/choose-us-img.png" alt="mockup" class="rounded-lg" />
        </div>
        <div class="mr-auto place-self-center lg:col-span-5">
          <h1 class="max-w-2xl mb-4  text-4xl  font-bold mb-9 tracking-tight leading-none md:text-5xl xl:text-6x text-[#F3EFEF]">
            Why Choose Us?
          </h1>

          <div className="grid  grid-cols-12 text-white mb-8">
            <div className="col-span-1 flex align-top justify-center pt-3">
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
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="col-span-11">
              <h2 className="text-4xl font-normal mb-2">10x Better Quality</h2>
              <p className="text-base font-normal text-[#D9D9D9] opacity-30">
                Experience an astounding leap in quality that's 10 times beyond
                the ordinary, setting new standards for excellence.
              </p>
            </div>
          </div>

          <div className="grid  grid-cols-12 text-white mb-8">
            <div className="col-span-1 flex align-top justify-center pt-3">
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
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="col-span-11">
              <h2 className="text-4xl font-normal mb-2">
                10x Better Experience
              </h2>
              <p className="text-base font-normal text-[#D9D9D9] opacity-30">
                Immerse yourself in a transformative journey, where every moment
                delivers a 10x richer experience, leaving the ordinary far
                behind.
              </p>
            </div>
          </div>

          <div className="grid  grid-cols-12 text-white mb-8">
            <div className="col-span-1 flex align-top justify-center pt-3">
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
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="col-span-11">
              <h2 className="text-4xl font-normal mb-2">10x Better Strategy</h2>
              <p className="text-base font-normal text-[#D9D9D9] opacity-30">
                Unlock a strategy that propels growth with an impact that's 10x
                more profound, reshaping success in bold new dimensions.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img src="/svg/fueling-success.svg" alt="" />
      </div>
    </section>
  );
}

export default ChooseUs;
