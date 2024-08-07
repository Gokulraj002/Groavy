
import React from "react";
import video from "../../images/video.mp4";
import image from '../../images/groavy-mob.jpg';
// import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree } from "@fortawesome/free-solid-svg-icons";
 
const HomeBanner = () => {
  return (
    <>
      <div>
        <div className=" position-relative">
          <video
            autoPlay
            muted
            loop
            src={video}
            alt="background"
            className="w-100 d-none d-md-block"
          ></video>
          <div className="aos">
 
          <img
            src={image}
            width={"100%"}
            alt="about-banner"
            className="w-100 effect d-block d-md-none"
          />
          </div>
          <div className=" position-absolute translate-middle hero-content text-center">
            <h1 id="head">
              <FontAwesomeIcon
                icon={faTree}
                className="icon-before animated-icon"
              />
              Find Your Dream Land By <br></br>
              Groavy Buildcon{" "}
              <FontAwesomeIcon
                icon={faTree}
                className="icon-after animated-icon"
              />
            </h1>
            <p className="font fw-bold">
              embark on a journey to own your perfect piece of earth, where
              dreams bloom and possibilities grow.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
 
export default HomeBanner;
 
 