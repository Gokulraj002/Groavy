import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "../css/Amenities.css";

const amenitiesData = [
  {
    icon: "fa-house-user",
    title: "Central Clubhouse",
    text: "Community gatherings.",
  },
  {
    icon: "fa-person-swimming",
    title: "Tranquil Swimming Pool",
    text: "Relaxing pool oasis.",
  },
  {
    icon: "fa-building",
    title: "Conference Hall & Resort",
    text: "State-of-the-art for business and leisure.",
  },
  {
    icon: "fa-utensils",
    title: "On-site Restaurant",
    text: "Offering gourmet meals.",
  },
  {
    icon: "fa-music",
    title: "Outdoor Party Space",
    text: "Celebrations in nature.",
  },
  {
    icon: "fa-handshake",
    title: "Meeting Rooms and Board Rooms",
    text: "Wi-Fi Connectivity.",
  },
  { icon: "fa-dumbbell", title: "Gym", text: "Fully equipped gym." },
  {
    icon: "fa-volleyball",
    title: "Sports Facilities",
    text: "Various sports activities.",
  },
  {
    icon: "fa-person-hiking",
    title: "Trekking Trails",
    text: "For all paces.",
  },
  {
    icon: "fa-video-camera",
    title: "Security Coverage",
    text: "CCTV security coverage.",
  },
  {
    icon: "fa-champagne-glasses",
    title: "Outdoor Venues",
    text: "Innovative events.",
  },
  {
    icon: "fa-leaf",
    title: "Nature's Wonders",
    text: "Enhancing every experience.",
  },
  {
    icon: "fa-people-group",
    title: "Team Building Facilities",
    text: "Unite and inspire corporate teams.",
  },
  {
    icon: "fa-children",
    title: "Kids' Play Area",
    text: "Fun for children.",
  },
  {
    icon: "fa-mountain",
    title: "Explore Lawns",
    text: "Lush green spaces.",
  },
  {
    icon: "fa-seedling",
    title: "Gardens",
    text: "Beautiful flora.",
  },
  {
    icon: "fa-tree",
    title: "Nature Trails",
    text: "Including Water Body Boulevard.",
  },
  {
    icon: "fa-basket-shopping",
    title: "Picnic Spaces",
    text: "Perfect for family outings.",
  },
];

const TimberAminities = () => {
  return (
    <div className="container-fluid py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4 font11 txt">
          Amenities
        </h2>
        <Row>
          {amenitiesData.map((amenity, index) => (
            <Col key={index} className="col-6 col-md-4 col-lg-2 mb-4">
              <Card className="h-100 amenity-card">
                <Card.Body className="d-flex flex-column align-items-center">
                  {/* <i
                    className={`fas ${amenity.icon} fa-3x mb-3 color fs-1 bg-dark rounded-circle `}
                    style={{ width: "50px", height: "50px" }}
                  ></i> */}
                  <div
                    className="icon-container d-flex align-items-center justify-content-center  rounded-circle mb-2 pakkas"
                    style={{ width: "70px", height: "70px" }}
                  >
                    <i className={`fas ${amenity.icon} fa-2x  fs-1 `}></i>
                  </div>
                  <Card.Title className="text-center para-color">
                    {amenity.title}
                  </Card.Title>
                  {/* <Card.Text className="text-center">{amenity.text}</Card.Text> */}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default TimberAminities;
