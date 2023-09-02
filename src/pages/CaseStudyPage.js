import Hero from "../components/home/Hero";
import HeroHeader from "../components/casestudy/HeroHeader";
import Layout from "../components/layout/Layout";
import Introduction from "../components/casestudy/Introduction";
import ProblemFaced from "../components/casestudy/ProblemFaced";
import QuoteSection from "../components/casestudy/QuoteSection";
import DescSection from "../components/casestudy/DescSection";
import GetInTouch from "../components/casestudy/GetInTouch";

function App() {
  return (
    <>
      <head>
        <title>Flodz Branding - Case Study</title>
      </head>
      <Layout>
        <Hero>
          <HeroHeader />
        </Hero>
        <Introduction />
        <ProblemFaced />
        <QuoteSection />
        <DescSection />
        <GetInTouch />
      </Layout>
    </>
  );
}

export default App;
