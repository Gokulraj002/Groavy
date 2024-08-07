import React, { useState, useEffect, useCallback } from "react";
import "./HomePagePopupForm.css"; // Adjust the path as necessary
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faUser, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios for API requests
 
const HomePagePopupForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    number: "",
  });
  const [srdId, setSrdId] = useState(""); // Initialize with empty string
 
  const navigate = useNavigate();
 
  useEffect(() => {
    AOS.init({ duration: 1000 });
 
    // Extract srdId from URL
    const urlParams = new URLSearchParams(window.location.search);
    const srdParam = urlParams.get("66ab7a3a5d8defb63e6e88a4");
    if (srdParam) {
      setSrdId(srdParam);
    }
 
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10000); // Show form after 10 seconds
 
    return () => clearTimeout(timer);
  }, []);
 
  useEffect(() => {
    setIsMounted(true);
 
    // Load the Sell.Do form script
    const script = document.createElement("script");
    script.src = "//forms.cdn.sell.do/t/forms/66a0cf81e11487196f31a3a2/66a3434a0d1851b6c0744ab6.js";
    script.dataset.formId = "66a3434a0d1851b6c0744ab6";
    script.async = true;
    document.body.appendChild(script);
 
    return () => {
      document.body.removeChild(script);
    };
  }, []);
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    let error = "";
 
    if (name === "number") {
      const regex = /^[0-9\b]+$/;
      if (value === "" || regex.test(value)) {
        if (
          value.length > 0 &&
          ["0", "1", "2", "3", "4", "5"].includes(value[0])
        ) {
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
        error = "Don't use special characters in the name";
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
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
 
    setFormErrors({
      ...formErrors,
      [name]: error,
    });
  };
 
  const validateForm = useCallback(() => {
    let valid = true;
    const newErrors = {
      name: "",
      email: "",
      number: "",
    };
 
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      valid = false;
    }
    if (!formData.number.trim()) {
      newErrors.number = "Number is required";
      valid = false;
    }
 
    setFormErrors(newErrors);
    return valid;
  }, [formData]);
 
  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const hasErrors = Object.values(formErrors).some((error) => error !== "");
      if (hasErrors) {
        return;
      }
      if (validateForm()) {
        try {
          // Submit to Sell.Do
          const apiEndpoint = "https://app.sell.do/api/leads/create";
          const apiKey = "3d9268fcab7e312b4b9cea510faafd1c";
 
          const response = await axios.post(apiEndpoint, null, {
            params: {
              "sell_do[form][lead][name]": formData.name,
              "sell_do[form][lead][email]": formData.email,
              "sell_do[form][lead][phone]": formData.number,
              "sell_do[campaign][srd]": srdId, // Include srdId
              api_key: apiKey,
            },
          });
 
          if (response.status === 200) {
            showSuccessNotification();
            div_hide();
            navigate("/");
            // Clear the form fields
            setFormData({
              name: "",
              email: "",
              number: "",
            });
          } else {
            throw new Error("Sell.Do submission failed");
          }
        } catch (error) {
          console.error("Error submitting form:", error);
          notification.error({
            message: "Form Submission Error",
            description: "There was an error submitting the form. Please try again.",
            placement: "top",
          });
        }
      } else {
        console.log("Form validation failed.");
      }
    },
    [formData, formErrors, srdId, navigate, validateForm]
  );
 
  const showSuccessNotification = () => {
    notification.success({
      message: "Form Submitted",
      description: "Thank you for contacting us!",
      placement: "top",
    });
  };
 
  const div_hide = () => {
    setIsVisible(false);
    AOS.refresh();
  };
 
  return (
    <div id="bodysoda" style={{ overflow: isVisible ? "hidden" : "auto" }}>
      {isVisible && (
        <div id="abc" className="p-3 p-md-0" style={{ display: "flex" }}>
          <div
            id="popupContact"
            data-aos={isMounted ? "zoom-in" : ""}
            data-aos-once="true"
          >
            <form id="popupform" onSubmit={handleSubmit} name="form">
              <FontAwesomeIcon
                icon={faTimes}
                id="close"
                className="text-black"
                data-aos="zoom-out"
                onClick={div_hide}
              />
              <h2 className="text-center">Reach out to us</h2>
              <hr />
              <div className="input-container">
                <FontAwesomeIcon icon={faUser} className="input-icon" />
                <input
                  id="popupname"
                  name="name"
                  placeholder="Name*"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                />
                {formErrors.name && (
                  <span className="error text-danger">{formErrors.name}</span>
                )}
              </div>
              <div className="input-container">
                <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                <input
                  id="popupemail"
                  name="email"
                  placeholder="Email*"
                  type="text"
                  value={formData.email}
                  onChange={handleChange}
                />
                {formErrors.email && (
                  <span className="error text-danger">{formErrors.email}</span>
                )}
              </div>
              <div className="input-container">
                <FontAwesomeIcon icon={faPhone} className="input-icon" />
                <input
                  id="popupnumber"
                  name="number"
                  placeholder="Whatsapp Number*"
                  type="tel"
                  maxLength={10}
                  value={formData.number}
                  onChange={handleChange}
                />
                {formErrors.number && (
                  <span className="error text-danger">{formErrors.number}</span>
                )}
              </div>
              <input
                id="popupsrdId"
                name="srdId"
                type="hidden"
                value={srdId}
              />
              <button className="popupsubmit" type="submit" id="submitpopup">
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
 
export default HomePagePopupForm;
 
 