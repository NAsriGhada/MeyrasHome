import React, { useEffect, useState } from "react";
import "./Virtual-staging.css";
import { useTranslation } from "react-i18next";
import vs from "../../../data/Virtual-staging.json";

const Virtualstaging = () => {
  const { t } = useTranslation();
  const [vsData, setVsData] = useState(vs);

  const [language, setLanguage] = useState(localStorage.getItem("lng"));
  console.log(`the initial value: ${language}`)
  
  console.log(localStorage)

//  useEffect(() => {
//    const storedLanguage = localStorage.getItem("lng");
//    console.log("Stored language:", storedLanguage);
//    if (storedLanguage && storedLanguage !== language) {
//      console.log("Updating language to:", storedLanguage);
//      setLanguage(storedLanguage);
//      console.log("Language updated");
//    }
//  }, [language]);
  
  const storedLanguage = localStorage.getItem("lng");
  if (storedLanguage !== language) {
    setLanguage(storedLanguage);
  }
  console.log(`the stored language: ${storedLanguage}`)


  const before = (imgName) => {
    return require(`../../../assets/img/vs/${imgName}`);
  };
  const after = (imgName) => {
    return require(`../../../assets/img/vs/${imgName}`);
  };

  return (
    <>
      <section className="vs-container">
        <p>{t("gallery.VS.text")}</p>
        <div className="vsImagesAll">
          {vsData.map((item, index) => (
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
                  alt=""
                />
              </img-comparison-slider>
              <div className="titleRef">
                {language === "en" && <h2>{item.text}</h2>}
                {language === "fr" && <h2>{item.textFr}</h2>}
                {console.log('testing the lang: ' + language)}
                <p>MH_VS_777</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Virtualstaging;
