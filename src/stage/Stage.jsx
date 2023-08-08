import React from "react";
import { useTranslation } from "react-i18next";
// import listings from "../../../data/listings.json";
import listings from "../data/listings.json";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
// import prevIcon from "../../../assets/img/icons/prev.svg";
import prevIcon from "../assets/img/icons/prev.svg";
import nextIcon from "../assets/img/icons/next.svg";
import './stage.css'

const listing = (imgName) => {
  return require(`../assets/img/listing/${imgName}`);
};
const testimonials = (imgName) => {
  return require(`../assets/img/testimonials/${imgName}`);
};
const company = (imgName) => {
  return require(`../assets/img/testimonials/${imgName}`);
};

// Install Swiper modules
SwiperCore.use([Autoplay, Navigation, Pagination]);

const Stage = () => {
  const { t } = useTranslation();

  const customOptions = {
    loop: false,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      prevEl: ".prev-btn",
      nextEl: ".next-btn",
    },
    pagination: {
      clickable: true,
    },
    // slidesPerView: 3, // Number of images to display per slide
    // spaceBetween: 10, // Add spacing between images
    // breakpoints: {
    //   // Responsive settings for different screen sizes
    //   1200: {
    //     slidesPerView: 4,
    //   },
    //   768: {
    //     slidesPerView: 3,
    //   },
    //   576: {
    //     slidesPerView: 2,
    //   },
    //   320: {
    //     slidesPerView: 1,
    //   },
    // },
  }

  return (
    <div className="vs-container">
      <div className="vs-title">{t("home.recent-listings.title")}</div>
      <div id="recent-listings">
        <Swiper {...customOptions}>
          {listings.map((item) => (
            <SwiperSlide key={item.id} className="swiper-slide">
              <div className="image-wrapper">
                {item.images.map((image, index) => (
                  <div key={`${item.id}-${index}`} id="item">
                    <img src={listing(image)} className="listinig-img" alt="" />
                  </div>
                ))}
              </div>
              <div className="recent-listner-info">
                <div className="recent-listner">
                  <img
                    id="recent-listner"
                    src={testimonials(item.photo)}
                    alt=""
                  />
                </div>
                <div className="recent-listner-details">
                  <span style={{ color: "#ffff" }}>{item.agent}</span>
                  <span style={{ color: "#ECB365" }}>{item.phone}</span>
                  <img
                    id="recent-listner-company"
                    src={company(item.company)}
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="prev-btn">
          <img src={prevIcon} alt="Previous" style={{ marginTop: "13px" }} />
        </div>
        <div className="next-btn">
          <img src={nextIcon} alt="Next" />
        </div>
      </div>
    </div>
  );
};

export default Stage;
