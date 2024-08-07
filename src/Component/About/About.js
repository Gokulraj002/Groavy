import React from "react";
import image from "../../images/About-Banner.png";
import image1 from "../../images/mob-about.png";
import about from "../../images/about.jpg";
import "./about.css";
import { Helmet } from "react-helmet-async";
import Mision from "../../images/Mision3.jpg";
import Vision from "../../images/Vision.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree } from "@fortawesome/free-solid-svg-icons";
// import AboutContent from "./AboutContent";

const About = () => {
  return (
    <>
      <Helmet>
        <title>
          About Us | Groavy Buildcon: Real Estate and Farmland Partner
        </title>
        <meta
          name="description"
          content="Learn about Groavy Buildcon, a leader in real estate and farmland investments. Discover our mission, values, and commitment to sustainable development.
"
        />
        <meta
          name="keywords"
          content="About GroavyBuildcon, real estate, farmland sales, Bengaluru"
        />
        <meta name="author" content="GroavyBuildcon" />
        <meta
          property="og:title"
          content="About Us | Groavy Buildcon Real Estate, Farmland Specialists"
        />
        <meta
          property="og:description"
          content="Discover the goals, mission, and real estate team of Groavy Buildcon. Learn about our dedication to quality and our varied property holdings.
"
        />
        <meta property="og:image" content="URL-to-your-featured-image" />
        <meta property="og:url" content="https://www.groavy.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="GroavyBuildcon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Us | Groavy Buildcon Real Estate, Farmland Specialists"
        />
        <meta
          name="twitter:description"
          content="Discover the goals, mission, and real estate team of Groavy Buildcon. Learn about our dedication to quality and our varied property holdings.
"
        />
        <meta name="twitter:image" content="URL-to-your-featured-image" />
        <meta name="twitter:site" content="@yourtwitterhandle" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href="https://www.groavy.com/about" />
      </Helmet>

      <div className="position-relative">
        {/* <div className="img">

      </div> */}
        <picture className="w-100">
          <source srcSet={image1} media="(max-width: 699px)" />
          <img
            src={image}
            width={"100%"}
            alt="about-banner"
            className="w-100"
            height={"380px"}
          />
        </picture>

        <div className="position-absolute top-50 start-50 translate-middle">
          <h1 id="head" className="text-white text-center">
            <FontAwesomeIcon
              icon={faTree}
              className="icon-before animated-icon"
            />
            Grow Together<br></br>
            Real Estate and Farmland Experts
            <FontAwesomeIcon
              icon={faTree}
              className="icon-after animated-icon"
            />
          </h1>
          {/* <p className="para-color font text-white text-center">
            the best way to predict the future is to create it together.
          </p> */}
        </div>
      </div>
      <div
        className="container-fluid bg"
        style={{ backgroundColor: "#3a6958" }}
      >
        <div className="container ">
          <div className="row  pb-3 aos py-3 para-color2">
            <div className="col-12 col-lg-6 ">
              <h2 className="font1 color1">Groavy Buildcon</h2>
              <p className="text-white justify">
                Groavy Buildcon is a real estate firm committed to providing
                excellent services. In their “About Us'' section, they emphasize
                a team approach to make the process of buying or selling land
                for sale in Bangalore easy with professional help. Groavy
                Buildcon goes beyond developing mere structures; they aim to
                create managed farmland and farmland near Bangalore that produce
                cherished moments and valuable history. Their mission is to help
                real estate dreams come true, whether it involves finding
                farmland, enhancing investments, or making a confident sale.
                They offer advice to everyone and strive to turn real estate
                into a meaningful passion and potential.
              </p>
            </div>
            <div className="col-12 col-lg-6 aos ">
              <img
                className="w-100 mx-auto d-block mt-lg-3 "
                width={"100%"}
                height={"auto"}
                src={about}
                alt="About-Home"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid" style={{ backgroundColor: "#f6f5f2" }}>
        <div className="container py-3 para-color2">
          <div className="row aos">
            <div className="col-12 col-lg-6  aos" data-aos="fade-down-right">
              <div className="vision-img"></div>
              <img
                className="w-100 p-3 rounded"
                src={Vision}
                width={"100%"}
                height={"auto"}
                alt="Groavy Vision"
              />
            </div>
            <div className="col-12 col-lg-6 mt-lg-4" data-aos="fade-down-left">
              <h3 className="" style={{ color: "#3A6958" }}>
                Our Vision
              </h3>
              <p className="justify">
                As much as Groavy Buildcon is a real estate company that deals
                with the construction of commercial buildings and sale of plots,
                real estate to us is not merely having structures but providing
                unique and long-lasting experiences. We construct dwellings
                where people live through the important moments, create history,
                striving for the best and hoping for the better. It would be our
                desire to design settings that are suitable for living and that
                are centers for human drama. Agricultural sales is also another
                area we have a competence in, and in this respect, we offer the
                best farmland investment near Bangalore, providing investment,
                growth, and a sustainable life. The rural environments that we
                offer correspond to all these requirements and goals, whether it
                be relaxation or a profitable investment.
              </p>
            </div>
          </div>
        </div>
        <div className="container para-color2">
          <div className="row pb-4 aos">
            <div
              className="col-12 col-lg-6 mt-lg-5 aos"
              data-aos="fade-down-right"
            >
              <h3 style={{ color: "#3A6958" }}>Our Mission</h3>
              <p className="justify">
                Thus, the mission that guides us is helping you turn your dreams
                into reality in the sphere of real estate. Farmlands near
                Bangalore and finding the best farmland investment near
                Bangalore are our goals. Everyone has dreams they want to
                achieve in life, and our aim is to help you realize those
                dreams, whether it’s about identifying the right farm plot,
                enhancing your investments, or selling with confidence. We
                ensure that each of these steps makes every stage of your real
                estate experience easy and joyful. With a personal approach and
                a focus on the highest standards, real estate will become a
                satisfying, invigorating, and exciting experience. Come along
                with us.
              </p>
            </div>
            <div className="col-12 col-lg-6 aos " data-aos="fade-down-left">
              <img
                className="w-100 p-3 rounded"
                src={Mision}
                width={"100%"}
                height={"auto"}
                alt="Groavy Mission"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <AboutContent/> */}

      <div className="container-fluid who-we-are">
        <div className="container text-black">
          <div className="row pt-3 aos" data-aos="fade-down">
            <h4 className="text-center" style={{ color: "#c1e74b" }}>
              Who We Are{" "}
            </h4>
            <p className="text-center para-color2">
              We know that real estate is not just bricks and mortar; it’s more
              about where and the kind of life it offers. Counseling you from a
              position of local market knowledge, we take you to areas that
              appeal to your interests and visions. While our specialization is
              indeed providing real estate listings for homes, we go deeper than
              that: We evaluate our properties based on the best characteristics
              of a community, the quality of schools, and the appropriateness of
              the inhabitants’ way of life. Picking a location is quite an
              important decision, and depending on what you are specifically
              looking for – farm plots near Bangalore, farms near Bangalore, an
              active city, a calm suburb, or countryside – we will definitely
              help you choose the right place. Thus, we do not only guide you in
              searching for a home; rather, we seek to support you in defining
              what is important for you in order to actually build the Farm
              house you deserve.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
