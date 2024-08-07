import React from "react";
// import Banner from '../../images/banner.jpeg';
// import About from "../../images/home.png";
import { Link } from "react-router-dom";
import Home from "../../images/home.png";
import about from "../../images/about-us1.png";
import Land from "../../images/land.png";
import Service from "../../images/service.png";
import welcome from "../../images/welcome-home.jpg";
const HomeAbout = () => {
  return (
    <>
      <div
        className="container-fluid pb-md-0 pb-3"
        style={{ backgroundColor: "#3a6958" }}
      >
        <div className="container py-3 py-md-0 ">
          <div className="row  py-md-5 aos">
            <div className="col-12 col-lg-6 p-lg-4 para-color2">
              <div data-aos="fade-right">
                <h2 className="m-0 fs-4 color">Welcome To</h2>
                <h2 className="font1 color1">Groavy Buildcon</h2>
                <p className="text-white justify">
                  Leading real estate company Groavy Buildcon redefines modern
                  life with creative architecture and adaptable developments,
                  such as its flagship Managed Farmlands projects that span
                  several South Indian states for a smooth transition between
                  urban and natural environments
                </p>{" "}
                <p className="text-white justify">
                  {" "}
                  At Groavy Buildcon, we offer prime plots for sale in
                  Bangalore, farmlands near Bangalore, agricultural land, and
                  premium farmland investments. Our seasoned team prioritizes
                  leading-edge facilities, improved living, and value
                  appreciation. Experience life with vision at Groavy Buildcon,
                  where creativity meets practicality. Find your ideal property,
                  from urban plots to rural retreats.
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-6 aos" data-aos="fade-left">
              <img
                className="w-100 mx-auto d-block p-md-2 "
                src={welcome}
                width={"100%"}
                alt="Banner"
                height={"auto"}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container">
          <div className="row aos">
            <div className="col-12 col-lg-7  mt-4 " data-aos="fade-down-right">
              <h2 className="font1 " style={{ color: "#3A6958" }}>
                About Us
              </h2>
              <p className="justify para-color2">
                Groavy Buildcon is a leading real estate company specializing in
                managed farmland development. Our commitment lies in providing
                exceptional farmland investment opportunities. We offer
                comprehensive services, from land acquisition to expert
                management, ensuring hassle-free ownership. Experience the joy
                of owning farmland without the complexities of daily operations.
                Let us cultivate your dreams into a thriving agricultural
                venture.Learn more about our mission and values on our ‘’
                <Link to="/about">AboutUs</Link>’’page.Discover how we can help
                you achieve your real estate goals with ease and confidence.
              </p>
            </div>
            <div className="col-12 col-lg-5 " data-aos="fade-down-left">
              <img
                className="w-100 mt-md-0 d-block mx-auto "
                src={about}
                width={"100%"}
                height={"auto"}
                loading="lazy"
                alt="groavy-logo"
              ></img>
            </div>
          </div>
        </div>
      </div>

      {/* Our Services */}
      <div className="container-fluid bg py-4">
        <div className="row justify-content-center aos para-color2">
          <h2 className="text-center font1 color">Our Services</h2>

          <div
            className="col-12 col-md-6 col-lg-3 mx-lg-3  aos "
            data-aos="fade-down-right"
            style={{ borderRadius: "5px" }}
          >
            <img
              className="w-100  d-block mx-auto"
              src={Home}
              width={"100%"}
              alt="Buy a Land"
              height={"auto"}
              loading="lazy"
            ></img>
            <h3 className=" text-center font2 color1">Buy a Land</h3>

            <p className="text-center px-md-2 text-white">
              Discover your perfect land for sale with Groavy Buildcon. Our
              expert guidance simplifies the process of finding and acquiring
              your ideal property investment.
            </p>
          </div>
          <div
            className="col-12 col-md-6 col-lg-3 mx-lg-3 aos"
            data-aos="zoom-out-down"
            style={{ borderRadius: "5px" }}
          >
            <img
              className="w-100 d-block mx-auto"
              src={Land}
              width={"100%"}
              height={"auto"}
              loading="lazy"
              alt="Buy a Farm"
            ></img>
            <h3 className="text-center font2 color1">Buy a FarmLand</h3>

            <p className="text-center text-white">
              Groavy Buildcon’s land listings offer endless possibilities.
              Explore the best piece of land for your dream house and let us
              support you in choosing where to invest in real estate.
            </p>
          </div>
          <div
            className="col-12 col-md-6 col-lg-3 mx-lg-3 aos"
            data-aos="fade-down-left"
            style={{ borderRadius: "5px" }}
          >
            <img
              className="w-100 d-block mx-auto"
              src={Service}
              width={"100%"}
              height={"auto"}
              loading="lazy"
              alt="Buy a Farmland"
            ></img>
            <h3 className=" text-center font2 color1">Invest with Us</h3>

            <p className="text-center text-white">
              Discover our farmlands at Groavy Buildcon to start your next
              farming trip. Experience the benefits of investing in nature’s
              peace and calmness. Let us assist you in making a wise real estate
              investment.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeAbout;
