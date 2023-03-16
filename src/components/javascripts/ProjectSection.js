import "../styles/ProjectSection.scss";

import portfolio from "../../db/project_database";

import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BsGithub} from "react-icons/bs";

const ProjectSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const carouselItems = () => {
    const items = Object.keys(portfolio).map((portfolioItem) => {
      return (
        <div className="project--slider--item">
          <div className="project--slider--item--image-section">
            <img
              src={portfolio[portfolioItem].images[0]}
              className="project--slider--item--image-section--image"
              alt={portfolio[portfolioItem].name}
            />
          </div>
          <div className="project--slider--item--details">
            <div className="project--slider--item--details--text">
            <h2 className="project--slider--item--details--text--title">{portfolio[portfolioItem].name}</h2>
              <p>{portfolio[portfolioItem].description}</p>
            </div>
            <div className="project--slider--item--details--buttons">
              <Link to={`/project/${portfolioItem}`} target="_blank">
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
        </div>
      );
    });

    return items;
  };

  return (
    <div className="project">
      <Slider {...settings} className="project--slider">
        {carouselItems()}
      </Slider>
    </div>
  );
};

export default ProjectSection;
