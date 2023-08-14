import React, { useEffect, useState } from 'react'
import './VirtualRenovation.css'
import vr from "../../../data/Virtual-renovation.json";
import { useTranslation } from "react-i18next";


const VirtualRenovation = () => {
      const { t } = useTranslation();

    const before = (imgName) => {
      return require(`../../../assets/img/vr_gallery/${imgName}`);
    };
    const after = (imgName) => {
      return require(`../../../assets/img/vr_gallery/${imgName}`);
    };

    const [vrData, setVrData] = useState(vr);
    const [language, setLanguage] = useState(localStorage.getItem("lng"));

    const storedLanguage = localStorage.getItem("lng");
    if (storedLanguage !== language) {
      setLanguage(storedLanguage);
    }
  return (
    <>
      <section>
        <div className="vs-container">
          <p>{t("gallery.VR.text")}</p>
          <div className="vsImagesAll">
            {vrData.map((item, index) => (
              <div className="vsImages" key={index}>
                <img-comparison-slider
                  style={{
                    cursor: "col-resize",
                    maxWidth: "612px",
                    maxHeight: "408px",
                    width: "80%",
                  }}
                >
                  <img
                    slot="first"
                    src={before(item.imageBefore)}
                    style={{ width: "100%", height: "100%" }}
                    alt=""
                  />
                  <img
                    slot="second"
                    src={after(item.imageAfter)}
                            style={{ width: "100%", height: "100%" }}
                            alt=''
                  />
                </img-comparison-slider>
                <div className="titleRef">
                  {language === "en" && <h2>{item.text}</h2>}
                  {language === "fr" && <h2>{item.textFr}</h2>}
                  <p>MH_VR_777</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default VirtualRenovation