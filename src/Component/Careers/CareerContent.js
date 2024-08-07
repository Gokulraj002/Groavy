import React from 'react';
import career from '../../images/career.jpg';
import { Link } from 'react-router-dom';

const CareerContent = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container my-5">
          <div className="row align-items-center">
            <div className="col-md-6 hero-text">
              <h2>Make a difference! Join <br /> team Groavy!</h2>
              <p>
                We empower our team with process and technology and encourage them to think creatively and drive bold changes to clients' agencies and businesses. Groavy is a hub for believers, thinkers, creators, and doers. Join an enthusiastic team of zealous individuals in the world of technology and innovation. Be part of our quest to stay ahead with the latest technology, innovation, and professional growth.
              </p>
              <Link to="/careers" className="btn btn-success btn-view-jobs">View Jobs</Link>
            </div>
            <div className="col-md-6 text-center">
              <img src={career} alt="career team" className="w-100" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CareerContent;
