import React from "react";
import "./HomeProjects.css";
import image from "../../images/285-430.jpg";
import image1 from "../../images/elegant-blog-image.jpg";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    image: image,
    link: "/elegantorchards",
  },
];

function HomeProjects() {
  return (
    <div className="container-fluid bg-light">
      <div className="container pt-1 pb-5">
        <h2
          className="font1 text-center mt-2 mb-3"
          style={{ color: "#3A6958" }}
        >
          Our Projects
        </h2>

        <div className="row">
          <p className="text-center pb-1 para-color">
            Our projects reflect a commitment to quality, innovation, and a
            vision for redefining the art of living.
          </p>
          {projects.map((project) => (
            <div className="col-12 col-md-4 px-md-4" key={project.id}>
              <div className="project-class">
                <div className="customs-card">
                  <img
                    width="100%"
                    height="auto"
                    src={project.image}
                    alt="elegant-project"
                    className="w-100 poda"
                  />
                  <div className="customs-card-body text-center py-3">
                    <Link
                      to={project.link}
                      className="btn btn-info customs-btn para-color"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="col-12 col-md-8 mt-3 mt-md-0">
            <div className="video-container mx-auto d-block mt-4">
              {/* <iframe
                className="ut d-none d-md-block"
                width="100%"
                src="https://www.youtube.com/embed/CT_1vQAdCk4?autoplay=0&loop=1&controls=0&mute=1&si=F591mxOZug54uiwo"
                title="YouTube video player"
                referrerPolicy="strict-origin-when-cross-origin"
                frameBorder="0"
                allowFullScreen
              ></iframe> */}
               <img
                    width="100%"
                    height="auto"
                    src={image1}
                    alt="elegant-project"
                    className="w-100 "
                  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeProjects;
