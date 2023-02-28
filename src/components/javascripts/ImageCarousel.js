import Carousel from "react-bootstrap/Carousel";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

const ImageCarousel = (props) => {
  const { currentPortfolio } = props;

  const carousel_images = () => {
    const imageList = currentPortfolio.images.map((image, index) => {
      return (
        <Carousel.Item>
          <img
            src={currentPortfolio.images[index]}
            width={960}
            height={640}
          />
        </Carousel.Item>
      );
    });

    return imageList;
  };

  return (
    <Carousel
      className="image-carousel"
      variant="dark"
    >
      {carousel_images()}
    </Carousel>
  );
};

export default ImageCarousel;
