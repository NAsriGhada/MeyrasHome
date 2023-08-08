import React from "react";
import './Testimonials.css'
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import prevIcon from "../../../assets/img/icons/prev.svg";
import nextIcon from "../../../assets/img/icons/next.svg";
import testimonials from "../../../data/testimonials.json";

const testimonial = (imgName) => {
  return require(`../../../assets/img/testimonials/${imgName}`);
};

const Testimonials = () => {
    const { t } = useTranslation();
    const customOptions = {
      items: 3,
      dots: true,
      dotsEach: 3,
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
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
    <>
      <section className="testimonialsSection">
        <div className="testimonialsContent">
          <Link to={"/testimonial"}>
            <h1>{t("reviews.title")}</h1>
          </Link>
        </div>
        <OwlCarousel options={customOptions}>
          {testimonials.map((item, index) => (
            <div key={index} id="agent-testimonial">
              <img src={testimonial(item.img)} alt="" id="test-img" />
              <h2>{item.name}</h2>
              <h3>{item.company}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </OwlCarousel>
      </section>
    </>
  );
};

export default Testimonials;
