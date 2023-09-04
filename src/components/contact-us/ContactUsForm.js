import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function ContactUsForm() {
  const [formData, setFormData] = useState({
    name: "",
    company_name: "",
    phone: "",
    email: "",
    message: "",
    options: [], // Store selected options in an array
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      // Handle checkboxes separately
      setFormData((prevData) => ({
        ...prevData,
        options: checked
          ? [...prevData.options, value] // Add the value if checked
          : prevData.options.filter((option) => option !== value), // Remove the value if unchecked
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
        

    const templateParams = {
      from_name: formData.name,
      from_company_name: formData.company_name,
      from_phone: formData.phone,
      from_email: formData.email,
      message: formData.message,
      selected_options: formData.options.join(", "), // Join selected options into a string
    };

    emailjs
      .send(
        "service_omfdyiq", // Replace with your Email.js service ID
        "template_yhsnzuf", // Replace with your Email.js template ID
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
    <section className="pt-8 md:pt-16 px-5 md:px-10 pb-12 md:pb-24">
      <h1 className="text-2xl lg:text-4xl font-bold tracking-tight leading-none xl:text-4xl text-custom-gradient-white ">
        Tell Us About Your Requirements
      </h1>
      <p className="lg:text-xl font-light text-wheat-white antialiased opacity-60">
        Drop an enquiry below and we will get back to you within{" "}
        <b className=" font-semibold opacity-70 text-wheat-white">24 hours!</b>
      </p>
      <div className="lg:mx-auto w-full py-11">
        <form onSubmit={handleSubmit}>
          <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="relative z-0 col-span-2">
              <div className="flex flex-wrap gap-4">
                <div>
                  <input
                    type="checkbox"
                    value="branding"
                    id="branding"
                    className="peer hidden"
                    onChange={handleInputChange}
                  />
                  <label
                    htmlFor="branding"
                    className="select-none cursor-pointer rounded-lg border-2 border-[#ffffff0c] bg-[#ffffff0a]
   py-1 px-7 font-bold text-gray-200 transition-colors duration-200 ease-in-out  peer-checked:border-[#8E64FF]"
                  >
                    Branding
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    value="e-Commerce"
                    id="e-Commerce"
                    className="peer hidden"
                    onChange={handleInputChange}
                  />
                  <label
                    htmlFor="e-Commerce"
                    className="select-none cursor-pointer rounded-lg border-2 border-[#ffffff0c] bg-[#ffffff0a]
   py-1 px-7 font-bold text-gray-200 transition-colors duration-200 ease-in-out  peer-checked:border-[#8E64FF]"
                  >
                    E-Commerce
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    value="ui-ux-design"
                    id="ui-ux-design"
                    className="peer hidden"
                    onChange={handleInputChange}
                  />
                  <label
                    htmlFor="ui-ux-design"
                    className="select-none cursor-pointer rounded-lg border-2 border-[#ffffff0c] bg-[#ffffff0a]
   py-1 px-7 font-bold text-gray-200 transition-colors duration-200 ease-in-out  peer-checked:border-[#8E64FF]"
                  >
                    UI UX Design{" "}
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    value="development"
                    id="development"
                    className="peer hidden"
                    onChange={handleInputChange}
                  />
                  <label
                    htmlFor="development"
                    className="select-none cursor-pointer rounded-lg border-2 border-[#ffffff0c] bg-[#ffffff0a]
   py-1 px-7 font-bold text-gray-200 transition-colors duration-200 ease-in-out  peer-checked:border-[#8E64FF]"
                  >
                    Development
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    value="other"
                    id="other"
                    className="peer hidden"
                    onChange={handleInputChange}
                  />
                  <label
                    htmlFor="other"
                    className="select-none cursor-pointer rounded-lg border-2 border-[#ffffff0c] bg-[#ffffff0a]
   py-1 px-7 font-bold text-gray-200 transition-colors duration-200 ease-in-out  peer-checked:border-[#8E64FF]"
                  >
                    Other
                  </label>
                </div>
              </div>
            </div>
            <div className="relative z-0">
              <input
                type="text"
                name="name"
                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-white focus:white focus:outline-none focus:ring-0"
                placeholder=" "
                value={formData.name}
                onChange={handleInputChange}
              />
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-md font-normal text-white opacity-70  duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:white peer-focus:dark:white peer-focus:opacity-50">
                Name
              </label>
            </div>
            <div className="relative z-0">
              <input
                type="text"
                name="company_name"
                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-white focus:white focus:outline-none focus:ring-0"
                placeholder=" "
                value={formData.company_name}
                onChange={handleInputChange}
              />
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-md font-normal text-white opacity-70  duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:white peer-focus:dark:white peer-focus:opacity-50">
                Company Name
              </label>
            </div>
            <div className="relative z-0">
              <input
                type="text"
                name="phone"
                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-white focus:white focus:outline-none focus:ring-0"
                placeholder=" "
                value={formData.phone}
                onChange={handleInputChange}
              />
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-md font-normal text-white opacity-70  duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:white peer-focus:dark:white peer-focus:opacity-50">
                Phone Number
              </label>
            </div>
            <div className="relative z-0 ">
              <input
                type="email"
                name="email"
                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-white focus:white focus:outline-none focus:ring-0"
                placeholder=" "
                value={formData.email}
                onChange={handleInputChange}
              />
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-md font-normal text-white opacity-70  duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:white peer-focus:dark:white peer-focus:opacity-50">
                Email
              </label>
            </div>
            <div className="relative z-0 col-span-2">
              <textarea
                name="message"
                rows="3"
                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-white focus:white focus:outline-none focus:ring-0"
                placeholder=" "
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-md font-normal text-white opacity-70 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:white peer-focus:dark:white peer-focus:opacity-50">
                Tell us about the Project
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="mt-5 rounded-md px-10 py-2 text-white bg-btn-purple hover:bg-[#6633EE] transition-all duration-150 ease-in"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactUsForm;
