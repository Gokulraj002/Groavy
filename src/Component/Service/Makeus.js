import React from "react";
import { Row, Col } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import "./service.css";
const Makeus = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.1, // Trigger when 10% of the element is in view
  });
  return (
    <div>
      <div className="container-fluid py-5 bg-light">
        <div className="container text-center para-color1">
          <div className="">
            <h2 className="text-center mb-4 font1 color">Offering Services</h2>
            <div className="row">
              <div className="col-12 col-md-6 col-lg-3 mb-4 aos">
                <div className="card h-100">
                  <div className="card-body d-flex flex-column align-items-center">
                    <i className="fas fa-home fa-2x mb-3 color1"></i>
                    <h4 className="card-title ">Residential Development</h4>
                    <p className="card-text">
                      Our company focuses mainly on the construction of
                      residential buildings with good standards and amenities
                      for home living with provision made for the family.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" col-12 col-md-6 col-lg-3 mb-4">
                <div className="card h-100">
                  <div className="card-body d-flex flex-column align-items-center">
                    <i className="fas fa-building fa-2x mb-3 ic-clr color1"></i>
                    <h4 className="card-title">Commercial Development</h4>
                    <p className="card-text">
                      We also have specialization in the commercial real estate
                      which includes congregations of well planned and
                      architected offices, and shopping malls and stores.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" col-12 col-md-6 col-lg-3 mb-4">
                <div className="card h-100">
                  <div className="card-body d-flex flex-column align-items-center">
                    <i className="fas fa-handshake fa-2x mb-3 color1"></i>
                    <h4 className="card-title">Property Management</h4>
                    <p className="card-text">
                      We are a property management company that will oversee the
                      projects and properties that you have invested in and
                      ensure them they are productive.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 mb-4 aos">
                <div className="card h-100">
                  <div className="card-body d-flex flex-column align-items-center">
                    <i className="fas fa-project-diagram fa-2x mb-3 color1"></i>
                    <h4 className="card-title">Project Planning</h4>
                    <p className="card-text">
                      Our project planning services include site analysis,
                      feasibility studies, and strategic planning to ensure
                      successful project execution.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 mb-4">
                <div className="card h-100">
                  <div className="card-body d-flex flex-column align-items-center">
                    <i className="fas fa-drafting-compass fa-2x mb-3 color1"></i>
                    <h4 className="card-title">Architectural Design</h4>
                    <p className="card-text">
                      Our architectural design services focus on creating
                      aesthetically pleasing and functional spaces that meet our
                      clients' needs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 mb-4">
                <div className="card h-100">
                  <div className="card-body d-flex flex-column align-items-center">
                    <i className="fas fa-cogs fa-2x mb-3 color1"></i>
                    <h4 className="card-title">Construction Management</h4>
                    <p className="card-text">
                      We offer end-to-end construction management services to
                      ensure that projects are completed on time, within budget,
                      and to the highest standards.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 mb-4">
                <div className="card h-100">
                  <div className="card-body d-flex flex-column align-items-center">
                    <i className="fas fa-chart-line fa-2x mb-3 color1"></i>
                    <h4 className="card-title">Market Analysis</h4>
                    <p className="card-text">
                      Our market analysis services provide valuable insights
                      into real estate trends, helping clients make informed
                      investment decisions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 mb-4">
                <div className="card h-100">
                  <div className="card-body d-flex flex-column align-items-center">
                    <i className="fas fa-user-shield fa-2x mb-3 color1"></i>
                    <h4 className="card-title">Legal Compliance</h4>
                    <p className="card-text">
                      We ensure all projects comply with legal and regulatory
                      requirements, providing peace of mind for our clients.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="">
        <div className="container-fluid buggy pt-5 pb-3">
          <div className="container para-color1">
            <div className="aos">
              <h3 className="text-center text-white mb-4 font2 color">
                OUR UNIQUE ASPECTS
              </h3>
              <Row className="justify-content-center ">
                <Col md={4} className="mb-3 aos" data-aos="fade-down-right">
                  <div className="text-center">
                    <i
                      className="fas fa-headset bg-light p-3 color"
                      style={{ fontSize: "2rem", borderRadius: " 50%" }}
                    ></i>
                    <h3 className="pt-3  color1  ">24/7 SUPPORT</h3>
                    <p className="p-md-3 text-white justify">
                      Support is also available at any time by dialling our
                      customer care service accessible 24/7/365 for your
                      convenience. Whether it is a requirement of agriculture
                      land on sale, or start of sandalwood plantation business
                      or you are looking for farm plots near Bangalore we are
                      available to help you round the clock.
                    </p>
                  </div>
                </Col>
                <Col md={4} className="mb-3 aos" data-aos="fade-down">
                  <div className="text-center">
                    <i
                      className="fas fa-smile bg-light p-3 color"
                      style={{ fontSize: "2rem", borderRadius: " 50%" }}
                    ></i>
                    <h3 className="pt-3  color1">100% SATISFACTION</h3>
                    <p className="p-md-3 text-white justify">
                      Farmland Invest company mission is to ensure that all its
                      customers are served to the best of their expectations. We
                      deal in quality farmland for sale; farmland for investment
                      at an affordable price to our clients. It helps whether
                      you are in a quest for the best farmland near Bangalore or
                      if you are interested in investing in agricultural plots.
                      It is only natural to ensure that the customer has a great
                      time throughout the process and has great things to say
                      about the support as well.
                    </p>
                  </div>
                </Col>
                <Col md={4} className="mb-3 aos" data-aos="fade-down-left">
                  <div className="text-center">
                    <i
                      className="fas fa-users bg-light p-3 color"
                      style={{ fontSize: "2rem", borderRadius: " 50%" }}
                    ></i>
                    <h3 className="pt-3 color1 ">TEAM OF EXPERTS</h3>
                    <p className="p-md-3 text-white justify">
                      Here at Farmland Invest, we have well trained human
                      resource for any services you might require in real
                      estates. We have a highly experienced team that will guide
                      you into investing in the most profitable agricultural
                      land. Whether you are currently in the market for farm
                      plots for sale in , let us ensure that your time in the
                      real estate market is both effective and fun.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </section>
      <div
        className="container-fluid p-2 mt-2"
        style={{ backgroundColor: "#f59b25" }}
      >
        <div className="container para-color2">
          <div className="row g-0 " ref={ref}>
            <div className="col-6 col-md-3 p-md-5 py-3  text-center">
              <h2 className="mb-3 text-white">
                {inView ? <CountUp end={37} duration={4} /> : "0"}+
              </h2>
              <p>Projects Completed</p>
            </div>
            <div className="col-6 col-md-3 p-md-5 py-3 text-center">
              <h2 className="mb-3 text-white">
                {inView ? <CountUp end={100} duration={4} /> : "0"}+
              </h2>
              <p>Clients</p>
            </div>
            <div className=" col-6 col-md-3 p-md-5 py-3 text-center">
              <h2 className="mb-3 text-white">
                {inView ? <CountUp end={60} duration={4} /> : "0"}+
              </h2>
              <p>Employees</p>
            </div>
            <div className="col-6 col-md-3 p-md-5 py-3 text-center">
              <h2 className="mb-3 text-white">
                {inView ? <CountUp end={5} duration={4} /> : "0"}+
              </h2>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Makeus;
