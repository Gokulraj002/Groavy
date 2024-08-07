import React from "react";
import image from "../../images/weoff.png";
import Home from "../../images/manage.png";
import Land from "../../images/experience1.png";
import Service from "../../images/yoga.png";
import { Link } from "react-router-dom";

const Weoffer = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container ">
          <div className="row my-3 aos">
            <h4
              className="font1 text-center mt-3 mt-md-1  fon"
              style={{ color: "#3A6958" }}
            >
              Our Offering Farmlands
            </h4>
            <div
              className="col-12 col-lg-6 mt-4  aos"
              data-aos="fade-down-right"
            >
              <img
                className="w-100 img-fluid "
                width={"100%"}
                height={"auto"}
                src={image}
                alt="Banner"
              />
            </div>
            <div
              className="col-12 col-lg-6 mt-md-4 pt-3  aos"
              data-aos="fade-down-left"
            >
              <h2 className="font2 " style={{ color: "#F9AB24" }}>
                Crafting Everlasting Paradises of Serenity:
              </h2>
              <p className="text-secondary justify para-color2">
                We at Groavy Buildcon are committed to delivering beautiful
                spaces that are peaceful reservation areas, combining the
                original appeal of the environment with contemporary
                conveniences. The vision of this theory is to provide holistic
                maintained large plantations where the elements of the new world
                coexist with the raw beauty, offering an extremely authentic
                natural experience to consumers, resulting in tranquility and
                prosperity.
                <br></br>For more information or to arrange a visit to our farms
                or areas of farmlands, please{" "}
                <Link to="contact"> Get in touch </Link> with us today. Let
                Groavy Buildcon help you seek your dream slice of heaven.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* some content */}

      <div className="container-fluid d-flex bg py-2 mt-4">
        <div className="row justify-content-center aos para-color2">
          {/* <h2 className="text-center font1 color" >Our Services</h2> */}

          {/* <h2 className='text-center' style={{ color: '#c1e74b' }}>Our Services</h2> */}
          <div
            className="col-12 col-md-6 col-lg-3 m-lg-3 aos"
            data-aos="fade-down-right"
            style={{ borderRadius: "5px" }}
          >
            <img
              className="w-50  d-block mx-auto "
              src={Home}
              width={"100%"}
              height={"auto"}
              alt="Buy a Land"
            ></img>
            <h3 className=" text-center font2 color1 mt-4 pt-md-2">
              Holistically Managed Farmlands
            </h3>

            <p className="justify px-md-2 text-white">
              Farmlands at Groavy Buildcon are well taken care of with an aim of
              maintaining their natural formula. This relates to purposes of
              preserving the natural environment along with the uncontested
              integration of sustainability practices. We envision a more
              profound approach that fosters the resources of the land and its
              appendages, guaranteeing that each piece of farmland is not just
              an object or a piece of real estate, but a living and breathing
              entity.
            </p>
          </div>
          <div
            className="col-12 col-md-6 col-lg-3 m-lg-3 aos"
            data-aos="zoom-out-down"
            style={{ borderRadius: "5px" }}
          >
            <img
              className=" d-block w-50 mx-auto "
              src={Land}
              width={"100%"}
              height={"auto"}
              alt="Buy a Farm"
            ></img>
            <h3 className="text-center font2 color1 mt-4 pt-md-2">
              Experience Groavy Buildcon
            </h3>

            <p className="justify text-white">
              Find out the eternal luxurious gardens of tranquility with Groavy
              Buildcon. Our outstanding commitment to clients, as well as to the
              sustainability of our enterprise, ensures that you live a life
              that is directly out of an extraordinary reel. Join us in our
              mission to help people establish organic and sustainable homes
              where the main focus is on the unison of innovative and
              traditional ideas. Here, the natural and the man-made are in
              complete harmony.
            </p>
          </div>
          <div
            className="col-12 col-md-6 col-lg-3 m-lg-3 aos"
            data-aos="fade-down-left"
            style={{ borderRadius: "5px" }}
          >
            <img
              className="w-50 d-block mx-auto"
              src={Service}
              width={"100%"}
              height={"auto"}
              alt="land for sales"
            ></img>
            <h3 className=" text-center font2 color1 mt-4 pt-md-2">
              Modern Serenity
            </h3>
            <p className="justify text-white">
              Find out the eternal luxurious gardens of tranquility with Groavy
              Buildcon. Our outstanding commitment to clients, as well as to the
              sustainability of our enterprise, ensures that you live a life
              that is directly out of an extraordinary reel. Join us in our
              mission to help people establish organic and sustainable homes
              where the main focus is on the unison of innovative and
              traditional ideas. Here, the natural and the man-made are in
              complete harmony.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weoffer;
