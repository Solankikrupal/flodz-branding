import AdSlider from "../components/home/AdSlider";
import CaseStudy from "../components/home/CaseStudy";
import ChooseUs from "../components/home/ChooseUs";
/* import ContactUs from "../components/home/ContactUs";
import Footer from "../components/home/Footer";
import HeaderSlider from "../components/home/HeaderSlider"; */
import Hero from "../components/home/Hero";
import HeroHeader from "../components/home/HeroHeader";
import Process from "../components/home/Process";
import Services from "../components/home/Services";
import Layout from "../components/layout/Layout";

function App() {
  return (
    <>
      <Layout>
        <Hero>
          <HeroHeader />
        </Hero>
        <ChooseUs />
        <Process />
        <Services />
        <CaseStudy />
        <AdSlider />
      </Layout>
    </>
  );
}

export default App;
