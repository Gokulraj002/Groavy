import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ori from "../../../images/ori.png"
import Entrance from "./ElegantImages/ele-two.png";
import Clubhouse from "../../../images/ori1.png";
// import Park from "./ElegantImages/club.png";
import FullViewClubhouse from "./ElegantImages/ele-three.png";
import SwimmingPool from "./ElegantImages/ele-five.png";
import Plots from "./ElegantImages/ele-six.png";
import Solarplan from "./ElegantImages/ele-seven.png";
import Trees from "./ElegantImages/ele-four.png";
import Layout from "./ElegantImages/ele-one.png";
import "./css/slider.css";
// import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const sliderImages = [
  Layout,
  ori,
  Entrance,
  Clubhouse,
  FullViewClubhouse,
  Plots,
  Trees,
  SwimmingPool,
  Solarplan,



];

const SliderComponent = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleThumbnailClick = (selectedIndex) => {
    setSelectedImageIndex(selectedIndex);
  };

  const handlePrevClick = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? sliderImages.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <h2 className="font11  text-center my-4 " style={{ color: "#3A6958" }}>
        Explore Our FarmLand
      </h2>
      <div className=" pb-5">
        {/* <div className='location-zoom  '>
      <Zoom>
              <img src={house} alt="Explore-house" className="w-100" 
              
              />

        </Zoom>
      </div> */}
        <div className="container my-4">
          <Carousel
            indicators={false}
            prevIcon={<CustomPrevIcon onClick={handlePrevClick} />}
            nextIcon={<CustomNextIcon onClick={handleNextClick} />}
            activeIndex={selectedImageIndex}
          >
            {sliderImages.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={image}
                  width={'100%'} height={'auto'}
                  alt={`Elegant Orchards ${index + 1}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
          <div className="d-flex justify-content-center mt-3">
            {sliderImages.map((image, index) => (
              <img
                key={index}
                src={image}
                width={'100%'} height={'auto'}
                className={`small-image mx-1 ${
                  index === selectedImageIndex ? "selected" : ""
                }`}
                alt={`Elegant Orchards ${index}`}
                onClick={() => handleThumbnailClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const CustomPrevIcon = ({ onClick }) => (
  <FaArrowLeft
    className="custom-carousel-icon bg-white rounded-circle text-dark fs-2 p-2"
    onClick={onClick}
  />
);

const CustomNextIcon = ({ onClick }) => (
  <FaArrowRight
    className="custom-carousel-icon bg-white rounded-circle text-dark fs-2 p-2"
    onClick={onClick}
  />
);

export default SliderComponent;
