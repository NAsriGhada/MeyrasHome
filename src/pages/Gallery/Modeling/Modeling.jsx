import React, { useEffect, useState } from "react";
import './Modeling.css'
import threeDM from "../../../data/3D-modeling.json";
import { useTranslation } from "react-i18next";

const Modeling = () => {
    const { t } = useTranslation();

     const images = (imgName) => {
       return require(`../../../assets/img/3dModeling/${imgName}`);
     };
  const [threeDMData, setThreeDMData] = useState([]);
  const [language, setLanguage] = useState(localStorage.getItem("lng"));

  useEffect(() => {
    setThreeDMData(threeDM);
  }, []);
    const storedLanguage = localStorage.getItem("lng");
    if (storedLanguage !== language) {
      setLanguage(storedLanguage);
    }
  return (
    <>
      <section>
        <div className="vs-container">
          <p>{t("gallery.3DM.text")}</p>
          <div className="vsImagesAll">
            {threeDMData.map((item, index) => (
              <div className="vsImages" key={index}>
                <img src={images(item.images)} alt="" />
                <div className="titleRef">
                  {language === "en" ? (
                    <h2>{item.title}</h2>
                  ) : language === "fr" ? (
                    <h2>{item.titleFr}</h2>
                  ) : null}
                  <p>MH_3D_777</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Modeling;
