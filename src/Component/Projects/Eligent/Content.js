import React, { useState } from "react";
import { FaCheckCircle, FaDownload } from "react-icons/fa";
import "./css/Content.css";
import Modal from "react-bootstrap/Modal";
import { notification } from "antd";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import axios from "axios";
import "./css/EligantForm.css";
import ReactGA from "react-ga4";
import EligentYoutupe from "./EligentYoutupe";
 
 
function Content() {
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
  const [srdId] = useState("66ab7a3a5d8defb63e6e88a4"); // Added srdId
 
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
      await sendWhatsAppMessage(formData);
      await submitToWeb3Forms(formData);
      await submitToSellDo(formData);
 
      setFormData({
        name: "",
        whatsapp: "",
        email: "",
      });
      showSuccessNotification();
    } catch (error) {
      console.error("Error submitting form:", error);
      notification.error({
        message: "Form Submission Failed",
        description: error.message,
        placement: "topRight",
      });
    }
  };
 
  const sendWhatsAppMessage = async (formData) => {
    const apiKey =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ODUxZDU5OTU0NWU4NDY3YzVmMTYwMyIsIm5hbWUiOiJHUk9BVlkgQlVJTERDT04iLCJhcHBOYW1lIjoiQWlTZW5zeSIsImNsaWVudElkIjoiNjY4NTFiMzhhZDFjNWM0MzI2NjQzZTNjIiwiYWN0aXZlUGxhbiI6IkJBU0lDX01PTlRITFkiLCJpYXQiOjE3MjExMTMxNTh9.qQs5YmzpfDlyi0cCUx-YU62nRB_WqPo4IVERSyIouoo";
 
    const payload = {
      apiKey,
      campaignName: "EOEAPI",
      destination: `+91${formData.whatsapp}`,
      userName: formData.name,
      templateParams: [],
      source: "new-landing-page form",
      media: {
        url: "https://www.groavy.com/broucher[1].pdf",
        filename: "ElegantOrchardsEstate"
      },
      buttons: [],
      carouselCards: [],
      location: {}
    };
 
    console.log("Request payload:", payload);
 
    try {
      const response = await axios.post(
        "https://backend.api-wa.co/campaign/a2z-sms-services/api/v2",
        payload,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("WhatsApp Message Sent:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error sending WhatsApp message:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error setting up request:", error.message);
      }
      throw new Error(`Failed to send WhatsApp message: ${error.message}`);
    }
  };
 
  const submitToWeb3Forms = async (formData) => {
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'c225c50d-a419-4ade-ad75-e53473c5e568',
          name: formData.name,
          email: formData.email,
          subject: 'New Lead from Elegant Orchards Form',
          whatsapp: formData.whatsapp
        })
      });
     
      const result = await response.json();
      if (!result.success) {
        throw new Error('Web3Forms submission failed');
      }
      console.log("Web3Forms submission successful:", result);
    } catch (error) {
      console.error('Error submitting to Web3Forms:', error);
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
 
  const [showModal, setShowModal] = useState(false);
 
  const handleEnquiryClick = () => {
    ReactGA.event({
      category: "Enquiry",
      action: "Click Enquiry Now Button",
      label: "Enquiry Form Opened",
    });
    setShowModal(true);
  };
 
  const handleClose = () => {
    setShowModal(false);
  };
 
  return (
    <div className="bg">
      <div className="container pb-5 mt-2">
        <div className="row aos">
          <h2 className="font1 text-center py-3" style={{ color: "#F9AB24" }}>
            Luxury farmland in Perasandra
          </h2>
 
          <div className="col-12 col-lg-6  aos" data-aos="fade-down-right">
            <EligentYoutupe />
          </div>
          <div
            className="col-12 col-lg-6 aos  ps-4 ps-md-2"
            data-aos="fade-down-left"
          >
            <div className="content-details  text-white">
              <p className="para-color1">
                <FaCheckCircle className="icon-color me-2 " />
                Location: Chikkaballapura Taluk, Jeeganahalli Village,
                Chickballapur District.
              </p>
              <p className="para-color1">
                <FaCheckCircle className="icon-color me-2 " /> Dispersed
                throughout 28 acres of development with a forest theme.
              </p>
              <p className="para-color1">
                <FaCheckCircle className="icon-color me-2 " /> Plot Size:
                Commences at 5,700 square feet and increases to 10,000 square
                feet.
              </p>
              <p className="para-color1">
                <FaCheckCircle className="icon-color me-2 " />
                Plantations Include: Sandalwood , Mahogany , Mango ,Cashew,
                Sapota , Jackfruit And more.
              </p>
              <p className="para-color1">
                <FaCheckCircle className="icon-color me-2 " /> Each block has
                25-30 trees, therefore embrace the natural world.
              </p>
              <p className="para-color1">
                <FaCheckCircle className="icon-color me-2 " /> Luxurious
                Amenities Provided : Premium Club House, Swimming Pool ,
                Cafeteria ,30 Feet Wide Roads , Water Supply from 5 Borewells ,
                Solar Power , And 20+ More Amenities.
              </p>
              <p className="para-color1">
                <FaCheckCircle className="icon-color me-2 " /> Invest in your
                future and discover the elegance of rural living.
              </p>
              <button className="button-48" onClick={handleEnquiryClick}>
                <span className="text">
                  <FaDownload className="me-2" />
                  Download Brochure
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal
        data-aos="flip-down"
        data-aos-easing="linear"
        data-aos-duration="800"
        show={showModal}
        onHide={handleClose}
        dialogClassName="modal-md"
        aria-labelledby="enquiryModalLabel"
        centered
      >
        <Modal.Body
          data-aos="flip-up"
          data-aos-easing="linear"
          data-aos-duration="800"
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
 
export default Content;
