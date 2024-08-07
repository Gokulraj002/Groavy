import React, { useState } from "react";
import "./GallerySlider.css";
import { Modal, Button, Carousel } from "react-bootstrap";
import ori from "../../images/ori1.png";
import ori1 from "../../images/ori.png";
import ori2 from "../../Component/Projects/Eligent/ElegantImages/ele-two.png";
import ori3 from "../../Component/Projects/Eligent/ElegantImages/ele-three.png";
import ori4 from "../../Component/Projects/Eligent/ElegantImages/ele-four.png";
import ori5 from "../../Component/Projects/Eligent/ElegantImages/ele-five.png";
import ori6 from "../../Component/Projects/Eligent/ElegantImages/ele-six.png";
import ori7 from "../../Component/Projects/Eligent/ElegantImages/ele-seven.png";
import FullView from "../../Component/Projects/Eligent/ElegantImages/full-change.png";
import Entrance from "../../Component/Projects/Eligent/ElegantImages/entrance.png";
import clubhouse from "../../Component/Projects/Eligent/ElegantImages/club.png";
import ParkView from "../../Component/Projects/Eligent/ElegantImages/park-change.png";
import Park from "../../Component/Projects/Eligent/ElegantImages/swimm.png";
import SwimmingPool from "../../Component/Projects/Eligent/ElegantImages/swimming.png";
import RockClimbing from "../../Component/Projects/Eligent/ElegantImages/rock-change.png";

const sliderImageUrl = [
  { url: ori1, alt: "Elegant-Full-View", width: 350, height: 250 },
  { url: ori2, alt: "Elegant-Road-View", width: 350, height: 250 },
  { url: ori, alt: "Elegant-clubhouse", width: 350, height: 250 },
  { url: ori3, alt: "Full-view-clubhouse", width: 350, height: 250 },
  { url: ori4, alt: "Elegant-Plots", width: 350, height: 250 },
  { url: ori6, alt: "Elegant-Park", width: 350, height: 250 },
  { url: ori5, alt: "ELegant-Swimming-Pool", width: 350, height: 250 },
  { url: ori7, alt: "ELegant-Solar", width: 350, height: 250 },
  { url: ori1, alt: "Elegant-Full-View", width: 350, height: 250 },
  { url: ori2, alt: "Elegant-Road-View", width: 350, height: 250 },
];

const sliderImageUrl2 = [
  { url: FullView, alt: "Elegant-3DLayout", width: 350, height: 250 },
  { url: Entrance, alt: "Elegant-3DEntrance", width: 350, height: 250 },
  { url: clubhouse, alt: "clubhouse design3D", width: 350, height: 250 },
  { url: ParkView, alt: "park design3D", width: 350, height: 250 },
  { url: Park, alt: "Park-waiting-place", width: 350, height: 250 },
  { url: SwimmingPool, alt: "Swimming pool", width: 350, height: 250 },
  { url: RockClimbing, alt: "Rock Climbing", width: 350, height: 250 },
];

const Slider = () => {
  const [zoomedImage, setZoomedImage] = useState(null);
  const [imageSet, setImageSet] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClose = () => {
    setZoomedImage(null);
    setImageSet([]);
    setActiveIndex(0);
  };

  const handleZoomIn = (image, imageSet) => {
    setZoomedImage(image);
    setImageSet(imageSet);
    setActiveIndex(imageSet.findIndex(img => img.url === image.url));
  };

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <div className="slider-container">
      <h2 className="font1 text-center mt-2 mb-4" style={{ color: "#3A6958" }}>
        Project Gallery
      </h2>
      {/* eslint-disable-next-line jsx-a11y/no-distracting-elements */}
      <marquee behavior="scroll" direction="left" scrollamount="9">
        <div className="marquee-container">
          {sliderImageUrl.map((image, index) => (
            <img
              style={{ cursor: "pointer" }}
              key={index}
              className="marquee-image mx-2"
              src={image.url}
              title="Click To See Full Image"
              alt={image.alt}
              loading="lazy"
              width={image.width}
              height={image.height}
              onClick={() => handleZoomIn(image, sliderImageUrl)}
            />
          ))}
        </div>
      </marquee>
      {/* eslint-disable-next-line jsx-a11y/no-distracting-elements */}
      <marquee behavior="scroll" direction="right" scrollamount="10">
        <div className="marquee-container">
          {sliderImageUrl2.map((image, index) => (
            <img
              style={{ cursor: "pointer" }}
              key={index}
              className="marquee-image mx-2"
              src={image.url}
              title="Click The Image to Full view"
              alt={image.alt}
              loading="lazy"
              width={image.width}
              height={image.height}
              onClick={() => handleZoomIn(image, sliderImageUrl2)}
            />
          ))}
        </div>
      </marquee>
      {zoomedImage && (
        <Modal
          show={true}
          onHide={handleClose}
          centered
          size="xl"
          data-aos="flip-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <Modal.Header closeButton>
            <Modal.Title>{imageSet[activeIndex]?.alt}</Modal.Title>
          </Modal.Header>
          <Modal.Body
            className="text-center"
            data-aos="flip-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <Carousel activeIndex={activeIndex} onSelect={handleSelect}>
              {imageSet.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={image.url}
                    alt={image.alt}
                    style={{ maxHeight: "80vh" }}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-center">
            <Button variant="danger" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default Slider;
