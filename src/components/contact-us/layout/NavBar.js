import React from "react";
import { Link } from "react-scroll";

function NavBar() {
  return (
    <div className="flex items-center justify-between " id="home">
      <>
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center text-3xl font-bold text-true-gray-800">
            <img alt="" src="svg/Logo.svg"></img>
          </div>
        </div>
        <div className="hidden md:flex items-center justify-center gap-3">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70} // Adjust offset as needed
            duration={600}
            className="flex items-center justify-center  text-base  text-wheat-white font-normal tracking-tight transition duration-150 ease-in-out p-2 nav-hover-btn cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={-70} // Adjust offset as needed
            duration={600}
            className="flex items-center justify-center  text-base text-wheat-white  font-normal tracking-tight transition duration-150 ease-in-out p-2 nav-hover-btn cursor-pointer"
          >
            Services
          </Link>
          <Link
            to="caseStudy"
            spy={true}
            smooth={true}
            offset={-70} // Adjust offset as needed
            duration={600}
            className="flex items-center justify-center  text-base text-wheat-white  font-normal tracking-tight transition duration-150 ease-in-out p-2 nav-hover-btn cursor-pointer"
          >
            CaseStudy
          </Link>
          <Link
            to="contact-us"
            spy={true}
            smooth={true}
            offset={-70} // Adjust offset as needed
            duration={600}
            className="flex items-center justify-center  text-base text-wheat-white  font-normal tracking-tight transition duration-150 ease-in-out p-2 nav-hover-btn cursor-pointer"
          >
            <button className="px-6 py-3 rounded-lg font-normal border text-sm  text-white border-gra border-gradient-to-r from-btn-purple to-btn-secondary nav-hover-primary-btn">
              Get in Touch
            </button>
          </Link>
        </div>
      </>
    </div>
  );
}

export default NavBar;
