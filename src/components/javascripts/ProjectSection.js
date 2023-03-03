import "../styles/ProjectSection.scss";

import portfolio from "../../db/project_database";
import { useGlobalContext } from "../../contexts/context";
import { Button, Carousel } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

// import images
import singleUrlPageImg from "../../images/tinyapp/single-url-page.png";
import { BsGithub } from "react-icons/bs";

const ProjectSection = () => {
  // const [activeIndex, setActiveIndex] = useState(0);
  const { activeIndex, setActiveIndex } = useGlobalContext();

  console.log("activeIndex", activeIndex);
  // console.log("activeIndex: ", activeIndex);

  const handleSelect = (selectedIndex, e) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <div className="projects">
      <div id="image">
        <Carousel
          activeIndex={activeIndex}
          onSelect={handleSelect}
          variant="dark"
        >
          <Carousel.Item>
            <img src={portfolio[0].images[0]} className="project-img" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={portfolio[1].images[0]} className="project-img" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={portfolio[2].images[0]} className="project-img" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={portfolio[3].images[0]} className="project-img" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={portfolio[4].images[0]} className="project-img" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={portfolio[5].images[0]} className="project-img" />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="details">
        <div className="details--info">
          <h2>{portfolio[activeIndex].name}</h2>
          <p>{portfolio[activeIndex].description}</p>
        </div>
        <div className="details--buttons">
          <Link to={`/project/${activeIndex}`}>
            <Button size="lg">Info</Button>
          </Link>
          <Button className="github-link--separate" variant="dark" size="lg">
            <BsGithub />
            <span id="remove-underline">Github</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
