import { useEffect } from "react";
import ContactForm from "./ContactForm";
import "./contactform.css";
import { Helmet } from "react-helmet";

const Contact = () => {
  useEffect(() => {
    // Google Ads Conversion Tracking
    window.gtag("event", "conversion", {
      send_to: "AW-16458676935/3yN7CKjb8r0ZEMf1jag9",
      value: 1.0,
      currency: "INR",
    });
  }, []);

  // useEffect(() => {
  //   const referrer = document.referrer;
  //   const currentUrl = window.location.href;

  //   if (referrer.includes("googleadservices.com") || referrer.includes("youtube.com")) {
  //     const params = new URLSearchParams(currentUrl.split('?')[1]);
  //     const targetUrl = "https://groavy.com/contact?" + params.toString();
  //     window.location.href = targetUrl;
  //   }
  // }, []);

  return (
    <>
      <Helmet>
        <title>
          Contact Us-Groavy Buildcon | Reach Out for Farmland Inquiries
        </title>
        <meta
          name="description"
          content="Contact Groavy Buildcon for inquiries regarding our premium farmland sales and comprehensive real estate services in Bengaluru. Reach out to us today!"
        />
        <meta
          name="keywords"
          content="GroavyBuildcon contact, real estate contact, farmland sales contact, Bengaluru"
        />
        <meta name="author" content="GroavyBuildcon" />
        <meta
          property="og:title"
          content="Contact Us-Groavy Buildcon | Reach Out for Farmland Inquiries"
        />
        <meta
          property="og:description"
          content="Contact Groavy Buildcon for inquiries regarding our premium farmland sales and comprehensive real estate services in Bengaluru. Reach out to us today!"
        />
        <meta property="og:image" content="URL-to-your-featured-image" />
        <meta property="og:url" content="https://www.groavy.com/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="GroavyBuildcon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Contact Us-Groavy Buildcon | Reach Out for Farmland Inquiries"
        />
        <meta
          name="twitter:description"
          content="Contact Groavy Buildcon for inquiries regarding our premium farmland sales and comprehensive real estate services in Bengaluru. Reach out to us today!"
        />
        <meta name="twitter:image" content="URL-to-your-featured-image" />
        <meta name="twitter:site" content="@yourtwitterhandle" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href="https://www.groavy.com/contact" />
      </Helmet>

      <ContactForm />

      {/* <div className="google-map">
        <iframe
          title="Google Map Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.078060519842!2d77.59859307405264!3d13.094239212179694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19ed4cea7ea1:0xf3db5c87752d87e!2sGroavy%20Buildcon!5e0!3m2!1sen!2sin!4v1718025891024!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div> */}
    </>
  );
};

export default Contact;
