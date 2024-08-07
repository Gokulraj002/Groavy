import React from "react";
// import image from "../../../images/Comming Soon.png";
import { Helmet } from "react-helmet-async";
import TimberHome from "./Contents/TimberHome";
import HomeContent from "./Contents/HomeContent";
import TimberAminities from "./Contents/TimberAminities";
import CenterContent from "./Contents/CenterContent";
import TimberLayout from "./Contents/TimberLayout";
import TimberLocationMap from "./Contents/TimberLocationMap";
import Address from "./Contents/Address";
import TimberMain from "./Contents/TimberMain";
import Nearbyplaces from "./Contents/Nearbyplaces";
// import TimberHome from "./Contents/TimberHome";

const TimberValley = () => {
  return (
    <div>
      <Helmet>
        <title>Timber Valley | Premium Farmland by Groavy Buildcon</title>
        <meta
          name="description"
          content="Discover Groavy Buildcon's Timber Valley in Bengaluru, offering premium farmland with exceptional opportunities and benefits."
        />
        <meta
          name="keywords"
          content="Timber Valley, GroavyBuildcon, farmland sales, Bengaluru real estate"
        />
        <meta name="author" content="GroavyBuildcon" />
        <meta property="og:title" content="Timber Valley | GroavyBuildcon" />
        <meta
          property="og:description"
          content="Discover Groavy Buildcon's Timber Valley in Bengaluru, offering premium farmland with exceptional opportunities and benefits."
        />
        <meta property="og:image" content="URL-to-your-featured-image" />
        <meta property="og:url" content="https://www.groavy.com/timbervalley" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="GroavyBuildcon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Timber Valley | GroavyBuildcon" />
        <meta
          name="twitter:description"
          content="Discover Groavy Buildcon's Timber Valley in Bengaluru, offering premium farmland with exceptional opportunities and benefits."
        />
        <meta name="twitter:image" content="URL-to-your-featured-image" />
        <meta name="twitter:site" content="@yourtwitterhandle" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href="https://www.groavy.com/timbervalley" />
      </Helmet>

      <TimberHome />
      <HomeContent />
      <CenterContent />
      <TimberMain />
      <TimberAminities />
      <Nearbyplaces />
      <TimberLayout />
      <TimberLocationMap />
      <Address />
    </div>
  );
};

export default TimberValley;
