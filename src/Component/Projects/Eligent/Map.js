import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import EligantMainForm from "./EligantMainForm";
import Testimonials from "./Testimonials";

const Map = () => {
  const handleFormSubmitSuccess = () => {
    // setDownloadAfterSubmit(true);
    // setShowModal(false);
  };
  return (
    <div className="container-fluid g-0 bg-light mt-3">
      <iframe
        title="Elegant Orchards Estate Location"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3428.3434771053026!2d77.732767!3d13.614273!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb1936148e3668d%3A0x216256fa8e25a4eb!2sElegant%20Orchards%20Estate%20by%20Silicon%20Farms%20and%20Villas!5e1!3m2!1sen!2sin!4v1718348331997!5m2!1sen!2sin"
        width="100%"
        height="450px"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <Testimonials />
      <div className="bg-light pb-5">
        <div className="container ">
          <div className="row gap-0 p-0">
            <div className="col-12 col-lg-6  pt-5 bg-white ">
              <h4 className="text-uppercase mb-4 font-weight-bold text-center mt-5">
                Address
              </h4>
              <div className=" mx-5 py-1">
                <p className="fs-3 text-center ">
                  <FontAwesomeIcon
                    icon={faHome}
                    className="me-2 text-success"
                  />
                </p>
                <div className="px-md-5 text-center">
                  <address className="para-color">
                    <a
                      href="https://maps.google.com/?q=Groavy+Buildcon."
                      className="text-black text-decoration-none"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Elegant Orchards Estate by Silicon Farms and Villas,
                      Jeeganahalli cross, Kammaguttahalli, Peresandra
                      Chikkaballapura Karnataka 562104.
                    </a>
                  </address>
                </div>
              </div>
              <div className=" mx-5 py-1 mt-2">
                <p className="fs-3  text-center ">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="me-2 text-success"
                  />
                </p>
                <p className="text-center">
                  <a
                    href="mailto:support@groavy.com"
                    className="text-black text-decoration-none para-color1"
                  >
                    support@groavy.com
                  </a>
                </p>
              </div>
              <div className=" mx-5 py-1 mt-2">
                <p className="fs-3  text-center">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="me-2 text-success"
                  />
                </p>
                <p className="text-center">
                  <a
                    href="tel:6366829999"
                    className="text-black text-decoration-none para-color1"
                  >
                    +91 6366829999
                  </a>
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <EligantMainForm onSubmitSuccess={handleFormSubmitSuccess} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
