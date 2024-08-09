import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

import TimberForm from "./TimberForm";

const Address = () => {
  return (
    <div className="container-fluid g-0 bg-light mt-3">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3874.1357486564048!2d77.59465037509169!3d13.830886086569285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDQ5JzUxLjIiTiA3N8KwMzUnNTAuMCJF!5e0!3m2!1sen!2sin!4v1720614305837!5m2!1sen!2sin"
        width="100%"
        height="450"
        title="TimberValley"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="bg-light pb-5 mt-3">
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
                      href="https://maps.google.com/?q=Timber+Valley,+Near+Galibipalli+village,+Lepakshi+Rd,+Lepakshi,+Andhra+Pradesh-515331"
                      className="text-black text-decoration-none"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Address: 183, 2nd Floor,G Block opposite to Reliance Trends,
                    Sahakara Nagar Main rd, Byatarayanapura, Bengaluru,
                    Karnataka 560092
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
                    +91 63668 29999
                  </a>
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <TimberForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
