import React from "react";
import { useTranslation } from "react-i18next";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import UntitledImg from '../../../assets/img/Untitled-2 1.png'


const Banner = () => {
  const { t } = useTranslation();
  const customOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ["", ""],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
    },
    nav: false,
  };

  return (
    <div className="banner-container">
      <h1 className="banner-header">{t("home.banner.title")}</h1>
      <div>
        <OwlCarousel className="owl-theme" {...customOptions}>
          <div>
            <img src={UntitledImg} alt="" />
          </div>
          <div>
            <img src={UntitledImg} alt="" />
          </div>
          <div>
            <img src={UntitledImg} alt="" />
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Banner;
