import React from "react";
import Modal from "react-bootstrap/Modal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import LayoutImage from "../imagesTimber/timber-main.png";
import TimberForm from "./TimberForm";

const HomeContent = () => {
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
      <div className="container-fluid  py-3 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 p-lg-3">
              <h2 className="timber fs-3 ">
                Timber Valley Farmhouses & Resorts
              </h2>
              <p className="justify para-color ">
                Find the perfect plot to buy at Timber Valley Farmhouses &
                Resorts- the best farmland for sale near Lepakshi. Away from the
                hustle and bustle of Bangalore near Lepakshi temple and near
                Nandi Hills, this exclusive gated community offers the chance to
                own a house in a high-end location. Our farmhouse plots offer
                beautiful scenic views of Anantapur district for those wanting
                to own a peaceful farmhouse or a wise investment. <br></br>Located just a
                few kilometers from Lepakshi, Timber Valley is one of the best
                resorts in Andhra Pradesh that offers rustic feel along with
                comforts. I want you to be able to experience the high end
                farmhouse close to Bangalore while making you live the country
                life. Truly, our location is excellent to be one’s weekend
                get-away since it is close to the Veerabhadra temple, Lepakshi
                handicraft center. <br></br>This is the opportunity you have been waiting
                for and a perfect time to own your farm plot in one of the best
                locations close to Lepakshi and Bangalore. Timber Valley is an
                environmentally friendly area to live that comes with the feel
                of a resort. Make your site visit appointment now and make your
                countryside dream a reality in the overall best farm resort.
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
                  <p style={{ marginTop: "10px" }}>Across 40 acres</p>
                </div>
                <div className="col-4 text-center">
                  <span style={{ color: "green", fontSize: "24px" }}>
                    <i className="fas fa-home"></i>
                  </span>
                  <p style={{ marginTop: "10px" }}>Luxury ClubHouses</p>
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
            <div className="col-12 col-lg-6  pt-md-3  mt-3 mt-md-5 ">
              <img
                className="w-100 mx-auto d-block zoomable-image h-75 "
                src={LayoutImage}
                width={"100%"}
                height={"550px"}
                alt="Timber Valley Farmhouse"
              />
            </div>
          </div>
        </div>
      </div>

      <Modal
        data-aos="flip-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
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
          data-aos-duration="1500"
        >
          <TimberForm />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default HomeContent;
