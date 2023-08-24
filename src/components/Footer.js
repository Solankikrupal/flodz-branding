import React from "react";

function Footer() {
  return (
    /* <!-- component --> */
    <footer className="px-5 md:px-10 pt-10 pb-4 custom-backgrond-footer">
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
        <div class="sm:col-span-2">
          <img src="/svg/footer-logo.svg" alt="" />

          <p class=" font-normal text-md text-white mt-6 max-w-[250px]">
            Empower Your Brand's Digital Journey with Our Expertise
          </p>
        </div>

        <div>
          <p class="text-base font-normal text-[#D9D9D9] opacity-30 font-serif mt-2">
            Quick Links
          </p>

          <div class="flex flex-col items-start mt-5 space-y-2">
            <a
              href="/"
              class="text-white text-sm transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
            >
              Privacy Policy
            </a>
            <a
              href="/"
              class="text-white text-sm transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
            >
              About
            </a>
            <a
              href="/"
              class="text-white text-sm transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
            >
              Contact
            </a>
          </div>
        </div>

        <div>
          <p class="text-base font-normal text-[#D9D9D9] opacity-30 font-serif mt-2">
            Contact
          </p>

          <div class="flex flex-col items-start mt-5 space-y-2">
            <a
              href="/"
              class="text-white flex text-sm transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
            >
              <img src="/svg/location.svg" className="mr-2" alt="" />
              Seestrasse 21, Zurich
            </a>
            <a
              href="/"
              class="text-white flex text-sm transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
            >
              <img src="/svg/mail.svg" className="mr-2" alt="" />
              biagiotti@qodeinteractive.com
            </a>
            <a
              href="/"
              class="text-white flex text-sm transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
            >
              <img src="/svg/phone.svg" className="mr-2" alt="" />+ 99 411 725
              39 12
            </a>
          </div>
        </div>
      </div>

      <hr class=" border-white mt-10 mb-5 opacity-40" />

      <div class="flex items-center justify-center">
        <p className=" text-xs text-white font-normal opacity-50">
          @2023 Flodz. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
