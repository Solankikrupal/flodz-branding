import Hero from "./components/Hero";
import "./App.css";
import ChooseUs from "./components/ChooseUs";
import Process from "./components/Process";
import Services from "./components/Services";
import CaseStudy from "./components/CaseStudy";
/* import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer"; */

function App() {
  return (
    <div className="bg-black-grey">
      <Hero />
      <ChooseUs />
      <Process />
      <Services />
      <CaseStudy />
      {/*  <ContactUs />
      <Footer /> */}
    </div>
  );
}

export default App;
