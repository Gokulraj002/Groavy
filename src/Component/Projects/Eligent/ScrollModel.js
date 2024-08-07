import React, { useEffect, useState, useCallback } from "react";
import { Modal, Button } from "react-bootstrap";
import EligantMainForm from "./EligantMainForm"; // Assuming you have this component
import Banner from "./ElegantImages/elegant-banner2.jpg"; // Replace with the correct path to your image
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function ScrollModal() {
  const [showModal, setShowModal] = useState(false);

  const showModalCallback = useCallback(() => {
    setShowModal(true);
  }, []);

  useEffect(() => {
    const timer = setTimeout(showModalCallback, 10000); 

    return () => {
      clearTimeout(timer);
    };
  }, [showModalCallback]);

  const handleClose = () => setShowModal(false);

  return (
    <>
      <div className="aos">
        <Modal
          show={showModal}
          onHide={handleClose}
          id="enquiryModal"
          tabIndex="-1"
          aria-labelledby="enquiryModalLabel"
          aria-hidden="true"
          dialogClassName="modal-lg"
          fade
        >
          <Modal.Header className="bg-white">
            <h3 className="para-color">
              Dont Wait to Buy a FarmLand Buy a FarmLand and Wait
            </h3>
            <Button
              variant="danger"
              onClick={handleClose}
              style={{ marginLeft: "auto" }}
            >
              <FontAwesomeIcon icon={faTimes} />
            </Button>
          </Modal.Header>

          <Modal.Body>
            <div className="row bg-lght">
              <div className="col-12 col-lg-6 ">
                <EligantMainForm />
              </div>
              <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center p-4 p-0" >
                <img src={Banner} alt="Eligent orchards-Banner" width={'100%'} height={'auto'} className="w-100" />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger d-block mx-auto" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default ScrollModal;
