import React from "react";
import { useTranslation } from "react-i18next";
// import './Banner.css'

const Banner = () => {
  const { t } = useTranslation();

  return (
    <div class="banner-container">
      <h1 class="banner-header">{t("home.banner.title")}</h1>
    </div>
  );
};

export default Banner;
