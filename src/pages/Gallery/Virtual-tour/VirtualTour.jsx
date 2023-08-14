import React from "react";
import vr from "../../../data/visit-vr.json";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const VirtualTour = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const loadImage = (imgName) => {
    try {
      return require(`../../../assets/img/${imgName}`);
    } catch (error) {
      console.error("Image load error:", error);
      return null; // Return a default image or handle the error gracefully
    }
    };
     const navigateToPanoramic = (imageId) => {
       navigate(`/panoramic/${imageId}`);
     };

  return (
    <section>
      <div className="vs-container">
        <p>{t("gallery.VS.text")}</p>
        <div
          className="vsImagesAll"
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "100%",
          }}
        >
          {vr.map((item, i) => (
            <div
              className="vsImages"
              key={i}
              style={{
                cursor: "pointer",
                maxWidth: "612px",
                maxHeight: "408px",
                width: "80%",
              }}
              onClick={() => navigateToPanoramic(i)}
            >
              <img
                src={loadImage(item.img)}
                alt={item.name}
                style={{ width: "80%", height: "338px" }}
              />
              <div className="titleRef">
                <h2>{item.name}</h2>
                <p>{item.ref}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VirtualTour;
