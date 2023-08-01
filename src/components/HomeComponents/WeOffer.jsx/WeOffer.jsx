import React from "react";
import { useTranslation } from "react-i18next";
import EightFive from "../../../assets/img/weOffer/85ù 1.png";
import Forty from "../../../assets/img/weOffer/40ù 1.png";
import Seventy from "../../../assets/img/weOffer/70ù 1.png";
import './WeOffer.css'

const WeOffer = () => {
  const { t } = useTranslation();

  return (
    <div className="offerContainer">
      <div className="offerMain">
        <h1>{t("home.what-we-offer.title")}</h1>
        <p>{t("home.what-we-offer.text")}</p>
        <div className="contentOffer">
          <div className="detailsConstentOffer">
            <img src={EightFive} alt="" />
            <p>{t("home.what-we-offer.bloc1.text")}</p>
          </div>
          <div className="detailsConstentOffer">
            <img src={Forty} alt="" />
            <p>{t("home.what-we-offer.bloc2.text")}</p>
          </div>
          <div className="detailsConstentOffer">
            <img src={Seventy} alt="" />
            <p>{t("home.what-we-offer.bloc3.text")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeOffer;
