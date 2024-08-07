

import React from "react";
import Cfrom from "../Contact/Cfrom";
import "./form.css";
const Form = () => {
  return (
    <div className="">
           <div className="row justify-content-center g-0">
               <div className="col-12 text-center mb-4">
          <h3 className="font1" style={{ color: "#3A6958" }}>
            Let's Contact With Us
           </h3>
        </div>
         <div className="col-12  text-center mb-4 para-color2">
           <p>
             Connect with us today to turn your real estate inquiries into
             solutions. Our dedicated team is here <br></br> to assist you with
            personalized and expert guidance.
          </p>
        </div>
      <div className="col-md-8 col-12  gradient-border aos mb-2">
      <div className=" shadow-lg  py-3 px-5   ">
        {" "}
        <h3 className="font2 text-center pb-5 color ">
          Helping you is our priority.
        </h3>
        <Cfrom />
      </div>
      </div>
    </div>
    </div>
  );
};

export default Form;
