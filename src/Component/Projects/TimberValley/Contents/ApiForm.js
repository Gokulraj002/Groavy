import React, { useState } from "react";
import { FaDownload } from "react-icons/fa";
import Modal from "react-bootstrap/Modal";
import { notification } from "antd";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import axios from "axios";
import "../css/TimberHome.css";

function ApiForm() {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    email: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    whatsapp: "",
    email: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [srdId] = useState("66b1c4f2a3d8553ee2731539"); // Added srdId
  

  const handleChange = (event) => {
    const { name, value } = event.target;
    let error = "";

    if (name === "whatsapp") {
      const regex = /^[0-9\b]+$/;
      if (value === "" || regex.test(value)) {
        if (value.length > 0 && ["1", "2", "3", "4", "5"].includes(value[0])) {
          error = "Enter a valid number";
        }
        setFormData({
          ...formData,
          [name]: value,
        });
      }
    } else if (name === "name") {
      const regex = /^[a-zA-Z\s]*$/;
      if (!regex.test(value)) {
        error = "Don't use special characters or numbers in the name";
      }
      setFormData({
        ...formData,
        [name]: value,
      });
    } else if (name === "email") {
      if (!value.endsWith("@gmail.com")) {
        error = "Email must end with @gmail.com";
      }
      setFormData({
        ...formData,
        [name]: value,
      });
    }

    setErrors({
      ...errors,
      [name]: error,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const hasErrors = Object.values(errors).some((error) => error !== "");
    if (hasErrors) {
      return;
    }
    console.log("Form Data:", formData);
    try {
      // await sendWhatsAppMessage(formData);
      await submitToWeb3Forms(formData);
      await submitToSellDo(formData);

      setFormData({
        name: "",
        whatsapp: "",
        email: "",
      });
      showSuccessNotification();
      setShowModal(false);
    } catch (error) {
      console.error("Error submitting form:", error);
      notification.error({
        message: "Form Submission Failed",
        description: error.message,
        placement: "topRight",
      });
    }
  };

  // const sendWhatsAppMessage = async (formData) => {
  //   const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ODUxZDU5OTU0NWU4NDY3YzVmMTYwMyIsIm5hbWUiOiJHUk9BVlkgQlVJTERDT04iLCJhcHBOYW1lIjoiQWlTZW5zeSIsImNsaWVudElkIjoiNjY4NTFiMzhhZDFjNWM0MzI2NjQzZTNjIiwiYWN0aXZlUGxhbiI6IkJBU0lDX01PTlRITFkiLCJpYXQiOjE3MjExMTMxNTh9.qQs5YmzpfDlyi0cCUx-YU62nRB_WqPo4IVERSyIouoo";
  
  //   const payload = {
  //     apiKey,
  //     campaignName: "GroavyApiTest",
  //     destination: `+91${formData.whatsapp}`,
  //     userName: formData.name,
  //     templateParams: [],
  //     source: "new-landing-page form",
  //     media: {
  //       url: "https://www.groavy.com/broucher[1].pdf",
  //       filename: "ElegantOrchardsEstate"
  //     },
  //     buttons: [],
  //     carouselCards: [],
  //     location: {}
  //   };
  
  //   console.log("Request payload:", payload);
  
  //   try {
  //     const response = await axios.post(
  //       "https://backend.api-wa.co/campaign/a2z-sms-services/api/v2",
  //       payload,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${apiKey}`,
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     console.log("WhatsApp Message Sent:", response.data);
  //     return response.data;
  //   } catch (error) {
  //     console.error("Error sending WhatsApp message:", error);
  //     if (error.response) {
  //       console.error("Response data:", error.response.data);
  //       console.error("Response status:", error.response.status);
  //       console.error("Response headers:", error.response.headers);
  //     } else if (error.request) {
  //       console.error("No response received:", error.request);
  //     } else {
  //       console.error("Error setting up request:", error.message);
  //     }
  //     throw new Error(`Failed to send WhatsApp message: ${error.message}`);
  //   }
  // };

  const submitToWeb3Forms = async (formData) => {
    const web3FormsAccessKey = "c225c50d-a419-4ade-ad75-e53473c5e568";

    try {
      const response = await axios.post("https://api.web3forms.com/submit", {
        access_key: web3FormsAccessKey,
        name: formData.name,
        email: formData.email,
        subject: 'New Lead from Timber Valley Form',
        whatsapp: formData.whatsapp,
      });

      console.log("Web3Forms submission successful:", response.data);
    } catch (error) {
      console.error("Error submitting to Web3Forms:", error);
      throw new Error(`Failed to submit to Web3Forms: ${error.message}`);
    }
  };

  const submitToSellDo = async (formData) => {
    const apiEndpoint = "https://app.sell.do/api/leads/create";
    const apiKey = "3d9268fcab7e312b4b9cea510faafd1c";
    const response = await axios.post(apiEndpoint, null, {
      params: {
        "sell_do[form][lead][name]": formData.name,
        "sell_do[form][lead][email]": formData.email,
        "sell_do[form][lead][phone]": formData.whatsapp,
        "sell_do[campaign][srd]": srdId,
        api_key: apiKey,
      },
    });

    if (response.status !== 200) {
      throw new Error('Failed to submit to Sell.Do');
    }
  };
  const showSuccessNotification = () => {
    notification.success({
      message: "Form Submitted",
      description: "Thank you for choosing our idea to share with you.",
      placement: "topRight",
    });
  };

  const handleEnquiryClick = () => {

    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="">
      <button
        className="d-block text-white mx-auto rounded-pill mt-4 p-2 btn btn-md " 
        onClick={handleEnquiryClick}
        style={{backgroundColor:"rgb(249, 171, 36)"}}
      >
        <span className="text">
          <FaDownload className="me-2" />
        </span>
        Download Brochure
      </button>

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
          data-aos="flip-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div className="form-container position-relative">
            <form
              id="eligantform"
              className="animated fadeInUp shadow-lg para-color"
              onSubmit={handleSubmit}
            >
              <h3 className="text-center para-color3 mb-4">
                Fill this to Change Future{" "}
              </h3>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <span className="text-danger">*</span>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name*"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                {errors.name && (
                  <p style={{ color: "red", fontSize: "12px" }}>
                    {errors.name}
                  </p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="whatsapp">WhatsApp No</label>
                <span className="text-danger">*</span>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  placeholder=" WhatsApp Number*"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  maxLength={10}
                  pattern="[0-9]*"
                  required
                />
                {errors.whatsapp && (
                  <p style={{ color: "red", fontSize: "12px" }}>
                    {errors.whatsapp}
                  </p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <span className="text-danger">*</span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && (
                  <p style={{ color: "red", fontSize: "12px" }}>
                    {errors.email}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="eligentformsubmit mx-auto d-block rounded-pill"
              >
                Submit
              </button>
              <div className="contact-buttons text-center mt-5">
                <a href="tel:6366953631"
                  className="btn btn-info btn-sm para-color1 rounded-5 g-0"
                >
                  <FaPhoneAlt /> Call
                </a>
                <a href="https://wa.me/6366829999"
                  className="btn btn-sm mx-1 mx-md-3 btn-success para-color1 rounded-5"
                >
                  <FaWhatsapp /> WhatsApp
                </a>
                <a href="mailto:support@groavy.com"
                  className="btn btn-sm btn-danger para-color1 rounded-5"
                >
                  <FaEnvelope /> Email
                </a>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ApiForm;