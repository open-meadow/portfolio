import "../components/styles/Projects.scss";
import portfolio from "../db/project_database";

import Navigation from "../components/javascripts/Navigation";
import ImageCarousel from "../components/javascripts/ImageCarousel";

import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Projects = () => {
  const { id } = useParams();
  const currentPortfolio = portfolio[id];
  console.log("currentPortfolio: ", currentPortfolio);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // show tools buttons
  const tools = () => {
    const toolButtons = currentPortfolio.tools.map((tool) => {
      return (
        <div className="tools--single">
          <img src="https://via.placeholder.com/30x30" />
          <span>{tool}</span>
        </div>
      );
    });

    return <div className="tools">{toolButtons}</div>;
  };

  // text for how it works section
  const how_it_works = () => {
    const image = currentPortfolio.images[0];

    return (
      <div className="working--border">
        <div className="working--details">
          <h1 id="work">How it works</h1>
          <hr className="line--second" />
          <div id="text">{currentPortfolio.how_it_works}</div>
        </div>
        <img src={image} />
      </div>
    );
  };

  // text for programming notes
  const programming_notes = () => {
    const image = currentPortfolio.images[0];

    return (
      <div className="working--border">
        <div className="working--details">
          <h1 id="work">Programming Notes</h1>
          <hr className="line--second" />
          <div id="text">{currentPortfolio.programming_notes}</div>
        </div>
        <img src={image} />
      </div>
    );
  };

  return (
    <>
      <Navigation />
      <main className="main-section">
        <h1 id="project-title">{currentPortfolio.name}</h1>
        {tools()}
        <hr className="line--first" />

        <div className="working">
          {how_it_works()}
          {programming_notes()}
        </div>

        <ImageCarousel currentPortfolio={currentPortfolio}/>
      </main>
      <hr />
    </>
  );
};

export default Projects;
