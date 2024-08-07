import React from 'react'
// import image1 from "../../../images/mob-serv.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree } from "@fortawesome/free-solid-svg-icons";
import Banner from '../../../images/banner 1.jpg'
import Banner1 from '../../../images/blogs-mob.png'

import { Helmet } from 'react-helmet';
const BlogsBanner = () => {
  return (
    <>
    <Helmet>
    <title>Our Blogs | Groavy Buildcon Real Estate, Farmland Specialists</title>
    <meta
      name="description"
      content="Explore insightful blogs from Groavy Buildcon. Discover expert tips, trends, and news related to real estate and farmland sales."
    />
    <meta
      name="keywords"
      content="GroavyBuildcon blogs, real estate blogs, farmland sales, property trends"
    />
    <meta name="author" content="GroavyBuildcon" />
    <meta property="og:title" content="Our Blogs | Groavy Buildcon Real Estate, Farmland Specialists" />
    <meta
      property="og:description"
      content="Explore insightful blogs from Groavy Buildcon. Discover expert tips, trends, and news related to real estate and farmland sales."
    />
    <meta property="og:image" content="URL-to-your-featured-image" />
    <meta property="og:url" content="https://www.groavy.com/blogs/" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="GroavyBuildcon" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Our Blogs | Groavy Buildcon Real Estate, Farmland Specialists" />
    <meta
      name="twitter:description"
      content="Explore insightful blogs from Groavy Buildcon. Discover expert tips, trends, and news related to real estate and farmland sales."
    />
    <meta name="twitter:image" content="URL-to-your-featured-image" />
    <meta name="twitter:site" content="@yourtwitterhandle" />
    <meta name="robots" content="index, follow" />
    <meta name="theme-color" content="#ffffff" />
    <link rel="canonical" href="https://www.groavy.com/blogs/" />
  </Helmet>

    <div>
       <div className="position-relative">

      <picture className="w-100">
  <source srcSet={Banner1} media="(max-width: 699px)"/>
  <img src={Banner} alt="Groavy-blogs" width={'100%'} height={'auto'} className="w-100" />
</picture>
      
  <div className="position-absolute top-50 start-50 translate-middle">


    <h1 id="head" className="text-white text-center">
              <FontAwesomeIcon
                icon={faTree}
                className="icon-before animated-icon"
              />
            Explore Our Latest Blog Posts and Updates
              <FontAwesomeIcon
                icon={faTree}
                className="icon-after animated-icon"
              />
            </h1>

    </div>
    </div>
    </div>
    </>
  )
}

export default BlogsBanner
