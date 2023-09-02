import Hero from "../components/home/Hero";
import HeroHeader from "../components/casestudy/HeroHeader";
import Layout from "../components/layout/Layout";
import Introduction from "../components/casestudy/Introduction";
import ProblemFaced from "../components/casestudy/ProblemFaced";
import QuoteSection from "../components/casestudy/QuoteSection";
import DescSection from "../components/casestudy/DescSection";
import GetInTouch from "../components/casestudy/GetInTouch";
import ProjectMidBanner from "../components/casestudy/ProjectMidBanner";

function CaseStudyPage() {
  return (
    <>
      <Layout>
        <Hero>
          <HeroHeader />
        </Hero>
        <Introduction />
        <ProblemFaced />
        <QuoteSection />
        <ProjectMidBanner />
        <DescSection />
        <GetInTouch />
      </Layout>
    </>
  );
}

export default CaseStudyPage;
