import React from "react";
import NavBar from "../layout/NavBar";

function Hero({ children }) {
  return (
    <div className="xl:min-h-screen min-w-full  flex flex-col justify-center  px-5 lg:px-10 pb-10 ">
      <div className="relative w-full mx-auto">
        <div className="relative  custom-backgrond shadow-lg rounded-3xl xl:min-h-screen">
          <div className="px-2 lg:px-6 3xl:px-20 pt-6 z-30 relative">
            {/* <!-- nav --> */}
            <NavBar />
            {/* <!-- /nav --> */}

            {/* <!-- hero section --> */}
            {children}
            {/* <!-- /hero section --> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
