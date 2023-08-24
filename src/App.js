import Hero from "./components/Hero";
import "./App.css";
import ChooseUs from "./components/ChooseUs";
import Process from "./components/Process";
import Services from "./components/Services";
import CaseStudy from "./components/CaseStudy";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import AdSlider from "./components/AdSlider";
import HeaderSlider from "./components/HeaderSlider";

function App() {
  return (
    <div className="bg-black-grey">
      <HeaderSlider />
      <Hero />
      <ChooseUs />
      <Process />
      <Services />
      <CaseStudy />
      <AdSlider />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
