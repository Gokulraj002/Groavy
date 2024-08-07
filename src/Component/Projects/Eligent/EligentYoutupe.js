import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import image from './ElegantImages/elegant-main.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const EligentYoutupe = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="container-fluid">
        <div className="container mt-2 text-center position-relative">
          <img
            src={image} // Replace with your image URL
            alt="Play Video"
            style={{ cursor: 'pointer' }}
            onClick={handleShow}
            className="img-fluid"
          />
          <div
            onClick={handleShow}
            className="position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center"
            style={{ width: '60px', height: '60px', cursor: 'pointer' }}
          >
            <FontAwesomeIcon icon={faPlay} size="2x" className="text-dark bg-white px-4 py-3 rounded-circle " />
          </div>
          <Modal show={show} onHide={handleClose} size="xl" centered>
            <Modal.Header closeButton>
              <Modal.Title>Video</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <iframe
                className="w-100"
                height="500"
               src="https://www.youtube.com/embed/q_WEbeEbqV8?autoplay=1&mute=0"
                title="YouTube video player"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </Modal.Body>
            <Modal.Footer>
              <button className="btn-danger d-block mx-auto" onClick={handleClose}>
                Close
              </button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default EligentYoutupe;
