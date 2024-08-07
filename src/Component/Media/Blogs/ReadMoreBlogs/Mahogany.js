import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
// import Elegant from "../../../Projects/Eligent/ElegantImages/2148910458.jpg";
import { FaLeaf, FaCoins, FaTree } from "react-icons/fa";
import { Helmet } from "react-helmet";
// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree } from "@fortawesome/free-solid-svg-icons";
import Banner from '../../../../images/banner 1.jpg'

import Banners from '../../../../images/mahogany 1.jpg'
import Banner1 from '../../../../images/blogs-mob.png'
import Banner2 from '../../../../images/tree-mahogany.jpg'


const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #f9f9f9;
  }
`;

const BlogContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background-color: #ffffff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;


const Content = styled.div`
  padding: 4rem 2rem;
  display: flex;
  flex-wrap: wrap;
`;

const MainContent = styled.main`
  flex: 3;
  min-width: 300px;
  padding-right: 2rem;
`;

const Sidebar = styled.aside`
  flex: 1;
  min-width: 250px;
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-family: 'Merriweather', serif;
  color: #2c3e50;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.5rem;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 50px;
    height: 3px;
    background-color: #3498db;
  }
`;

const Paragraph = styled.p`
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
`;

const List = styled.ol`
  padding-left: 1.5rem;
  margin-bottom: 1.5rem;
`;

const ListItem = styled.li`
  margin-bottom: 1rem;
  position: relative;
`;

const IconWrapper = styled.span`
  margin-right: 0.5rem;
  color: #3498db;
`;

const TableOfContents = styled.nav`
  background-color: #e3e0e0;
  padding: 1.5rem;
  border-radius: 8px;
  position: sticky;
  top: 2rem;
`;

const TOCTitle = styled.h4`
  font-family: 'Merriweather', serif;
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const TOCList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const TOCItem = styled.li`
  margin-bottom: 0.5rem;

  a {
    color: #333;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #3498db;
    }
  }
`;
const FAQItem = styled.div`
  margin-bottom: 1.5rem;
`;

const Question = styled.h3`
  font-weight: bold;
  font-size:20px;
  margin-bottom: 0.5rem;
`;

const Answer = styled.p`
  margin-left: 1rem;
`;

const ProgressBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background-color: #3498db;
  transform-origin: 0%;
`;

const MahoganyBlog = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;

      setScrollProgress(scroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>Elegant Orchards: Leading the Way with Mahogany Tree Plantations</title>
        <meta
          name="description"
          content="Discover how Elegant Orchards is investing in sustainability with the plantation of mahogany trees, enhancing value and environmental health."
        />
        <meta
          name="keywords"
          content="Elegant Orchards, mahogany trees, investment, farmland, high returns, sustainable agriculture"
        />
        <meta name="author" content="GroavyBuildcon" />
        <meta property="og:title" content="Elegant Orchards: Leading the Way with Mahogany Tree Plantations" />
        <meta
          property="og:description"
          content="Discover how Elegant Orchards is investing in sustainability with the plantation of mahogany trees, enhancing value and environmental health."
        />
        <meta property="og:image" content="URL-to-your-featured-image" />
        <meta property="og:url" content="https://www.groavy.com/blogs/elegantorchards-embraces-green-growth-with-mahoganytrees" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="GroavyBuildcon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Elegant Orchards: Leading the Way with Mahogany Tree Plantations" />
        <meta
          name="twitter:description"
          content="Discover how Elegant Orchards is investing in sustainability with the plantation of mahogany trees, enhancing value and environmental health."
        />
        <meta name="twitter:image" content="URL-to-your-featured-image" />
        <meta name="twitter:site" content="@yourtwitterhandle" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href="https://www.groavy.com/blogs/elegantorchards-embraces-green-growth-with-mahoganytrees" />
      </Helmet>

      <div>
        <div className="position-relative">

          <picture className="w-100">
            <source srcSet={Banner1} media="(max-width: 699px)" />
            <img src={Banner} alt="Mahogany-blogs"  width={'100%'} height={'auto'} className="w-100" />
          </picture>

          <div className="position-absolute top-50 start-50 translate-middle">


            <h1 id="head" className="text-white text-center">
              <FontAwesomeIcon
                icon={faTree}
                className="icon-before animated-icon"
              />
              Elegant Orchards Embraces Green Growth with Mahogany Trees
              <FontAwesomeIcon
                icon={faTree}
                className="icon-after animated-icon"
              />
            </h1>

          </div>
        </div>
      </div>

      <GlobalStyle />
      <ProgressBar style={{ transform: `scaleX(${scrollProgress})` }} />
      <BlogContainer className="mt-5">


        <Content>
          <MainContent>
            <Section>
              <SectionTitle id="introduction">Introduction</SectionTitle>
              <Paragraph>
                As a landowner do you want to get a high return on your investment? And all this you
                can find at Elegant Orchards! Thus, our best farmland provides an ideal environment to
                grow the extraordinary mahogany tree which is a natural asset to provide high yield.
              </Paragraph>
            </Section>
            <picture className="w-100 ">
              <source srcSet={Banner2} media="(max-width: 699px)" />
              <img src={Banners} alt="Mahogany-trees" width={'100%'} height={'auto'} className="w-100" />
            </picture>
            <Section className="mt-5">
              <SectionTitle id="why-mahogany">Why Mahogany? Here is described a tree of unparalleled worth.
              </SectionTitle>
              <Paragraph>
                Mahogany, often hailed as the "King of Woods," is renowned for its exceptional qualities
              </Paragraph>
              <List>
                <ListItem>
                  <IconWrapper><FaTree /></IconWrapper>
                  <strong>Lush Green Canopy:</strong> Accomplishes the task of shading and beautifying your
                  compound sufficiently enough.
                </ListItem>
                <ListItem>
                  <IconWrapper><FaLeaf /></IconWrapper>
                  <strong>Environmental Champion:</strong>It provides habitat for wildlife, removes CO2, cleans
                  the air and is used for horticulture.
                </ListItem>
                <ListItem>
                  <IconWrapper><FaCoins /></IconWrapper>
                  <strong>Long-Term Investment:</strong> : Mahogany trees take a long time to grow and hence the
                  value of the trees rises as they grow.
                </ListItem>
                <ListItem>
                  <IconWrapper><FaTree /></IconWrapper>
                  <strong>Premium Timber:</strong>  Known for its density and dark stain-ability and the ability to
                  take fine finishes due to its hardness, it's greatly used in making furniture,
                  cabinets and instruments.
                </ListItem>
                <ListItem>
                  <IconWrapper><FaLeaf /></IconWrapper>
                  <strong>Diverse Applications:</strong> Mahogany apart from being used in the production of
                  timber has other uses including construction purposes, boat making and medical
                  purposes.

                </ListItem>
              </List>
            </Section>

            <Section>
              <SectionTitle id="welcome">Welcome to Mahogany Wealth</SectionTitle>
              <Paragraph>
                Elegant Orchards: welcome to mahogany wealth it is a privilege to be of assistance
              </Paragraph>
              <Paragraph>
                At <a href="/elegantorchards" target="_blank" rel="noopener noreferrer">Elegant Orchards,</a>we present the customer with high-quality farmlands that are
                suitable for growing mahogany trees. It encompasses land acquisition to tree
                management and growth to produce the greatest yield from the trees.
              </Paragraph>
            </Section>


            <Section>
              <SectionTitle id="benefits">Benefits of Owning Mahogany Land at Elegant Orchards:
              </SectionTitle>
              <List>
                <ListItem>
                  <strong>Prime Location:</strong> Our farmlands are in areas that favor the growth of mahogany because they are characterized by conducive climate.
                </ListItem>
                <ListItem>
                  <strong>Expert Guidance:</strong> The plantation's agronomists have extensive knowledge of the
                  plantation and the time it takes to harvest a productive crop.

                </ListItem>
                <ListItem>
                  <strong>Long-Term Partnership:</strong> The sources of mahogany are purchased from
                  landowners and there are plans to support them right from the time of planting
                  the trees.


                </ListItem>
                <ListItem>
                  <strong>Potential for High Returns:</strong> This is to mean that the need for mahogany is on the
                  rise, and therefore making the investment all the more profitable.
                </ListItem>
              </List>
            </Section>


            <Section>
              <SectionTitle id="future-with-mahogany">Forget the Apples, Work for Your Future with Mahogany</SectionTitle>
              <Paragraph>
                When you select Elegant Orchards for your future, it isn't merely land that you are
                purchasing but a natural resource that can bring in a good return for your
                grand-children's generations. Consider the lovely feeling of having your own plantation
                of mahogany trees that can boost your revenues and at the same time act beneficial to
                nature.

              </Paragraph>
              <Paragraph>
                <a href="/contact" target="_blank" rel="noopener noreferrer">Contact us</a> now to be part of the marvelous chance to have mahogany land in Elegant Orchards.
              </Paragraph>
            </Section>

            <Section>
              <SectionTitle id="faq">Frequently Asked Questions :</SectionTitle>
              <FAQItem>
                <Question>Q1: How long does it take for a mahogany tree to mature?</Question>
                <Answer>A1: Mahogany trees are a long-term investment. They typically take around 20-30 years
                  to reach maturity, depending on factors like soil quality, climate, and care.</Answer>
              </FAQItem>
              <FAQItem>
                <Question>Q2: What is the expected return on investment for a mahogany plantation?</Question>
                <Answer>A2: The return on investment for a mahogany plantation can be substantial due to the
                  high value of mahogany timber. However, it's important to remember that it's a
                  long-term investment, and factors like market prices and plantation management will
                  influence the final returns.
                </Answer>
              </FAQItem>
              <FAQItem>
                <Question>Q3: Where are the Elegant Orchards mahogany plantations located?
                </Question>
                <Answer>A3: It is located in Peresandra, Chikkaballapura Taluk and Chikkaballapura District.
                </Answer>
              </FAQItem>
              <FAQItem>
                <Question>Q4: What is the size of the land plots available for purchase?</Question>
                <Answer>A4: Plot Size: Commences at 5,700 square feet and increases to 10,000 square feet.</Answer>
              </FAQItem>
              <FAQItem>
                <Question>Q5: What is the recommended spacing between mahogany trees?</Question>
                <Answer>A5: The optimal spacing for mahogany trees depends on factors like soil quality and climate. Our experts can provide specific recommendations based on the plantation site.</Answer>
              </FAQItem>
              <FAQItem>
                <Question>Q6: How often does the plantation require maintenance?</Question>
                <Answer>A6: Regular maintenance is essential for the healthy growth of mahogany trees. Our team will provide a detailed maintenance plan tailored to your plantation.</Answer>
              </FAQItem>
            </Section>


          </MainContent>

          <Sidebar>
            <TableOfContents>
              <TOCTitle><strong>Table of Contents</strong></TOCTitle>
              <TOCList>
                <TOCItem><a href="#introduction">Introduction</a></TOCItem>
                <TOCItem><a href="#welcome">Welcome to Mahogany Wealth</a></TOCItem>
                <TOCItem><a href="#why-mahogany">Why Mahogany?Here is described a tree of unparalleled worth</a></TOCItem>
                <TOCItem><a href="#benefits">Benefits of Owning Mahogany Land at Elegant Orchards</a></TOCItem>
                <TOCItem><a href="#future-with-mahogany">Future with Mahogany</a></TOCItem>
                <TOCItem><a href="#faq">Frequently Asked Questions</a></TOCItem>
              </TOCList>
            </TableOfContents>
          </Sidebar>
        </Content>
      </BlogContainer>
    </>
  );
};

export default MahoganyBlog;