import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    phone:"",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_phone: formData.phone,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_omfdyiq", // Replace with your Email.js service ID
        "template_ttviezp", // Replace with your Email.js template ID
        templateParams,
        "hT0bF5ws7woyvTtiQ" // Replace with your Email.js user ID
      )
      .then((response) => {
        console.log("Email sent successfully", response);
      })
      .catch((error) => {
        console.error("Error sending email", error);
      });
  };
  return (
    <section
      class="pt-8 px-5 lg:pt-16 lg:px-10 pb-12 lg:pb-24 bg-contact-us-section "
    >
      <div class="grid lg:grid-cols-12">
        <div class="col-span-6 pb-4 lg:pb-0">
          <h1 className="text-4xl font-bold tracking-tight leading-none xl:text-4xl text-wheat-white mb-1">
            How Can We <p> Help?</p>
          </h1>
          <p class=" font-normal text-md text-white mt-2">
            Our Experts will reach you with in 48hrs.
          </p>
        </div>

        <div class="col-span-6  items-center justify-start">
          <div class="lg:mx-auto w-full max-w-lg">
            <form onSubmit={handleSubmit}>
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
                    class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-white focus:white focus:outline-none focus:ring-0"
                    placeholder=" "
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-md font-normal text-white opacity-30  duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:white peer-focus:dark:white">
                    Name
                  </label>
                </div>
                <div class="relative z-0">
                  <input
                    type="text"
                    name="phone"
                    class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-white focus:white focus:outline-none focus:ring-0"
                    placeholder=" "
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                  <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-md font-normal text-white opacity-30  duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:white peer-focus:dark:white">
                    Phone Number
                  </label>
                </div>
                <div class="relative z-0 col-span-2">
                  <input
                    type="email"
                    name="email"
                    class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-white focus:white focus:outline-none focus:ring-0"
                    placeholder=" "
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-md font-normal text-white opacity-30  duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:white peer-focus:dark:white">
                    Email
                  </label>
                </div>
                <div class="relative z-0 col-span-2">
                  <textarea
                    name="message"
                    rows="3"
                    class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-white focus:white focus:outline-none focus:ring-0"
                    placeholder=" "
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                  <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-md font-normal text-white opacity-30 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:white peer-focus:dark:white">
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
