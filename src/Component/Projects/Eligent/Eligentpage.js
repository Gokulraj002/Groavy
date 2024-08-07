import React from "react";
import Slider from "./Slider";
import SliderOne from "./SliderOne";
import Amenities from "./Amenities";
import Map from "./Map";
import LocationMap from "./LocationMap";
import Layout from "./LayOut";
import Content from "./Content";
import Eligenthome from "./Eligenthome";
import EligantForm from "./EligantForm";
import NearByLocation from "./NearByLocation";
import ProjectHighlights from "./ProjectHighlights";
import ScrollModel from "./ScrollModel";
import { Helmet } from "react-helmet-async";

const Eligentpage = () => {
  return (
    <div>
      <Helmet>
        <title>Elegant Orchards Estate: Premium Farmland by Groavy Buildcon</title>
        <meta
          name="description"
          content='Explore Groavy Buildcons Elegant Orchards Estate in Bengaluru, where you can invest in premium farmland with exceptional opportunities and benefits.'
        />
        <meta
          name="keywords"
          content="Elegant Orchards Estate, GroavyBuildcon, farmland sales, Bengaluru real estate"
        />
        <meta name="author" content="GroavyBuildcon" />
        <meta
          property="og:title"
          content="Elegant Orchards Estate | GroavyBuildcon"
        />
        <meta
          property="og:description"
          content="Explore Groavy Buildcon's Elegant Orchards Estate in Bengaluru, where you can invest in premium farmland with exceptional opportunities and benefits."
        />
        <meta property="og:image" content="URL-to-your-featured-image" />
        <meta
          property="og:url"
          content="https://www.groavy.com/elegantorchards"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="GroavyBuildcon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Elegant Orchards Estate | GroavyBuildcon"
        />
        <meta
          name="twitter:description"
          content="Explore Groavy Buildcon's Elegant Orchards Estate in Bengaluru, where you can invest in premium farmland with exceptional opportunities and benefits."
        />
        <meta name="twitter:image" content="URL-to-your-featured-image" />
        <meta name="twitter:site" content="@yourtwitterhandle" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#ffffff" />
        <link
          rel="canonical"
          href="https://www.groavy.com/elegantorchards"
        />
      </Helmet>

      <Eligenthome />
      <EligantForm />
      <Slider />
      <Content />
      <SliderOne />
      <Amenities />
      <Layout />
      <NearByLocation />
      <ProjectHighlights />
      <LocationMap />
      <Map />
      <ScrollModel />
    </div>
  );
};

export default Eligentpage;
