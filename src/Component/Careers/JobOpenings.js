import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const JobOpenings = () => {
  // Sample data for job openings
  const jobOpenings = [
    {
      title: "HR/Account",
      location: "Sahakara Nagar, Bangalore",
      description: `Groavy Buildcon is seeking professionals with 2-3 years of experience in HR and Accounting. The ideal candidate will have expertise in GST & TDS Return Filing, Bank Reconciliation, Payroll Management, and ensuring compliance with labor laws. Join our innovative team dedicated to sustainability and real estate excellence. Apply now to grow your career with us!`,
      applyLink: "tel:+6366953635",
      color: "#FFA07A", // Light Salmon
    },
    {
      title: "Accountant",
      location: "Sahakaranagar, Bangalore",
      description:
        "Groavy Buildcon is seeking professionals with 3+ years of experience in Accounting. The ideal candidate will excel in Financial Record Keeping, Accounts Payable & Receivable, Payroll Management, GST & TDS Return Filing, Bank Reconciliation, and Preparing Financial Statements. Join our innovative team dedicated to sustainability and real estate excellence. Apply now to grow your career with us!",
      applyLink: "tel:+6366953635",
      color: "#98FB98", // Pale Green
    },
    {
      title: "Inside Sales Manager",
      location: "Sahakaranagar, Bangalore",
      description:
        "Groavy Buildcon is seeking professionals with 2-3 years of experience in Inside Sales. The ideal candidate will have good communication skills in Kannada, English, and Hindi, excel in customer service, and maintain good relationships. Responsibilities include monitoring inside sales data, motivating the sales team, cold calling, developing sales strategies, and demonstrating strong leadership and organizational skills. Join our innovative team dedicated to sustainability and real estate excellence. Apply now to grow your career with us!",
      applyLink: "tel:+6366953635",
      color: "#87CEFA", // Light Sky Blue
    },
    {
      title: "Civil Engineer",
      location: "Sahakaranagar, Bangalore",
      description:
        "Groavy Buildcon is seeking professionals with 3+ years of experience in Project Planning and Management, Technical and Design Oversight, Site Supervision, Coordination and Communication, Quality and Compliance, and Documentation. Join our innovative team dedicated to sustainability and real estate excellence. Apply now to grow your career with us!",
      applyLink: "tel:+6366953635",
      color: "#DDA0DD", // Plum
    },
    {
      title: "Search Engine Optimization (SEO)",
      location: "Sahakaranagar, Bangalore",
      description:
        "Groavy Buildcon is seeking professionals with 1-2 years of experience in on-page and off-page SEO, keyword research, social media handling, Graphic Designing in Canva, and blog content creation. Join our innovative team dedicated to sustainability and real estate excellence. Apply now to grow your career with us!",
      applyLink: "tel:+6366953635",
      color: "#FFDAB9", // Peach Puff
    },
  ];

  return (
    <Container fluid className="pb-5 bg-light">
      <h4
        className="text-center font11 text-center  mt-md-1 py-3"
        style={{ color: "#3A6958" }}
      >
        Current Job Openings
      </h4>
      <Container>
        <Row className="justify-content-center text-start ">
          {jobOpenings.map((job, index) => (
            <Col key={index} xs={12} sm={6} lg={4} className="mb-4">
              <Card
                className="h-100 shadow-sm bg-white"
                style={{
                  borderRadius: "15px",
                  overflow: "hidden",
                }}
              >
                <Card.Body className="d-flex flex-column">
                  <Card.Title
                    className="text-start pb-3 color"
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: "bold",
                    }}
                  >
                    {job.title}
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted para-color">
                    <b className="text-dark">Location</b> : {job.location}
                  </Card.Subtitle>
                  <Card.Text className="flex-grow-1 para-color text-start">
                    <b>Description</b> : {job.description}
                  </Card.Text>
                  <Button
                    variant="primary"
                    href={job.applyLink}
                    className="mt-auto"
                    style={{
                      backgroundColor: "#255946",
                      borderColor: "#255946",
                      transition: "all 0.3s ease",
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = "#FAB338";
                      e.target.style.borderColor = "#FAB338";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = "#255946";
                      e.target.style.borderColor = "#255946";
                    }}
                  >
                    Apply Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default JobOpenings;
