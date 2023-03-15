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
      <h2> Single Item</h2>
      <Slider {...settings}>
        <div className="projects--item">
          <img
            src={portfolio[0].images[0]}
            className="projects--item--img"
            alt={portfolio[0].name}
          />
          <div className="projects--item--details">
            <div className="projects--item--details--info">
              <h2>{portfolio[0].name}</h2>
              <p>{portfolio[0].description}</p>
            </div>
            <div className="projects--item--details--buttons">
              <Link to={`/project/${0}`}>
                <Button size="lg">Info</Button>
              </Link>
              <Button
                className="github-link--separate"
                variant="dark"
                size="lg"
                href={portfolio[0].githubLink}
              >
                <BsGithub />
                <span id="remove-underline">Github</span>
              </Button>
            </div>
          </div>
        </div>

        <div className="projects--item">
          <img
            src={portfolio[0].images[0]}
            className="projects--item--img"
            alt={portfolio[0].name}
          />
          <div className="projects--item--details">
            <div className="projects--item--details--info">
              <h2>{portfolio[0].name}</h2>
              <p>{portfolio[0].description}</p>
            </div>
            <div className="projects--item--details--buttons">
              <Link to={`/project/${0}`}>
                <Button size="lg">Info</Button>
              </Link>
              <Button
                className="github-link--separate"
                variant="dark"
                size="lg"
                href={portfolio[0].githubLink}
              >
                <BsGithub />
                <span id="remove-underline">Github</span>
              </Button>
            </div>
          </div>
        </div>

        <div className="projects--item">
          <img
            src={portfolio[0].images[0]}
            className="projects--item--img"
            alt={portfolio[0].name}
          />
          <div className="projects--item--details">
            <div className="projects--item--details--info">
              <h2>{portfolio[0].name}</h2>
              <p>{portfolio[0].description}</p>
            </div>
            <div className="projects--item--details--buttons">
              <Link to={`/project/${0}`}>
                <Button size="lg">Info</Button>
              </Link>
              <Button
                className="github-link--separate"
                variant="dark"
                size="lg"
                href={portfolio[0].githubLink}
              >
                <BsGithub />
                <span id="remove-underline">Github</span>
              </Button>
            </div>
          </div>
        </div>

        <div className="projects--item">
          <img
            src={portfolio[0].images[0]}
            className="projects--item--img"
            alt={portfolio[0].name}
          />
          <div className="projects--item--details">
            <div className="projects--item--details--info">
              <h2>{portfolio[0].name}</h2>
              <p>{portfolio[0].description}</p>
            </div>
            <div className="projects--item--details--buttons">
              <Link to={`/project/${0}`}>
                <Button size="lg">Info</Button>
              </Link>
              <Button
                className="github-link--separate"
                variant="dark"
                size="lg"
                href={portfolio[0].githubLink}
              >
                <BsGithub />
                <span id="remove-underline">Github</span>
              </Button>
            </div>
          </div>
        </div>

        <div className="projects--item">
          <img
            src={portfolio[0].images[0]}
            className="projects--item--img"
            alt={portfolio[0].name}
          />
          <div className="projects--item--details">
            <div className="projects--item--details--info">
              <h2>{portfolio[0].name}</h2>
              <p>{portfolio[0].description}</p>
            </div>
            <div className="projects--item--details--buttons">
              <Link to={`/project/${0}`}>
                <Button size="lg">Info</Button>
              </Link>
              <Button
                className="github-link--separate"
                variant="dark"
                size="lg"
                href={portfolio[0].githubLink}
              >
                <BsGithub />
                <span id="remove-underline">Github</span>
              </Button>
            </div>
          </div>
        </div>

        <div className="projects--item">
          <img
            src={portfolio[0].images[0]}
            className="projects--item--img"
            alt={portfolio[0].name}
          />
          <div className="projects--item--details">
            <div className="projects--item--details--info">
              <h2>{portfolio[0].name}</h2>
              <p>{portfolio[0].description}</p>
            </div>
            <div className="projects--item--details--buttons">
              <Link to={`/project/${0}`}>
                <Button size="lg">Info</Button>
              </Link>
              <Button
                className="github-link--separate"
                variant="dark"
                size="lg"
                href={portfolio[0].githubLink}
              >
                <BsGithub />
                <span id="remove-underline">Github</span>
              </Button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default ProjectSection;

// DRAFT 2!!!!!!!!!!!!!!!

// .projects {
//   display: flex;
//   flex-direction: column;
//   margin: 0 1em;

//   &--item {
//     background-color: #ccc;
//     padding: 1em;
//     // border: 3px solid red;
//     margin: 1em;
//     opacity: 0.5;
//     transition: opacity 0.5s ease-in-out;

//     &--img {
//       max-width: 720px;
//       max-height: 405px;
//       padding-bottom: 1em;
//       padding-right: 7em;
//     }

//     &--item--details {
//       display: flex;
//       flex-direction: column;
//       align-items: center;
//       transition: 1s ease-in-out;
//       height: 100%;
//     }

//     &--item--details--buttons {
//       display: flex;
//       justify-content: space-evenly;
//       width: 60%;
//     }
//   }

//   .project--item.slick-center {
//     opacity: 1;
//   }

//   .slick-prev,
//   .slick-next {
//     border: 3px solid red;
//     color: black;
//     width: auto;
//     height: 10%;
//     z-index: +3;
//   }
// }
