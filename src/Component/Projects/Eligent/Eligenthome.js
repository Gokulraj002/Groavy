import React from "react";
import house from "./ElegantImages/sliderelegant1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree } from "@fortawesome/free-solid-svg-icons";
import house1 from "./ElegantImages/Eli-mob.png";
import logo from "./ElegantImages/eligent logo.png";
import "./css/eligenthome.css";
import "./css/amine.css";

const CarouselComponent = () => {
  return (
    <div className="position-relative ">
      <div className="aos">
        <picture >
          <source
            srcSet={house1}
            media="(max-width: 699px)"
            className="effect w-100"
          />
          <img  src={house} alt="about-banner"  height={'auto'} className="w-100 effect "/>
      
        </picture>
      </div>
     
      <div className="position-absolute pos translate-middle">
        <img className="mx-auto d-block imggg" width={'100%'} height={'auto'} src={logo} alt="elegant circle logo" />

        <h1 className="text-center text-white gap-0" id="head1">
          <FontAwesomeIcon
            icon={faTree}
            className="icon-before animated-icon"
          />
          Discover the Future of Luxury Living <br></br>Invest Wisely, Live
          Lavishly{" "}
          <FontAwesomeIcon icon={faTree} className="icon-after animated-icon" />
        </h1>
      </div>
    </div>
  );
};

export default CarouselComponent;
