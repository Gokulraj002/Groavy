import React from "react";
import "./NewsContent.css";
import trophy from "../../../images/trop.png";
import elegant from "../../../images/400-450.jpg";
import News from "../../../images/news-groavy.jpeg";
import certificate from "../../../images/certificate.png";
import useWindowSize from "./useWindowSize"; // Import the custom hook

const NewsContent = () => {
  const size = useWindowSize();
  const isMobile = size.width <= 767.98;

  return (
    <>
      <div className="container-fluid mt-2 bg-light">
        <div className="container white">
          <div className="row g-0 shadow-lg">
            <div className={`col-12 col-md-6 g-0`}>
              <div className="position-relative newscol">
                <img
                  className="news-img"
                  width={'100%'} height={'auto'}
                  src={elegant}
                  alt="Elegant-orchards-estate"
                />
                <div className="overlay"></div>
                <div className="position-absolute top-50 start-50 translate-middle news-content">
                  <h1 className="newsh5 text-center text-white font">
                    Elegant Orchards Estate
                  </h1>
                  <p className="news-p text-white text-center para-color">
                    Experience a serene lifestyle on a 28-acre property in
                    Jeeganahalli Village with modern amenities and diverse
                    plantations. Located just 40 minutes from Nandi Hills and 59
                    minutes from Bangalore International Airport, it offers easy
                    access to major attractions. Reserve your plot today for a
                    perfect blend of luxury and nature.
                  </p>
                </div>
              </div>
            </div>
            <div
              className={`col-12 col-md-6 g-0  ${
                isMobile ? "order-first-mobile" : ""
              }`}
            >
              <div className="mt-md-5 pt-md-3 px-md-5 px-3">
                <p className="text-success fw-bold">2024</p>
                <h2 className="newsh5 text-dark font2">
                  Elegant Orchards Estate
                </h2>
                <p className="text-dark para-color2 justify">
                  Discover a stunning 28-acre property in Jeeganahalli Village,
                  Chikkaballapura Taluk, Chickballapur District. This land
                  features a built-up area of 5,700 to 10,000 sq ft and is home
                  to a variety of plantations like sandalwood, mahogany, mango,
                  cashew, sapota, and jackfruit. Located just 40 minutes from
                  Nandi Hills and 59 minutes from Bangalore International
                  Airport, it offers easy access via NH7. Nearby attractions
                  include Veerapuram Bird Sanctuary, Lepakshi Historical Temple,
                  and the Isha Foundation. The property includes modern
                  amenities like a clubhouse, cafeteria, swimming pool, wide
                  30-foot roads, five borewells for water supply, and solar
                  power. With 70% open space, 25 trees per plot, and 10%
                  built-up and 30% super built-up areas, it's perfect for
                  farmhouses or cottages.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 g-0">
              <div className="mt-md-5 pt-md-5 px-md-5 px-3">
                <p className="text-success fw-bold mt-4 pt-md-5">
                   June 2024
                </p>
                <h3 className="newsh5 text-dark font2">Times Business Award</h3>
                <p className="text-dark para-color2 justify">
                  Elegant Orchards Estate (Groavy Buildcon) has proudly received
                  the Times Business Award for 2024, celebrating our status as a
                  Premium & Future Ready Farmland Project. This prestigious
                  trophy symbolizes our commitment to excellence and innovation
                  in the real estate industry. It reflects our dedication to
                  providing top-quality services and achieving significant
                  milestones.
                </p>
              </div>
            </div>
            <div className={`col-12 col-md-6 g-0 `}>
              <div className="position-relative newscol">
                <img
                  className="news-img"
                  width={'100%'} height={'auto'}

                  src={trophy}
                  alt="Times Business Award Trophy"
                />
                <div className="overlay"></div>
                <div className="position-absolute top-50 start-50 translate-middle news-content">
                  <h4 className="newsh5 text-center text-white para-color2">
                    Times Business Award
                  </h4>
                  <p className="news-p text-white text-center para-color">
                    We are honored to receive the prestigious Times Business
                    Award. This recognition is a testament to our commitment to
                    excellence and innovation in the industry. This trophy
                    symbolizes our dedication to delivering outstanding services
                    and achieving remarkable milestones.
                  </p>
                </div>
              </div>
            </div>

            {/* <div className="col-12 col-md-6 g-0"> */}
            <div
              className={`col-12 col-md-6 g-0  ${
                isMobile ? "order-first-mobile1" : ""
              }`}
            >
              <div className="position-relative newscol">
                <img
                  className="news-img"
                  width={'100%'} height={'auto'}

                  src={certificate}
                  alt="Times Business Award Certificate"
                />
                <div className="overlay"></div>
                <div className="position-absolute top-50 start-50 translate-middle news-content">
                  <h4 className="newsh5 text-center text-white">
                    Times Business Award Certificate
                  </h4>
                  <p className="news-p text-white text-center para-color">
                    Proudly awarded to Elegant Orchards Estate (Groavy Buildcon)
                    for being a Premium & Future Ready Farmland Project. This
                    certificate of excellence is a recognition of our relentless
                    pursuit of quality and customer satisfaction.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 g-0">
              <div className="mt-md-5 pt-md-5 px-md-5 px-3">
                <p className="text-success fw-bold pt-md-5"> June 2024</p>
                <h3 className="newsh5 text-dark font2">Times Business Award</h3>
                <p className="text-dark para-color2 justify">
                  Elegant Orchards Estate (Groavy Buildcon) has been awarded the
                  Certificate of Excellence by the Times Business Awards
                  Bengaluru 2024. Recognized as a Premium & Future Ready
                  Farmland Project, this certificate highlights our relentless
                  pursuit of quality and customer satisfaction. It serves as an
                  acknowledgment of our efforts to deliver outstanding real
                  estate solutions and maintain the highest standards in the
                  industry.
                </p>
              </div>
            </div>

            <div
              className={`col-12 col-md-6 g-0 ${
                isMobile ? "order-first-mobile" : ""
              }`}
            >
              <div className="mt-md-5 pt-md-3 px-md-5 px-3">
                <p className="text-success fw-bold">July 2024</p>
                <h2 className="newsh5 text-dark font2">
                GROAVY BUILDCON: BUILDING YOUR DREAMS IN STYLE
                </h2>
                <p className="text-dark para-color2 justify">
                Are you yearning for a life less ordinary? Do you dream of waking up to fresh air, sprawling greenery, and the tranquility of nature at your doorstep? Groavy Buildcon, a progressive Bangalore-based real estate builder, isn’t just constructing spaces; they’re cultivating dream lifestyles beyond the city limits. Groavy Buildcon isn’t about the typical high-rise apartments; they’re the innovators of luxury farmlands, exemplified by their flagship project, Elegant Orchards Estates—a unique concept for those seeking an escape from the urban chaos.Perched at the verdant landscapes of Chikkaballapur, Elegant Orchards Estates offers a lifestyle steeped in nature's embrace. The meticulously designed infrastructure prioritizes sustainability, ensuring a self-sufficient community that treads lightly on the earth. All this translates to a future-proof investment, where residents can enjoy modern amenities while being part of an eco-conscious haven.
                </p>
                <h2 className="newsh5 text-dark font2">
                Experience, Expertise, and Technology at the Helm
                </h2>
                <p>Groavy Buildcon is steered by a team with a strong foundation in diverse fields. Their promoters, Gajendra, Sunil Kumar Reddy and Vinay Kumar Reddy, bring a unique blend of experience to the table, ensuring a comprehensive approach to building dream projects.</p>
              </div>
            </div>
            <div className="col-12 col-md-6 g-0">
              <div className="position-relative newscol">
                <img
                  className="news-img"
                  width={'100%'} height={'auto'}

                  src={News}
                  alt="News at Elegant Orchards Estate"
                />
                <div className="overlay"></div>
                <div className="position-absolute top-50 start-50 translate-middle news-content">
                  
                  <p className="news-p fs-4 text-white text-center para-color">
                  Groavy Buildcon's Elegant Orchards Estates: Crafting Dream Lifestyles with Sustainability and Luxury

                  </p>
                  <h4 className="newsh5 text-center text-white">
                    
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsContent;
