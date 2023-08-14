import React from "react";
import { useParams } from "react-router-dom";
import ReactPannellum, { getConfig } from "react-pannellum";
import vs from "../../../assets/img/Vyce.jpg";
import comingSoon from "../../../assets/img/coming-soon.jpg";

const Panoramic = () => {
  const { imageId } = useParams();
  const idAsNumber = parseInt(imageId);

  const getImageSource = (id) => {
    if (id === 0) {
      return vs;
    } else if (id === 1) {
      return comingSoon;
    }
    return null; // Handle the case when imageId is not recognized
  };

  const imageSource = getImageSource(idAsNumber);

  if (!imageSource) {
    return <div>Image not found</div>;
  }

  const config = {
    autoRotate: 0,
    autoLoad: true,
  };

  return (
    <div>
      <ReactPannellum
        id="1"
        sceneId="firstScene"
        imageSource={imageSource}
        config={config}
        style={{
          width: "100%",
          height: "100vh",
        }}
      />
    </div>
  );
};

export default Panoramic;
