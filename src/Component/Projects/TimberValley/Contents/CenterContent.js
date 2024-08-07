import React from "react";
import {
  FaMapMarkerAlt,
  FaChartLine,
  FaShieldAlt,
  FaLeaf,
  FaHome,
  FaSeedling,
  FaTractor,
  FaHeartbeat,
  FaHandsHelping,
} from "react-icons/fa";

const CenterContent = () => {
  return (
    <div className="bg mt-3">
      <div className="container py-4">
        <div className="row justify-content-center aos para-color2">
          <h2
            className="text-center font11 fs-1 mb-5"
            style={{ color: "#F9AB24" }}
          >
            Invest in Serenity, Grow with Prosperity
          </h2>

          <div
            className="col-12 col-md-6 col-lg-4 aos mb-4"
            data-aos="fade-right"
          >
            <FaMapMarkerAlt
              className="w-100 d-block mx-auto mb-3"
              style={{ fontSize: "50px", color: "#F9AB24" }}
            />
            <h3 className="text-center font2 color1">Prime Location</h3>
            <p className="text-center px-md-2 text-white">
              Search for the tracts of agricultural land for sale in and around
              Lepakshi and Nandi Hills that are witnessing rapid development and
              yet offer a peaceful life within the city’s proximity.
            </p>
          </div>

          <div
            className="col-12 col-md-6 col-lg-4 aos mb-4"
            data-aos="fade-down"
          >
            <FaTractor
              className="w-100 d-block mx-auto mb-3"
              style={{ fontSize: "50px", color: "#F9AB24" }}
            />
            <h3 className="text-center font2 color1">Managed Farmland</h3>
            <p className="text-center text-white">
              Contact professional help for leased out farmland in around
              Lepakshi, who do not have the time to farm but have a love towards
              farming.
            </p>
          </div>

          <div
            className="col-12 col-md-6 col-lg-4 aos mb-4"
            data-aos="fade-left"
          >
            <FaShieldAlt
              className="w-100 d-block mx-auto mb-3"
              style={{ fontSize: "50px", color: "#F9AB24" }}
            />
            <h3 className="text-center font2 color1">Secure Investment</h3>
            <p className="text-center text-white">
              Buy well protected farmland with marketable titles and no shady
              practices with well protested farmland near clients’ tour ist
              attractions.
            </p>
          </div>

          <div
            className="col-12 col-md-6 col-lg-4 aos mb-4"
            data-aos="fade-up-right"
          >
            <FaLeaf
              className="w-100 d-block mx-auto mb-3"
              style={{ fontSize: "50px", color: "#F9AB24" }}
            />
            <h3 className="text-center font2 color1">Sustainable Future</h3>
            <p className="text-center text-white">
              Own a profitable farmland with people who are equally concerned
              with the same environmental standards and those of the community
              and is best for anyone interested in land around Nandi Hill
            </p>
          </div>

          <div className="col-12 col-md-6 col-lg-4 aos mb-4" data-aos="fade-up">
            <FaHome
              className="w-100 d-block mx-auto mb-3"
              style={{ fontSize: "50px", color: "#F9AB24" }}
            />
            <h3 className="text-center font2 color1">Diverse Choices</h3>
            <p className="text-center text-white">
              Select from superior farmland to have dream homes, organic
              farming, and land investment to sell in the market.
            </p>
          </div>

          <div
            className="col-12 col-md-6 col-lg-4 aos mb-4"
            data-aos="fade-up-left"
          >
            <FaSeedling
              className="w-100 d-block mx-auto mb-3"
              style={{ fontSize: "50px", color: "#F9AB24" }}
            />
            <h3 className="text-center font2 color1">Organic Farming</h3>
            <p className="text-center text-white">
              : Enter into vermicompost making organic farming and horticulture
              on the best farmland for sale around Lepakshi for vegetables and
              fruits.
            </p>
          </div>

          <div
            className="col-12 col-md-6 col-lg-4 aos mb-4"
            data-aos="fade-right"
          >
            <FaChartLine
              className="w-100 d-block mx-auto mb-3"
              style={{ fontSize: "50px", color: "#F9AB24" }}
            />
            <h3 className="text-center font2 color1">Long-Term Appreciation</h3>
            <p className="text-center px-md-2 text-white">
              Experience the long-term capital appreciation near Lepakshi and
              Nandi Hills, bohemian with all the trappings of a modern world,
              which is sure to grow in value substantially.
            </p>
          </div>

          <div className="col-12 col-md-6 col-lg-4 aos mb-4" data-aos="fade-up">
            <FaHeartbeat
              className="w-100 d-block mx-auto mb-3"
              style={{ fontSize: "50px", color: "#F9AB24" }}
            />
            <h3 className="text-center font2 color1">
              Healthy, Engaged Community
            </h3>
            <p className="text-center text-white">
              Get naturistic, organic homes in farmland around tourist points to
              have a lively, green lifestyle with nearby communities.
            </p>
          </div>

          <div
            className="col-12 col-md-6 col-lg-4 aos mb-4"
            data-aos="fade-left"
          >
            <FaHandsHelping
              className="w-100 d-block mx-auto mb-3"
              style={{ fontSize: "50px", color: "#F9AB24" }}
            />
            <h3 className="text-center font2 color1">Unity in Values</h3>
            <p className="text-center text-white">
              They want to build a harmonious community of like-minded people
              based on the principles of peace, sustainability, and love for
              nature that corresponds to the tendencies of strengthening bonds
              in the best farmland near Lepakshi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenterContent;
