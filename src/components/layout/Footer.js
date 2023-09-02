import React from "react";

function Footer() {
  return (
    /* <!-- component --> */
    <footer className="px-5 md:px-10 pt-10 pb-4 custom-backgrond-footer">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <img src="/svg/footer-logo.svg" alt="" />

          <p className=" font-normal text-md text-white mt-6 max-w-[250px]">
            Empower Your Brand's Digital Journey with Our Expertise
          </p>
        </div>

        <div>
          <p className="text-base font-normal text-[#D9D9D9] opacity-30 font-serif mt-2">
            Quick Links
          </p>

          <div className="flex flex-col items-start mt-5 space-y-2">
            <a
              href="/"
              className="text-white text-sm transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
            >
              Privacy Policy
            </a>
            <a
              href="/"
              className="text-white text-sm transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
            >
              About
            </a>
            <a
              href="/"
              className="text-white text-sm transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
            >
              Contact
            </a>
          </div>
        </div>

        <div>
          <p className="text-base font-normal text-[#D9D9D9] opacity-30 font-serif mt-2">
            Contact
          </p>

          <div className="flex flex-col items-start mt-5 space-y-2">
            <a
              href="/"
              className="text-white flex text-sm transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500 font-serif-custom"
            >
              <img src="/svg/location.svg" className="mr-2" alt="" />
              18896 70 Avenue, Surrey, BC Canada V4N 5K3
            </a>
            <a
              href="/"
              className="text-white flex text-sm transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500 font-serif-custom"
            >
              <img src="/svg/phone.svg" className="mr-2" alt="" />
              6047685109
            </a>
            <a
              href="/"
              className="text-white flex text-sm transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500 font-serif-custom"
            >
              <img src="/svg/phone.svg" className="mr-2" alt="" />
              2364561132
            </a>
          </div>
        </div>
      </div>

      <hr className=" border-white mt-10 mb-5 opacity-40" />

      <div className="flex items-center justify-center">
        <p className=" text-xs text-white font-normal opacity-50">
          @2023 Flodz. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
