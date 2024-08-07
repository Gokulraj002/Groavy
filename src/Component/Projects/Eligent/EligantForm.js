import React from "react";
import Modal from "react-bootstrap/Modal";
import EligantMainForm from "./EligantMainForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import LayoutImage from "./ElegantImages/elegant-main.jpg";
 
const EligantForm = () => {
  const [showModal, setShowModal] = React.useState(false);
 
  const handleEnquiryClick = () => {
   
    setShowModal(true);
  };
 
 
  const handleClose = () => {
    setShowModal(false);
  };
 
  const modalBodyClassName = showModal ? "modal-body-with-animation" : "";
 
  return (
    <>
      <div className="container-fluid py-md-5 py-3 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 p-lg-3">
              <h2 className="color">Luxury Farm Sale in Chikkaballapura</h2>
              <p className="justify para-color">
                Discover a 28-acre plot in Jeeganahalli Village, Chikkaballapura
                Taluk, Chikkaballapura District. This agricultural land is a
                nature's gift with sandalwood trees, mahogany trees, mango,
                cashew, sapota, and jackfruit in a pollution-free environment.
                <br />
                Located just 40 minutes from Nandi Hills and 59 minutes from
                Bangalore International Airport, it offers easy access from NH7.
                Nearby attractions include the Veerapuram Bird Sanctuary,
                Lepakshi Historical Temple, and the Isha Foundation.
                <br />
                With amenities like a clubhouse, swimming pool, and solar
                power,the estate has a 10% built-up area and 30% super built-up
                area most suitable for farm houses/ cottages. Benefit from this
                farm land for sale and have red sandalwood and mahogany on your
                compound. Suitable for those having requirements of lands for
                sale in Bangalore, plots for sale in Chikkaballapura or farm
                land around Bangalore.
              </p>
              <div className="row" style={{ marginBottom: "20px" }}>
                <div className="col-4 text-center">
                  <span style={{ color: "green", fontSize: "24px" }}>
                    <i className="fas fa-tree"></i>
                  </span>
                  <p style={{ marginTop: "10px" }}> Themed Plantations</p>
                </div>
                <div className="col-4 text-center">
                  <span style={{ color: "green", fontSize: "24px" }}>
                    <i className="fas fa-map-marker-alt"></i>
                  </span>
                  <p style={{ marginTop: "10px" }}>Across 28 acres</p>
                </div>
                <div className="col-4 text-center">
                  <span style={{ color: "green", fontSize: "24px" }}>
                    <i className="fas fa-home"></i>
                  </span>
                  <p style={{ marginTop: "10px" }}>Start from 5,700 sq.ft</p>
                </div>
              </div>
 
              <h6 className="text-center" style={{ marginBottom: "10px" }}>
                Get More Details:
              </h6>
              <button
                className="button-48 mx-auto d-block"
                onClick={handleEnquiryClick}
              >
                <span className="text">
                  <FontAwesomeIcon icon={faInfoCircle} className="me-2" />{" "}
                  Enquiry Now
                </span>
              </button>
            </div>
            <div className="col-12 col-lg-6  pt-md-0 mt-3 mt-md-4 ">
              <img
                className="w-100 mx-auto d-block zoomable-image"
                src={LayoutImage}
                width={"100%"}
                height={"auto"}
                alt="Farmlands zoom"
              />
            </div>
          </div>
        </div>
      </div>
 
      <Modal
        data-aos="flip-down"
        data-aos-easing="linear"
        data-aos-duration="900"
        show={showModal}
        onHide={handleClose}
        dialogClassName="modal-md"
        aria-labelledby="enquiryModalLabel"
        centered
      >
        <Modal.Body
          className={modalBodyClassName}
          data-aos="flip-down"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <EligantMainForm />
        </Modal.Body>
      </Modal>
    </>
  );
};
 
export default EligantForm;
 
 