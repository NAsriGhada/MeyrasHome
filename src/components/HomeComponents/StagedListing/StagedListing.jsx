import React from "react";
import { useTranslation } from "react-i18next";
import listings from "../../../data/listings.json";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import prevIcon from "../../../assets/img/icons/prev.svg";
import nextIcon from "../../../assets/img/icons/next.svg";

const listing = (imgName) => {
  return require(`../../../assets/img/listing/${imgName}`);
};
const testimonials = (imgName) => {
  return require(`../../../assets/img/testimonials/${imgName}`);
};
const company = (imgName) => {
  return require(`../../../assets/img/testimonials/${imgName}`);
};

const StagedListing = () => {
  const { t } = useTranslation();
  const customOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    autoplay: true,
    navText: [
      `<img src=${prevIcon} alt="Previous" style={{ marginTop: "13px" }} />`,
      `<img src=${nextIcon} alt="Next" />`,
    ],
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
    nav: true,
  };

  return (
    <div className="vs-container">
      <div className="vs-title">{t("home.recent-listings.title")}</div>
      <div id="recent-listings">
        <OwlCarousel className=" owl-theme" {...customOptions}>
          {listings.map((item) => (
            <div key={item.id} className="item">
              {item.images.map((image, index) => (
                <div key={index} id="item" className="item-image">
                  <img src={listing(image)} className="listinig-img" alt="" />
                </div>
              ))}
              <div className="recent-listner">
                <img
                  id="recent-listner"
                  src={testimonials(item.photo)}
                  alt=""
                />
                <div className="recent-listner-info">
                  <span style={{ color: "#ffff" }}>{item.agent}</span>
                  <span style={{ color: "#ECB365" }}>{item.phone}</span>
                  <img
                    id="recent-listner-company"
                    src={company(item.company)}
                    alt=""
                  />
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default StagedListing;
