import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
// import Elegant from "../../../Projects/Eligent/ElegantImages/ele-one.png";
import { Helmet } from "react-helmet";
// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree } from "@fortawesome/free-solid-svg-icons";
import Banner from '../../../../images/banner 1.jpg'
// import Elegant from "../../../../images/Blog 1 image.jpg";

import Banners from '../../../../images/sandal_wood_banner.jpg';
import Banner1 from '../../../../images/blogs-mob.png'
import Banner2 from '../../../../images/sandalwood.jpg'


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
  font-family: 'opensans', serif;

  padding-left: 1.5rem;
  margin-bottom: 1.5rem;
`;

const ListItem = styled.li`
  margin-bottom: 1rem;
  position: relative;
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

const ProgressBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background-color: #3498db;
  transform-origin: 0%;
`;

const SandalwoodBlogs = () => {
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
                <title>Invest in Your Future: Sandalwood Farming with Elegant Orchards</title>
                <meta
                    name="description"
                    content=" Discover sustainable investment opportunities with Elegant
                            Orchards. Explore sandalwood farming for a secure future. Learn more
                            and invest today!"
                />
                <meta
                    name="keywords"
                    content="Elegant Orchards, farmland for sale, sandalwood farmland, sustainable agriculture"
                />
                <meta name="author" content="GroavyBuildcon" />
                <meta property="og:title" content="Invest in Your Future: Sandalwood Farming with Elegant Orchards" />
                <meta
                    property="og:description"
                    content="Discover sustainable investment opportunities with Elegant
                          Orchards. Explore sandalwood farming for a secure future. Learn more
                          and invest today!"
                />
                <meta property="og:image" content="URL-to-your-featured-image" />
                <meta property="og:url" content="https://www.groavy.com/blogs/invest-in-sandalwood-on-your-farm-with-elegant-orchards-estate" />
                <meta property="og:type" content="websiteBlogs" />
                <meta property="og:site_name" content="GroavyBuildcon" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Invest in Your Future: Sandalwood Farming with Elegant Orchards" />
                <meta
                    name="twitter:description"
                    content="Discover sustainable investment opportunities with Elegant
                                  Orchards. Explore sandalwood farming for a secure future. Learn more
                      and invest today!"
                />
                <meta name="twitter:image" content="URL-to-your-featured-image" />
                <meta name="twitter:site" content="@yourtwitterhandle" />
                <meta name="robots" content="index, follow" />
                <meta name="theme-color" content="#ffffff" />
                <link rel="canonical" href="https://www.groavy.com/blogs/invest-in-sandalwood-on-your-farm-with-elegant-orchards-estate" />
            </Helmet>

            <div>
                <div className="position-relative">

                    <picture className="w-100">
                        <source srcSet={Banner1} media="(max-width: 699px)" />
                        <img src={Banner} alt="Sandalwood-blogs"  width={'100%'} height={'auto'} className="w-100" />
                    </picture>

                    <div className="position-absolute top-50 start-50 translate-middle">


                        <h1 id="head" className="text-white text-center">
                            <FontAwesomeIcon
                                icon={faTree}
                                className="icon-before animated-icon"
                            />
                            Invest in Sandalwood on <br></br>
                            Your Farm with Elegant
                            Orchards Estate
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
                {/* <div className="position-relative"> */}


                {/* <div className="position-absolute top-50 start-50 translate-middle">
    
  </div> */}
                {/* </div> */}

                <Content>
                    <MainContent>
                        <Section>
                            <SectionTitle id="introduction">Invest in Sandalwood on 
                            Your Farm with Elegant
                            Orchards Estate</SectionTitle>
                            <Paragraph>
                               Imagine this: owning a piece of land that not only provides you with fresh produce or
                                beautiful scenery, but also holds the potential for a significant long-term financial
                                reward. Introducing sandalwood, a precious wood known for its captivating fragrance
                                and diverse uses, and the innovative approach of  <a href="/elegantorchards" target="_blank" rel="noopener noreferrer">Elegant Orchards Estate.</a>

                            </Paragraph>
                            <Paragraph>
                            Elegant Orchards Estate takes farm ownership to a whole new level. They understand
the increasing interest in sustainable and high-value crops. That's why they offer a
unique opportunity - pre-planted sandalwood trees on your purchased farmland. This
means you can reap the rewards of this valuable wood without the initial wait for the
trees to mature
                            </Paragraph>
                        </Section>
                        <picture className="w-100 ">
                            <source srcSet={Banner2} media="(max-width: 699px)" />
                            <img src={Banners} alt="Sandalwood-trees" width={'100%'} height={'auto'} className="w-100" />
                        </picture>
                        <Section className="mt-5">
                            <SectionTitle id="why-invest">The Allure of Sandalwood </SectionTitle>
                            <Paragraph>
                            Red sandalwood (Pterocarpus santalinus) has been prized for centuries for its aromatic
properties and exquisite wood. Used in everything from perfumes and incense to
traditional medicine and fine furniture, the demand for sandalwood remains high. This
translates to stable and lucrative market prices for mature trees.
                            </Paragraph>
                            <Paragraph>
                            Red sandalwood benefits have been explored in traditional medicine for centuries,
although scientific evidence for many uses is limited. Potential benefits include:

                            </Paragraph>
                            <List>
                                <ListItem>
                                    <strong>Skin health:</strong> Red sandalwood's astringent properties may aid in wound healing and
soothe various skin conditions like eczema and psoriasis.

                                </ListItem>
                                <ListItem>
                                    <strong>Anti-inflammatory effects:</strong> Red sandalwood may help reduce inflammation and
                                    discomfort associated with arthritis and muscle soreness.

                                </ListItem>
                                <ListItem>
                                    <strong>Antibacterial properties:</strong> Red sandalwood's antibacterial properties may contribute to
                                    wound healing and potentially address some digestive issues.

                                </ListItem>
                            </List>
                            <Paragraph>
                            Red sandalwood uses are as diverse as its potential benefits. In traditional medicine, it
may be used in decoctions or topical applications. Red sandalwood powder is also
sometimes incorporated into cosmetic products.

                            </Paragraph>
                            <Paragraph>
                            The slow-growing nature of sandalwood (it takes 15-20 years to mature) contributes to
its value. However, by choosing Elegant Orchards Estate, you're essentially bypassing
the waiting period. Their pre-planted trees give you a head start, allowing you to enjoy
the financial benefits sooner.

                            </Paragraph>
                        </Section>

                        <Section>
                            <SectionTitle id="benefits">Benefits Beyond Financial Gain</SectionTitle>
                            <Paragraph>
                            While the long-term financial rewards are a significant advantage, there are other
reasons to consider incorporating sandalwood(sandalwood plant) into your farmland.
Sandalwood trees are naturally drought-resistant, making them ideal for drier climates.
They also act as windbreaks, protecting your other crops from harsh weather
conditions. Additionally, sandalwood trees can improve soil health by fixing nitrogen in
the ground. This creates a more sustainable and resilient ecosystem for your entire
farm.


                            </Paragraph>
                            
                           
                        </Section>

                        <Section>
                            <SectionTitle id="investment">Elegant Orchards Estate: Your Partner in Sandalwood Success</SectionTitle>
                            

                            <Paragraph>
                            Elegant Orchards Estate doesn't just provide you with pre-planted sandalwood trees;
they offer ongoing support. Their team of experts can guide you through the care and
maintenance of your red sandalwood trees, ensuring they reach their full potential. This
includes:


                            </Paragraph>
                           
                            <List>
                                <ListItem>
                                Expert advice on sustainable sandalwood cultivation practices
                                </ListItem>
                                <ListItem>
                                Guidance on proper harvesting techniques

                                </ListItem>
                                <ListItem>
                                Assistance in navigating the sandalwood market
                                </ListItem>
                            </List>
                            <Paragraph>
                            By partnering with Elegant Orchards Estate, you're not just investing in sandalwood -
                            you're investing in knowledge and expertise.
                            </Paragraph>
                        </Section>

                        <Section>
                            <SectionTitle id="farmland-sale">Taking the First Step Towards a Rewarding Future</SectionTitle>
                            <Paragraph>
                            Are you interested in learning more about incorporating sandalwood into your farm and
unlocking its long-term financial rewards ? <a href="/contact" target="_blank" rel="noopener noreferrer">Contact Elegant Orchards Estate</a> today.
They can answer your questions, discuss specific plot options, and help you embark on
a journey towards a sustainable and profitable future.

                            </Paragraph>
                            <Paragraph>
                            Own a piece of land with the potential for long-term financial gain. Choose Elegant
                            Orchards Estate and experience the rewarding world of sandalwood cultivation.
                            </Paragraph>


                        
                           
                            

                        </Section>

                       

                    </MainContent>

                    <Sidebar>
                        <TableOfContents>
                            <TOCTitle><strong>Table of Contents</strong></TOCTitle>
                            <TOCList>
                                <TOCItem><a href="#introduction">Introduction</a></TOCItem>
                                <TOCItem><a href="#why-invest">The Allure of Sandalwood</a></TOCItem>
                                <TOCItem><a href="#benefits">Benefits Beyond Financial Gain</a></TOCItem>
                                <TOCItem><a href="#investment">Your Partner in Sandalwood Success</a></TOCItem>
                                <TOCItem><a href="#farmland-sale">Taking the First Step Towards a Rewarding Future</a></TOCItem>
                            </TOCList>
                        </TableOfContents>
                    </Sidebar>
                </Content>
            </BlogContainer>
        </>
    );
};

export default SandalwoodBlogs;
