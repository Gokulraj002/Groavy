import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./nopage.css";

const NoPage = () => {
  return (
    <>
      <Helmet>
        <title>404 Page Not Found - GroavyBuildcon</title>
        <meta
          name="description"
          content="The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."
        />
        <meta
          name="keywords"
          content="404, page not found, GroavyBuildcon, error page"
        />
        <meta name="author" content="GroavyBuildcon" />
        <meta property="og:title" content=" 404 Page Not Found - GroavyBuildcon" />
        <meta
          property="og:description"
          content="The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."
        />
        <meta property="og:image" content="URL-to-your-featured-image" />
        <meta property="og:url" content="https://www.groavy.com/404" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="GroavyBuildcon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="404 Page Not Found - GroavyBuildcon" />
        <meta
          name="twitter:description"
          content="The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."
        />
        <meta name="twitter:image" content="URL-to-your-featured-image" />
        <meta name="twitter:site" content="@groavybuildcon_official" />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href="https://www.groavy.com/404" />
      </Helmet>
      
      <Container className="d-flex align-items-center justify-content-center my-5">
        <Row>
          <Col className="text-center">
            <div className="error-page">
              <h1 className="display-1">404</h1>
              <p className="lead">
                Oops! The page you're looking for doesn't exist.
              </p>
              <Link to="/">
                <Button variant="primary" size="lg">
                  Go Back Home
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NoPage;
