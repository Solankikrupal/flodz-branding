import React from "react";
import HeaderSlider from "../home/HeaderSlider";
import ContactUs from "../home/ContactUs";
import Footer from "./Footer";


function Layout({ children }) {
  return (
    <div>
      <HeaderSlider />
      {children}
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Layout;
