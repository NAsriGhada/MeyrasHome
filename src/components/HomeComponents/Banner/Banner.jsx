import React from "react";
import { useTranslation } from "react-i18next";
// import './Banner.css'

const Banner = () => {
  const { t } = useTranslation();

  return (
    <div className="banner-container">
      <h1 className="banner-header">{t("home.banner.title")}</h1>
    </div>
  );
};

export default Banner;
