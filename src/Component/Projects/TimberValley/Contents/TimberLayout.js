import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import LayoutImage from "../imagesTimber/timber-layout.jpg";

const TimberLayout = () => {
  const openImageInNewTab = () => {
    // window.open(LayoutImage, '_blank');
  };

  return (
    <div className="container-fluid gx-0">
      <h2 className="text-center  font1" style={{ color: "#255946" }}>
        Layout
      </h2>
      <div className="layout-zoom ">
        <Zoom>
          <img
            className="w-100 mx-auto d-block zoomable-image px-md-5"
            src={LayoutImage}
            width={'100%'} height={'auto'}
            alt="Timber Valley Layout"
            onClick={openImageInNewTab}
          />
        </Zoom>
      </div>
    </div>
  );
};

export default TimberLayout;
