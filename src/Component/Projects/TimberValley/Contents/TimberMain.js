import React from "react";
import one from "../imagesTimber/one.png";
import two from "../imagesTimber/two.png";
import three from "../imagesTimber/three.jpg";
import four from "../imagesTimber/five.jpg";
import five from "../imagesTimber/four.png";
import useWindowSize from "../../../Media/News/useWindowSize"; // Import the custom hook

const TimberMain = () => {
  const size = useWindowSize();
  const isMobile = size.width <= 767.98;

  return (
    <>
      <div className="container-fluid ">
        <div className="container bg-white">
          <h2 className="text-center mt-3 mb-4 font11 txt">
            Our Community Features
          </h2>
          <div className="row g-0 ">
            <div className={`col-12 col-md-6 g-0 `}>
              <div className="position-relative newscol">
                <img
                  className="news-img"
                  src={one}
                  width={"100%"}
                  height={"auto"}
                  alt="Eco-Luxury Cottages"
                />
              </div>
            </div>
            <div
              className={`col-12 col-md-6 g-0 bg-white shadow  ${
                isMobile ? "order-first-mobile" : ""
              }`}
            >
              <div className=" mt-2 px-3">
                <h2 className="newsh5 text-dark font2">Eco-Luxury Cottages:</h2>
                <p className="text-dark para-color2 justify">
                  They are going to feel the touch of nature amidst the comfort
                  of our arcadia cottages. Resting on steel frame systems with
                  the option of conventional timber framing, these homes do not
                  only have beautiful glass windows and doors but are also
                  fitted with private balconies. Luxurious services are offered,
                  but one can live in symbiosis with nature when choosing the
                  dwelling. Perfect for everyone looking for cheap farmland in
                  the Lepakshi region or to buy cheap farmland. Promote
                  sustainable farming and agri-business friendly land near
                  tourist attraction areas such as Nandi hills.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 g-0 bg-white shadow bg-white shadow">
              <div className=" mt-3 mt-md-4 px-3">
                <h3 className="newsh5 text-dark font2">
                  Agroforestry Diversity:
                </h3>
                <p className="text-dark para-color2 justify">
                  Also, there is a special agricultural system which includes
                  trees, crops, and animals in our community. This concept of
                  farming is considered sustainable, thus helping design a
                  productive environment that is both aesthetically pleasing as
                  well as efficient. People can practice environmentally
                  friendly farming, use organic produce, farming from their own
                  agricultural plots nearby, and witness many types of plants
                  and animals. Recommended for those looking for best farmland
                  near Lepakshi and agricultural land for sale in Lepakshi.
                </p>
              </div>
            </div>
            <div className={`col-12 col-md-6 g-0  `}>
              <div className="position-relative newscol">
                <img
                  className="news-img"
                  width={"100%"}
                  height={"auto"}
                  src={two}
                  alt="Agroforestry Diversity"
                />
              </div>
            </div>

            {/* <div className="col-12 col-md-6 g-0 bg-white shadow"> */}
            <div className={`col-12 col-md-6 g-0   `}>
              <div className="position-relative newscol">
                <img
                  className="news-img"
                  width={"100%"}
                  height={"auto"}
                  src={three}
                  alt="Central Clubhouse"
                />
              </div>
            </div>
            <div className="col-12 col-md-6 g-0 bg-white shadow">
              <div className=" mt-3 mt-md-5 pt-md-4 px-3">
                {/* <p className="text-success fw-bold pt-md-5">01 July 2024</p> */}
                <h3 className="newsh5 text-dark font2">Central Clubhouse:</h3>
                <p className="text-dark para-color2 justify">
                  Central Clubhouse represents the center of our community and
                  provides a luxurious clubhouse equipped with a fitness center,
                  recreational and meeting rooms, and comfortable living rooms.
                  Perfect for popping over to say ‘Hi’ to neighbors, getting in
                  a workout or a nice quiet place to read a book. If you are in
                  search of a clubhouse in lepakshi or a resort in Lepakshi our
                  clubhouse gives luxury touch with all the benefits.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 g-0 bg-white shadow">
              <div className="mt-3 mt-md-4 pt-md-3  px-3">
                <h3 className="newsh5 text-dark font2">Natural Waterway:</h3>
                <p className="text-dark para-color2 justify">
                  Our community has an eye appealing natural water channel that
                  has both the calming and challenging torrents. You can always
                  take a leisurely stroll along the various trails or paths that
                  are next to the water or one can be more adventurous and
                  engage in water activities such as canoeing or paddle
                  boarding. Depending on the waterway, it will be home to a
                  variety of wildlife, which will be beneficial to the lovers of
                  the wildlife. The natural waterway we have and hope to develop
                  further is ideal for clients who are looking for agri-real
                  estate, especially arable land.
                </p>
              </div>
            </div>
            <div className={`col-12 col-md-6 g-0 `}>
              <div className="position-relative newscol">
                <img
                  className="news-img"
                  src={four}
                  width={"100%"}
                  height={"auto"}
                  alt="Natural Waterway"
                />
              </div>
            </div>

            <div
              className={`col-12 col-md-6 g-0  ${
                isMobile ? "order-first-mobile1" : ""
              }`}
            >
              <div className="position-relative newscol">
                <img
                  className="news-img"
                  src={five}
                  width={"100%"}
                  height={"auto"}
                  alt="Heritage Proximity"
                />
              </div>
            </div>
            <div className="col-12 col-md-6 g-0 bg-white shadow">
              <div className="mt-3 mt-md-4 pt-md-3  px-3">
                {/* <p className="text-success fw-bold pt-md-5">01 July 2024</p> */}
                <h3 className="newsh5 text-dark font2">Heritage Proximity :</h3>
                <p className="text-dark para-color2 justify">
                  Seek the convenience of being in proximity to the region’s
                  history books & favorite holiday destinations such as Lepakshi
                  & Nandi Hills. Based on the past usages, look for landmarks,
                  immerse yourself in cultural practices, and visit nearby towns
                  with the beauty of this world. Besides, find agricultural land
                  equipped with all the modern amenities for sale to avail
                  yourself of the historical feel and a modern lifestyle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimberMain;
