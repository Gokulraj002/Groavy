import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { notification } from "antd";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import "./css/EligantForm.css";
import axios from "axios";


const EligantMainForm = () => {
  
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
  // const navigate = useNavigate();
  const [srdId, setSrdId] = useState("66ab7a3a5d8defb63e6e88a4");
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const srd = urlParams.get("srd");
    if (srd) {
      setSrdId(srd);
    }
  }, []);

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

  const submitToWeb3Forms = async (formData) => {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        access_key: 'c225c50d-a419-4ade-ad75-e53473c5e568',
        name: formData.name,
        email: formData.email,
        whatsapp: formData.whatsapp,
        subject: 'New Lead from Elegant Orchards Form',
        message: `Name: ${formData.name}\nWhatsApp: ${formData.whatsapp}\nEmail: ${formData.email}`
      })
    });

    if (!response.ok) {
      throw new Error('Failed to submit to Web3 Forms');
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

  return (
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
          {errors.name && <p style={{color:'red', fontSize:'12px' }}>{errors.name}</p>}
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
          {errors.whatsapp && <p style={{color:'red', fontSize:'12px' }}>{errors.whatsapp}</p>}
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
          {errors.email && <p style={{color:'red', fontSize:'12px' }}>{errors.email}</p>}
        </div>
        <button
          type="submit"
          className="eligentformsubmit mx-auto d-block rounded-pill"
        >
          Submit
        </button>
        <div className="contact-buttons text-center mt-5">
          <a
            href="tel:6366829999"
            className="btn btn-info btn-sm para-color1 rounded-5 g-0"
          >
            <FaPhoneAlt /> Call
          </a>
          <a
            href="https://wa.me/6366829999"
            className="btn btn-sm mx-1 mx-md-3 btn-success para-color1 rounded-5"
          >
            <FaWhatsapp /> WhatsApp
          </a>
          <a
            href="mailto:support@groavy.com"
            className="btn btn-sm btn-danger para-color1 rounded-5"
          >
            <FaEnvelope /> Email
          </a>
        </div>
      </form>
    </div>
  );
};

export default EligantMainForm;
