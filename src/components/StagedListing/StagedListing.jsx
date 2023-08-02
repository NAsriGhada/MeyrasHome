import React from 'react'
import { useTranslation } from "react-i18next";
import OwlCarousel from "react-owl-carousel";
import listings from '../../data/listings.json'
import './StagedListing.css'
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import prevIcon from "../../assets/img/icons/prev.svg";
import nextIcon from "../../assets/img/icons/next.svg";

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
         <img src={prevIcon} alt="Previous" style={{ marginTop: "13px" }} />,
         <img src={nextIcon} alt="Next" />,
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
        <div class="vs-title">{t("home.recent-listings.title")}</div>
        <div id="recent-listings">
          <OwlCarousel className="owl-theme" {...customOptions}>
            {listings.map((item) => (
              <div key={item.id} className="aa">
                {item.images.map((image, index) => (
                  <div key={`${item.id}-${index}`}>
                    <img src={image} className="listinig-img" alt="" />
                  </div>
                ))}
                <div key={`${item.id}-info`} className="recent-listner">
                  <img id="recent-listner" src={item.photo} alt="" />
                  <div className="recent-listner-info">
                    <span style={{ color: "#ffff" }}>{item.agent}</span>
                    <span style={{ color: "#ECB365" }}>{item.phone}</span>
                    <img
                      id="recent-listner-company"
                      src={item.company}
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
}

export default StagedListing
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// import React from 'react';
// import { useTranslation } from 'react-i18next';
// import listings from '../../data/listings.json';
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.min.css";
// import "swiper/swiper.min.css";
// import './StagedListing.css';

// const StagedListing = () => {
//   const { t } = useTranslation();

//   const customOptions = {
//     loop: false,
//     mousewheel: true,
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//     breakpoints: {
//       0: {
//         slidesPerView: 1,
//       },
//       400: {
//         slidesPerView: 1,
//       },
//       740: {
//         slidesPerView: 1,
//       },
//       940: {
//         slidesPerView: 1,
//       },
//     },
//   };

//   return (
//     <div className="vs-container">
//       <div className="vs-title">{t('home.recent-listings.title')}</div>
//       <div id="recent-listings">
//         <Swiper {...customOptions}>
//           {listings.map((item, index) => (
//             <SwiperSlide key={index}>
//               <div className="aa">
//                 {item.images.map((image, imageIndex) => (
//                   <div key={imageIndex} id={`item${index}-${imageIndex}`}>
//                     <img
//                       src={image}
//                       className="listing-img"
//                       alt={`Image ${imageIndex}`}
//                     />
//                   </div>
//                 ))}
//                 <div className="recent-listner">
//                   <img
//                     id={`recent-listner-${index}`}
//                     src={item.photo}
//                     alt={`Recent Listener ${index}`}
//                   />
//                   <div className="recent-listner-info">
//                     <span style={{ color: '#ffff', height: 'unset' }}>
//                       {item.agent}
//                     </span>
//                     <span style={{ color: '#ECB365', height: 'unset' }}>
//                       {item.phone}
//                     </span>
//                     <img
//                       id={`recent-listner-company-${index}`}
//                       src={item.company}
//                       alt={`Recent Listener Company ${index}`}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//           <div className="swiper-button-next" />
//           <div className="swiper-button-prev" />
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default StagedListing;
