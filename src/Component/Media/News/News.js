import React from "react";
import NewsContent from "./NewsContent";
import NewsBanner from "./NewsBanner";
import { Helmet } from "react-helmet-async";
// import NewsPage from "./NewsPapers";

const News = () => {
  return (
    <>
      <Helmet>
        <title>
          Groavy Buildcon News | Latest Real Estate and Farmland Updates
        </title>
        <meta
          name="description"
          content="Stay updated with the latest news and updates from Groavy Buildcon. Get insights on real estate and farmland investment opportunities in Bengaluru."
        />
        <meta
          name="keywords"
          content="GroavyBuildcon news, real estate updates, farmland news, Bengaluru real estate, investment news"
        />
        <meta name="author" content="GroavyBuildcon" />
        <meta
          property="og:title"
          content="Groavy Buildcon News | Latest Real Estate and Farmland Updates"
        />
        <meta
          property="og:description"
          content="Stay updated with the latest news and updates from Groavy Buildcon. Get insights on real estate and farmland investment opportunities in Bengaluru."
        />
        <meta property="og:image" content="URL-to-your-featured-image" />
        <meta property="og:url" content="https://www.groavy.com/news" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="GroavyBuildcon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Groavy Buildcon News | Latest Real Estate and Farmland Updates"
        />
        <meta
          name="twitter:description"
          content="Stay updated with the latest news and updates from Groavy Buildcon. Get insights on real estate and farmland investment opportunities in Bengaluru."
        />
        <meta name="twitter:image" content="URL-to-your-news-featured-image" />
        <meta name="twitter:site" content="@yourtwitterhandle" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href="https://www.groavy.com/news" />
      </Helmet>

      <NewsBanner />
      <NewsContent />
      {/* <NewsPage/> */}
    </>
  );
};

export default News;
