import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./custom.css";
import WhatsAppButton from "../Home/WhatsAppButton";
// import SchemaMarkup from "../../Schema/SchemaMarkup";
import SchemaMarkup from "../../SchemaMarkup";
const Layout = () => {
  return (
    <div>
      <Header />
      <WhatsAppButton/>
      <SchemaMarkup/>
      <Footer />
    </div>
  );
};

export default Layout;
