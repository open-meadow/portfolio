import "../styles/ProjectSection.scss";

import portfolio from "../../db/project_database";
import { useGlobalContext } from "../../contexts/context";
import { Button, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import images
import {
  BsGithub,
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const ProjectSection = () => {
  const { activeIndex, setActiveIndex } = useGlobalContext();

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    prevArrow: <BsFillArrowLeftCircleFill />,
    nextArrow: <BsFillArrowRightCircleFill />,
    centerMode: true,
    centerPadding: "60px",
    swipeToSlide: true,
  };

  const carouselItems = () => {
    const items = Object.keys(portfolio).map((portfolioItem) => {
      return (
        <Carousel.Item>
          <div className="image">
            <img
              src={portfolio[portfolioItem].images[0]}
              className="project-img"
              alt={portfolio[portfolioItem].name}
            />
          </div>
          <div className="details">
            <div className="details--info">
              <h2>{portfolio[portfolioItem].name}</h2>
              <p>{portfolio[portfolioItem].description}</p>
            </div>
            <div className="details--buttons">
              <Link to={`/project/${0}`}>
                <Button size="lg">Info</Button>
              </Link>
              <Button
                className="github-link--separate"
                variant="dark"
                size="lg"
                href={portfolio[portfolioItem].githubLink}
              >
                <BsGithub />
                <span id="remove-underline">Github</span>
              </Button>
            </div>
          </div>
        </Carousel.Item>
      );
    });

    return items;
  };

  return (
    <div className="projects">
      <Carousel
        activeIndex={activeIndex}
        onSelect={handleSelect}
        variant="dark"
      >
        {carouselItems()}
      </Carousel>
    </div>
  );
};

export default ProjectSection;
