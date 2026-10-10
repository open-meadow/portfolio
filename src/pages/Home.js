import Navigation from "../components/javascripts/Navigation";
import Intro from "../components/javascripts/Intro";

import "../components/styles/Home.scss";
import { Disclaimer } from "../components/javascripts/Disclaimer.tsx";

const Home = () => {
  return (
    <>
      <Navigation />
      <Intro />
      {/* <TestBlog/> */}
      {/* <div className="line">{"   "}</div>
      <h1 className="project--title">Projects</h1> */}
      {/* <ProjectSection /> */}
      {/* <About /> */}
      {/* <hr/> */}
      {/* <p id="disclaimer">This Website is best viewed on Desktop</p> */}
      {/* <p id="disclaimer">This Website is being rebuilt</p> */}
      <Disclaimer/>
    </>
  );
};

export default Home;
