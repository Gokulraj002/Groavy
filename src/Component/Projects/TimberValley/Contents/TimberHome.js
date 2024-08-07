import React from "react";
// import { Carousel } from "react-bootstrap";
import house from "../imagesTimber/timber-lap.png";
import house1 from "../imagesTimber/timber-mob.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree } from "@fortawesome/free-solid-svg-icons";
import logo from "../imagesTimber/timber-logo.png";
import "../css/TimberHome.css";
// import banner from "../../Eligent/ElegantImages/Eligant-video.mp4";
import "../../Eligent/css/amine.css";
import ApiForm from "./ApiForm";

const TimberHome = () => {
  return (
    <div>
      <div className="position-relative ">
        <div className="aos">
          <picture className="w-100 ">
            <source
              srcSet={house1}
              media="(max-width: 699px)"
              className="effect"
            />
            <img src={house} alt="about-banner" width={'100%'} height={'auto'} className="w-100 effect " />
          
          </picture>
        </div>

        <div className="position-absolute pos translate-middle">
          <img
            className="mx-auto d-block imgg"
            src={logo} width={'100%'} height={'auto'}
            alt="Timber Valley circle logo"
          />

          <h1 className="text-center text-white gap-0" id="head">
            <FontAwesomeIcon
              icon={faTree}
              className="icon-before animated-icon"
            />
            Invest in land with long-term growth potential and modern amenities {" "}
            <FontAwesomeIcon
              icon={faTree}
              className="icon-after animated-icon"
            />
          </h1>
          <ApiForm />
        </div>
      </div>
    </div>
  );
};

export default TimberHome;
