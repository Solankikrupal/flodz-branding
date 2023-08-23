import React from "react";

function ContactUs() {
  return (
    <section class="py-20 px-10 bg-contact-us-section">
      <div class="grid grid-cols-12">
        <div class="col-span-6 ">
          <h1 className="text-4xl font-bold tracking-tight leading-none md:text-4xl xl:text-4x text-wheat-white mb-1">
            How Can We <p> Help?</p>
          </h1>
          <p class=" font-normal text-md text-white mt-2">
            Our Experts will reach you with in 48hrs.
          </p>
        </div>

        <div class="col-span-6  items-center justify-start">
          <div class="mx-auto w-full max-w-lg">
            <form action="https://api.web3forms.com/submit">
              <input
                type="hidden"
                name="access_key"
                value="YOUR_ACCESS_KEY_HERE"
              />
              <div class="grid gap-6 sm:grid-cols-2">
                <div class="relative z-0">
                  <input
                    type="text"
                    name="name"
                    class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-md font-normal text-white opacity-30  duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                    Name
                  </label>
                </div>
                <div class="relative z-0">
                  <input
                    type="text"
                    name="email"
                    class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-md font-normal text-white opacity-30  duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                    Phone Number
                  </label>
                </div>
                <div class="relative z-0 col-span-2">
                  <input
                    type="text"
                    name="name"
                    class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-md font-normal text-white opacity-30  duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                    Email
                  </label>
                </div>
                <div class="relative z-0 col-span-2">
                  <textarea
                    name="message"
                    rows="3"
                    class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                  ></textarea>
                  <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-md font-normal text-white opacity-30 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                    Notes (optional)
                  </label>
                </div>
              </div>
              <button
                type="submit"
                class="mt-5 rounded-md border border-white px-10 py-2 text-white"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
