import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { notification } from "antd"; // Import Ant Design notification
import "./contactform.css";
import "../Home/form.css";
import { Link } from "react-router-dom";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    note: "",
  });

  // State to hold SRD ID
  const [srdId, setSrdId] = useState("66b1c473e1148751ac3e7e83"); // Default SRD ID

  useEffect(() => {
    // Check URL parameters or other means to set SRD ID
    const urlParams = new URLSearchParams(window.location.search);
    const source = urlParams.get("source"); // Adjust based on your URL parameter

    if (source === "googleads") {
      setSrdId("googleads_srd_id"); // Replace with actual SRD ID
    } else if (source === "youtube") {
      setSrdId("youtube_srd_id"); // Replace with actual SRD ID
    }

    window.dataLayer = window.dataLayer || [];

    const trackingScript = document.createElement("script");
    trackingScript.src = "//forms.cdn.sell.do/t/66a0cf81e11487196f31a3a2.js";
    trackingScript.async = true;
    document.head.appendChild(trackingScript);

    const formScript = document.createElement("script");
    formScript.src =
      "//forms.cdn.sell.do/t/forms/66a0cf81e11487196f31a3a2/66a0d02158f1e74059a7166c.js";
    formScript.setAttribute("data-form-id", "66a0d02158f1e74059a7166c");
    formScript.async = true;
    document.getElementById("sell-do-form-container").appendChild(formScript);

    return () => {
      if (trackingScript.parentNode) {
        trackingScript.parentNode.removeChild(trackingScript);
      }
      if (formScript.parentNode) {
        formScript.parentNode.removeChild(formScript);
      }
    };
  }, []);

  const showSuccessNotification = useCallback(() => {
    notification.success({
      message: "Form Submitted",
      description: "Your form has been successfully submitted.",
      placement: "topRight",
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const apiEndpoint = "https://app.sell.do/api/leads/create";
    const apiKey = "3d9268fcab7e312b4b9cea510faafd1c";

    try {
      const response = await axios.post(apiEndpoint, null, {
        params: {
          "sell_do[form][lead][name]": formData.name,
          "sell_do[form][lead][email]": formData.email,
          "sell_do[form][lead][phone]": formData.phone,
          "sell_do[form][note][content]": formData.note,
          api_key: apiKey,
          "sell_do[campaign][srd]": srdId, // Use dynamic SRD ID
        },
      });

      if (response.status === 200) {
        showSuccessNotification();
        // Reset form fields after successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          note: "",
        });
      }
    } catch (error) {
      console.error("There was an error submitting the form!", error);
    }
  };

  const handleWhatsappClick = () => {
    window.open("https://wa.me/6366829999", "_blank");
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:support@groavy.com";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:6366829999";
  };

  const handleLinkClick = (url, e) => {
    e.preventDefault();
    window.open(url, "_blank");
  };

  const handleLinkedinClick = () => {
    window.open(
      "https://www.linkedin.com/company/103567741/admin/dashboard/",
      "_blank"
    );
  };

  return (
    <div className="container-fluid bg-light py-5 contact-containerfluid">
      <div className="container contact-container">
        <div className="row">
          <div className="d-flex mb-3 flex-column">
            <h1 className="font2 text-center mt-4 color">
              Helping you is our priority
            </h1>
          </div>
          <div className="col-lg-4 col-md-12 text-white ps-4 shadow-lg">
            <div className="mb-4 mt-md-3">
              <h2 className="h3 ms-2">Contact Information</h2>
              <p className="opacity-50 ms-2">
                <small>
                  Fill out the form and we will get back to you within 24 hours.
                </small>
              </p>
            </div>
            <div className="d-flex flex-column px-0">
              <ul className="m-0 p-0">
                <li className="d-flex justify-content-start align-items-center mb-4 para-color1">
                  <span
                    style={{ cursor: "pointer" }}
                    className="opacity-75 d-flex align-items-center me-3 fs-4 ms-2"
                  >
                    <FontAwesomeIcon icon={faPhone} />
                  </span>
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={handlePhoneClick}
                  >
                    +91 6366829999
                  </span>
                </li>
                <li className="d-flex align-items-center mb-4 para-color1">
                  <span
                    style={{ cursor: "pointer" }}
                    className="opacity-75 d-flex align-items-center me-3 fs-4 ms-2"
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={handleEmailClick}
                  >
                    support@groavy.com
                  </span>
                </li>
                <li className="d-flex justify-content-start align-items-center mb-4 para-color1">
                  <span className="opacity-75 d-flex align-items-center me-3 fs-3 ms-2">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                  </span>
                  <Link
                    to="#"
                    className="text-decoration-none"
                    style={{ color: "#ccc" }}
                    onClick={(e) =>
                      handleLinkClick(
                        "https://maps.google.com/?q=Groavy+Buildcon",
                        e
                      )
                    }
                  >
                    Address: 183, 2nd Floor,G Block opposite to Reliance Trends,
                    Sahakara Nagar Main rd, Byatarayanapura, Bengaluru,
                    Karnataka 560092
                  </Link>
                </li>
                <li className="d-flex justify-content-start align-items-center mb-4 para-color1">
                  <span
                    style={{ cursor: "pointer" }}
                    className="opacity-75 d-flex align-items-center me-3 fs-4 ms-2"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </span>
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={handleWhatsappClick}
                  >
                    Whatsapp
                  </span>
                </li>
                <li className="d-flex justify-content-start align-items-center mb-4">
                  <span
                    style={{ cursor: "pointer" }}
                    className="opacity-75 d-flex align-items-center me-3 fs-3 ms-2"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </span>
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={handleLinkedinClick}
                  >
                    LinkedIn
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-8 col-md-12 px-5 rounded-3 shadow-lg">
            <form id="sell-do-form-container" onSubmit={handleFormSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="note" className="form-label">
                  Note
                </label>
                <textarea
                  className="form-control"
                  id="note"
                  name="note"
                  rows="3"
                  value={formData.note}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
