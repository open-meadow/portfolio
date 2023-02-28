import Carousel from "react-bootstrap/Carousel";
import { CiCircleChevLeft } from "react-icons/ci";

const ImageCarousel = (props) => {
  const { currentPortfolio } = props;

  const carousel_images = () => {
    const imageList = currentPortfolio.images.map((image, index) => {
      return (
        <Carousel.Item>
          <img
            className="--image"
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
    <div
      className="image-carousel"
      prevIcon={
        <CiCircleChevLeft
          span
          aria-hidden="true"
          className="carousel-control-prev-icon"
        />
      }
    >
      <Carousel variant="dark">{carousel_images()}</Carousel>
    </div>
  );
};

export default ImageCarousel;
