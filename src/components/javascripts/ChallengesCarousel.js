import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../styles/ChallengesCarousel.scss";

const ChallengesCarousel = (props) => {
  const { currentPortfolio } = props

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const challenges = () => {
    const challengesDiv = currentPortfolio.challenges.map((challenge) => {
      return <div className="challenges--single">{challenge}</div>;
    });

    return(challengesDiv);
  };

  return (
    <div className="challenges">
      <h2> Single Item</h2>
      <Slider {...settings}>
        {challenges()}
      </Slider>
    </div>
  );
};

export default ChallengesCarousel;
