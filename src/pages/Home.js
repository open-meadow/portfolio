import Navigation from "../components/javascripts/Navigation";
import Intro from "../components/javascripts/Intro";
import ProjectSection from "../components/javascripts/ProjectSection";
import About from "../components/javascripts/About";

import "../components/styles/Home.scss";
import ProjectSection_new from "../components/javascripts/ProjectSection_new";

const Home = () => {
  return (
    <>
      <Navigation />
      <Intro />
      <div className="line">{"   "}</div>
      {/* <ProjectSection /> */}
      <ProjectSection_new />
      <About />
    </>
  );
};

export default Home;
