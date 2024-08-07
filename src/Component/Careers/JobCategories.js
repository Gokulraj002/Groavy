import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaProjectDiagram,
  FaUserTie,
  FaLaptopCode,
  FaPencilRuler,
} from "react-icons/fa";

const JobCategory = ({ IconComponent, title, link }) => {
  return (
    <div className="col-lg-3 col-md-6 mb-4">
      <div
        className="card h-100 text-center bg-light "
        style={{ borderRadius: "0px" }}
      >
        <div className="card-body">
          <IconComponent className="card-icon fs-1 text-info mb-3" />
          <h5 className="card-title">{title}</h5>
          <a href={link} className="card-link">
            View Jobs
          </a>
        </div>
      </div>
    </div>
  );
};

const JobCategories = () => {
  return (
    <div className="container my-3">
      <h4
        className="font11 text-center py-3 mt-md-1"
        style={{ color: "#3A6958" }}
      >
        Join our team
      </h4>
      <div className="row">
        <JobCategory
          IconComponent={FaProjectDiagram}
          title="Project Management"
          link="#"
        />
        <JobCategory
          IconComponent={FaUserTie}
          title="Human Resource"
          link="#"
        />
        <JobCategory
          IconComponent={FaLaptopCode}
          title="Development"
          link="#"
        />
        <JobCategory IconComponent={FaPencilRuler} title="Design" link="#" />
      </div>
    </div>
  );
};

export default JobCategories;
