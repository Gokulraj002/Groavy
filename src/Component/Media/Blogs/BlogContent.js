import React from "react";
// import news from "../../../images/mob-serv.jpg";
import Mahogany from "../../../images/tree-mahogany.jpg";
import Elegant from "../../../images/Blog 1 image.jpg";
import Blog3 from "../../../images/sandalwood.jpg";
import Blog4 from "../../../images/website-blogs 2.jpg";
import Blog5 from "../../../images/Blog52.png";


import { Link } from "react-router-dom";

const BlogContent = () => {
  const blogPosts = [
    {
      image: Blog5,
      "author": "Groavy Team",
      "title": "Why Your Next Big Investment Should Be Farmland",
      "date": "9 August",
      "link": "/blogs/why-your-next-big-investment-should-be-farmland",
    "description": "Looking for a secure and profitable investment? Farmland is the key. With rising demand for agricultural land, owning farmland in Jeeganahalli Village, Chikkaballapura Taluk, offers exceptional growth potential and sustainable returns. Invest in Elegant Orchards Estate for a stable, long-term asset with premium amenities."
  },
    {
      image: Blog4,
      author: "Groavy Team",
      title:
        "Farmland vs. Mutual Funds: Which Offers Better Investment Returns?",
      date: "1 August",
      link:
        "/blogs/farmland-vs-mutual-funds-which-offers-better-investment-returns",
      description:
        "Regarding the concept of the investment that yields high returns, read more about the comparison of mutual funds and farmland as the investment opportunity. While the mutual funds share simplicity, the farmland is rich in the long-term value growth, and tangible assets. Thus, the article proves why farmland can be an effective investment choice.",
    },
    {
      image: Blog3,
      author: "Groavy Team",
      title:
        "Long-Term Reward: Invest in Sandalwood on Your Farm with Elegant Orchards Estate",
      date: "22 July",
      link:
        "/blogs/invest-in-sandalwood-on-your-farm-with-elegant-orchards-estate",
      description:
        "Owning a piece of land that not only provides you with fresh produce or beautiful scenery, but also holds the potential for a significant long-term financial reward. Introducing sandalwood, a precious wood known for its captivating fragrance and diverse uses, and the innovative approach of Elegant Orchards Estate.",
    },
    {
      image: Mahogany,
      author: "Groavy Team",
      title:
        "Cultivating Wealth: Strategic Benefits of Investing in Mahogany Tree Farmland",
      date: "15 July",
      link: "/blogs/elegantorchards-embraces-green-growth-with-mahoganytrees",
      description:
        "As a landowner, do you want to get a high return on your investment? At Elegant Orchards, our best farmland provides an ideal environment to grow the extraordinary mahogany tree, a natural asset to provide high yield.",
    },
    {
      image: Elegant,
      author: "Groavy Team",
      title:
        "Grow Your Future: Benefits of Owning and Managing Farmland in Elegant Orchards",
      date: "8 July",
      link: "/blogs/grow-your-future-benefits-of-owning-managing-farmland",
      description:
        "Elegant Orchards Estate located at Peresandra in Chikkaballapur offers rich farmland ideal for sustainable agricultural returns investment. Recognized by the prestigious Times Business Award, the estate is a testament to that work well in agricultural practices and land management.",
    },


   
      ];

  return (
    <div className="bg-light py-5">
      <div className="container">
        <div className="row g-4">
          {blogPosts.map((post, index) => (
            <div className="col-12 col-md-6 col-lg-4" key={index}>
              <Link to={post.link} className="text-decoration-none">
                <div className="card h-100 shadow-sm">
                  <div className="position-relative">
                    <img
                      width="100%"
                      height="300px"
                      className="w-100"
                      src={post.image}
                      alt={post.title}
                    />

                    <div className="position-absolute top-0 end-0 m-3">
                      <span
                        className="badge"
                        style={{ backgroundColor: "#f9ab24" }}
                      >
                        {post.date}
                      </span>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="mb-2">
                      <i className="fas fa-user-circle text-success me-2"></i>
                      <small className="text-success">{post.author}</small>
                    </div>
                    <h2
                      className="card-title text-start"
                      style={{ fontSize: "20px" }}
                    >
                      {post.title}
                    </h2>
                    <p className="card-text text-secondary text-start">
                      {post.description}
                    </p>
                  </div>
                  <div className="card-footer bg-white border-top-0">
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="btn btn-outline-success">Read More</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
