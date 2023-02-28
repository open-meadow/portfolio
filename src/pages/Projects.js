import "../components/styles/Projects.scss";
import portfolio from "../db/project_database";

import Navigation from "../components/javascripts/Navigation";
import ImageCarousel from "../components/javascripts/ImageCarousel";
import toolIcons from "../db/toolIcons";

import { BsGithub } from "react-icons/bs";

import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";

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
          {toolIcons[tool]}
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
        <div className="working--border--details">
          <h1 id="work">How it works</h1>
          <hr className="line--second" />
          <div id="text">{currentPortfolio.how_it_works}</div>
        </div>
        <img
          className="working--border--details--image"
          src={image}
          width={960}
          height={640}
        />
      </div>
    );
  };

  // text for programming notes
  const programming_notes = () => {
    const image = currentPortfolio.images[0];

    return (
      <div className="working--border">
        <img
          className="working--border--details--image"
          src={image}
          width={960}
          height={640}
        />
        <div className="working--border--details">
          <h1 id="work">Programming Notes</h1>
          <hr className="line--second" />
          <div id="text">{currentPortfolio.programming_notes}</div>
        </div>
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
          <div className="working--intro">
            {currentPortfolio.features}
            <ImageCarousel currentPortfolio={currentPortfolio} />
          </div>
          {how_it_works()}
          {programming_notes()}
        </div>
      </main>
      <hr />
      <footer className="github-link">
        <Link to={currentPortfolio.githubLink}>
          <Button className="github-link--separate" variant="outline-dark">
            <BsGithub />
            <span id="remove-underline">Github</span>
          </Button>
        </Link>
      </footer>
    </>
  );
};

export default Projects;
