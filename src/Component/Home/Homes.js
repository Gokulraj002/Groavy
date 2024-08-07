import React from "react";
import { Helmet } from 'react-helmet';
import HomeAbout from "./homeabout";
import Weoffer from "./Weoffer";
import Slider from "./GallerySlider";
import Testimonials from "./Testimonials";
import "./home.css";
import HomeBanner from "./HomeBanner";
import HomePagePopupForm from "./HomePagePopupForm";
import HomeProjects from "./HomeProjects";
import logo from "../../images/about-us1.png";

const Homes = () => {

  // useEffect(() => {
  //   window.gtag("event", "conversion", {
  //     send_to: "AW-16458676935/3yN7CKjb8r0ZEMf1jag9",
  //     value: 1.0,
  //     currency: "INR",
  //   });
  // }, []);

  
  return (
    <div>
      <Helmet>
        <title>
          Groavy Buildcon | Leading Real Estate and Farmland Investments
         
        </title>
        <meta
          name="description"
          content="Explore premium farmlands in Bengaluru with Groavy Buildcon. Discover diverse options and investments. Trust our commitment to real estate excellence.
 "
        />
        <meta
          name="keywords"
          content="GroavyBuildcon, real estate, farmland sales, Bengaluru, best farmland sales award"
        />
        <meta name="author" content="GroavyBuildcon" />
        <meta
          property="og:title"
          content="Groavy Buildcon | Leading Real Estate and Farmland Investments"
        />
        <meta
          property="og:description"
          content="Explore premium farmlands in Bengaluru with Groavy Buildcon. Discover diverse options and investments. Trust our commitment to real estate excellence.
"
        />
        <meta property="og:image" content={logo} />
        <meta property="og:url" content="https://www.groavy.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="GroavyBuildcon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Groavy Buildcon | Leading Real Estate and Farmland Investments"
        />
        <meta
          name="twitter:description"
          content="Explore premium farmlands in Bengaluru with Groavy Buildcon. Discover diverse options and investments. Trust our commitment to real estate excellence.
"
        />
        <meta name="twitter:image" content="URL-to-your-featured-image" />
        <meta name="twitter:site" content="@yourtwitterhandle" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href="https://www.groavy.com" />
      </Helmet>

      
      <HomeBanner />
      <HomeAbout />
      <Weoffer />
      <HomeProjects />
      <Slider />
      <Testimonials />
      <HomePagePopupForm />
    </div>
  );
};

export default Homes;
