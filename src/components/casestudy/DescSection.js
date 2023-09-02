import React from "react";

function DescSection() {
  return (
    <section className="pt-8 md:pt-16 px-5 md:px-10 pb-12 md:pb-24">
      <div className="grid grid-cols-12 gap-5">
        <div className=" col-span-3 text-center items-center justify-center flex bg-[#262626] rounded-2xl">
          <img className="m-auto" src="/svg/casestudy-desc01.svg" alt="" />
        </div>
        <div className=" col-span-3 bg-[#262626] rounded-2xl p-6">
          <p className="text-base font-normal text-[#D9D9D9] opacity-30 font-serif uppercase">
            Rev Up Your Sales
          </p>
          <h1 className="text-2xl lg:text-4xl font-bold tracking-tight leading-none  xl:text-4xl text-custom-gradient-secondary my-3">
            Funcationally <p>Fused</p>
          </h1>
          <p className="text-base font-normal text-[#D9D9D9] opacity-30 font-serif mb-3">
            Suggesting that your mobile app is seamlessly blending various
            functions to transform the automotive sales industry.
          </p>

          <div class="text-xs inline-flex items-center font-normal leading-sm  px-2 py-1 bg-wheat-white  text-[#494847] rounded-lg mx-1 my-2">
            Power
          </div>
          <div class="text-xs inline-flex items-center font-normal leading-sm  px-2 py-1 bg-wheat-white  text-[#494847] rounded-lg mx-1 my-2">
            Mileage
          </div>
          <div class="text-xs inline-flex items-center font-normal leading-sm  px-2 py-1 bg-wheat-white  text-[#494847] rounded-lg mx-1 my-2">
            Rating 4.0+
          </div>
          <div class="text-xs inline-flex items-center font-normal leading-sm  px-2 py-1 bg-wheat-white  text-[#494847] rounded-lg mx-1 my-2">
            Safest
          </div>
          <div class="text-xs inline-flex items-center font-normal leading-sm  px-2 py-1 bg-wheat-white  text-[#494847] rounded-lg mx-1 my-2">
            Built quality
          </div>
          <div class="text-xs inline-flex items-center font-normal leading-sm  px-2 py-1 bg-wheat-white  text-[#494847] rounded-lg mx-1 my-2">
            Affordable
          </div>
        </div>
        <div className=" col-span-6 relative bg-[#262626] rounded-2xl">
          <img src="/images/sales_automative.png" className="w-full h-full" alt="" />
          <div className=" absolute right-0 top-6 pr-6">
            <p className="text-base font-normal text-[#D9D9D9] opacity-30 font-serif uppercase">
              Turning Wheels into Win
            </p>
            <h1 className="text-2xl lg:text-4xl font-bold tracking-tight leading-none  xl:text-4xl text-wheat-white my-3">
              Automotive <p>Sales</p>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DescSection;
