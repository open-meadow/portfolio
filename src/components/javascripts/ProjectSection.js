import "../styles/ProjectSection.scss";

import portfolio from "../../db/project_database";
import { useGlobalContext } from "../../contexts/context";
import { Button, Carousel } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

// import images
import singleUrlPageImg from "../../images/tinyapp/single-url-page.png";

const ProjectSection = () => {
  // const [activeIndex, setActiveIndex] = useState(0);
  const { activeIndex, setActiveIndex } = useGlobalContext();

  console.log("activeIndex", activeIndex);
  // console.log("activeIndex: ", activeIndex);

  const handleSelect = (selectedIndex, e) => {
    setActiveIndex(selectedIndex);
  };

  const createCarouselImages = () => {};

  return (
    <div className="projects">
      <div id="image">
        <Carousel activeIndex={activeIndex} onSelect={handleSelect}>
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
      <div id="details">
        <h3>{portfolio[activeIndex].name}</h3>
        <p>{portfolio[activeIndex].description}</p>
        <Link to={`/project/${activeIndex}`}>
          <Button>More</Button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectSection;
