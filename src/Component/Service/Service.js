import React from "react";
import Makeus from "./Makeus";
import image from "../../images/service-page-banner.jpg";
import image1 from "../../images/mob-serv.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet-async";

const Service = () => {
  return (
    <div>
      <Helmet>
        <title>Services | Groavy Buildcon - Real Estate and Farmland Solutions</title>
        <meta
          name="description"
          content='Learn about the range of services offered by Groavy Buildcon, including premium farmland sales and expert real estate consultation in Bengaluru.'
        />
        <meta
          name="keywords"
          content="GroavyBuildcon services, real estate services, farmland sales, Bengaluru"
        />
        <meta name="author" content="GroavyBuildcon" />
        <meta property="og:title" content="Services | Groavy Buildcon - Real Estate and Farmland Solutions" />
        <meta
          property="og:description"
          content="Learn about the range of services offered by Groavy Buildcon, including premium farmland sales and expert real estate consultation in Bengaluru.
"
        />
        <meta property="og:image" content="URL-to-your-featured-image" />
        <meta property="og:url" content="https://www.groavy.com/service" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="GroavyBuildcon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Services | Groavy Buildcon - Real Estate and Farmland Solutions" />
        <meta
          name="twitter:description"
          content="Learn about the range of services offered by Groavy Buildcon, including premium farmland sales and expert real estate consultation in Bengaluru.
"
        />
        <meta name="twitter:image" content="URL-to-your-featured-image" />
        <meta name="twitter:site" content="@yourtwitterhandle" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href="https://www.groavy.com/service" />
      </Helmet>

      <div className="position-relative">
        {/* <div className="img">

      </div> */}
        <picture className="w-100">
          <source srcSet={image1} media="(max-width: 699px)" />
          <img
            src={image}
            width={'100%'}
            alt="Groavy service-banner"
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
            Find the Perfect Farmland for Your Needs
            <FontAwesomeIcon
              icon={faTree}
              className="icon-after animated-icon"
            />
          </h1>
        </div>
      </div>

      <Makeus />
    </div>
  );
};

export default Service;
