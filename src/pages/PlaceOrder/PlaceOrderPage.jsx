import React from "react";
import "./PlaceOrderPage.css";
import { useTranslation } from "react-i18next";
import Eight from "../../assets/img/8 1.png";
import SalonOne from "../../assets/img/Salon _ Salle à manger 3-VS-HT (2) 1 (1).png";
import SalonTwoOne from "../../assets/img/Salon _ Salle à manger 3-VS-HT (2) 1.png";
import SalonTwo from '../../assets/img/Salon _ Salle à manger 3-VS-HT (2) 2.png'
import SalonThree from "../../assets/img/Salon _ Salle à manger 3 1.png";
import SalonThreeFour from "../../assets/img/Salon _ Salle à manger 3 1 (4).png";
import SalonThreeOne from "../../assets/img/Salon _ Salle à manger 3 1 (2).png";
import SalonThreeFive from "../../assets/img/Salon _ Salle à manger 3 1 (5).png";
import SalonThreeSix from "../../assets/img/Salon _ Salle à manger 3 1 (6).png";

const PlaceOrderPage = () => {
  const { t } = useTranslation();

  return (
    <div className="placeOrderMainContainer">
      <div className="placeOrderMainContent">
        <div className="placeOrderContentFirstPart">
          <div className="placeOrderContentFirstPartTitle">
            <h1>{t("place-order-page.title")}</h1>
            <p>{t("place-order-page.text")}</p>
          </div>
          <img src={Eight} alt="" />
        </div>
        <div className="placeOrderContentPack">
          <h2>{t("place-order-page.subtitle")}</h2>
          <div className="placeOrderContentPackDetails">
            {/* <!-- card1 --> */}
            {/* tried to apply bootstrap card but it messed up the css so i removed its classes */}
            <div className="example-card">
              <img src={SalonTwo} alt=" Shiba Inu" />
              <div>
                <div>
                  {t("place-order-page.card1.title")}
                </div>
                <div className="card-subtitle">
                  {t("place-order-page.card1.subtitle")}
                </div>
                <span>{t("place-order-page.card1.price")}</span>
              </div>
            </div>

            {/* <!-- card2 --> */}
            <div className="example-card">
              <img src={SalonTwoOne} alt=" Shiba Inu" />
              <div>
                <div>
                  {t("place-order-page.card2.title")}
                </div>
                <div>
                  {t("place-order-page.card2.subtitle")}
                </div>
                <span>{t("place-order-page.card2.price")}</span>
              </div>
            </div>
            {/* <!-- card3 --> */}
            <div class="example-card">
              <img src={SalonOne} alt="Shiba Inu" />
              <div>
                <div>
                  {t("place-order-page.card3.title")}
                </div>
                <div>
                  {t("place-order-page.card3.subtitle")}
                </div>
                <span>{t("place-order-page.card3.price")}</span>
              </div>
            </div>
            {/* <!-- card4 --> */}
            <div class="example-card">
              <img src={SalonThree} alt="Shiba Inu" />
              <div>
                <div>
                  {t("place-order-page.card4.title")}
                </div>
                <div>
                  {t("place-order-page.card4.subtitle")}
                </div>
                <span>{t("place-order-page.card4.price")}</span>
              </div>
            </div>
            {/* <!-- card5 --> */}
            <div class="example-card">
              <img src={SalonThreeFour} alt="Shiba Inu" />
              <div>
                <div>
                  {t("place-order-page.card5.title")}
                </div>
                <div>
                  {t("place-order-page.card5.subtitle")}
                </div>
                <span>{t("place-order-page.card5.price")}</span>
              </div>
            </div>
            {/* <!-- card6 --> */}
            <div class="example-card">
              <img src={SalonThreeOne} alt="Shiba Inu" />
              <div>
                <div>
                  {t("place-order-page.card6.title")}
                </div>
                <div>
                  {t("place-order-page.card6.subtitle")}
                </div>
                <span>{t("place-order-page.card6.price")}</span>
              </div>
            </div>
            {/* <!-- card7 --> */}
            <div class="example-card">
              <img src={SalonThreeFive} alt="Shiba Inu" />
              <div>
                <div>
                  {t("place-order-page.card7.title")}
                </div>
                <div>
                  {t("place-order-page.card7.subtitle")}
                </div>
                <span>{t("place-order-page.card7.price")}</span>
              </div>
            </div>
            {/* <!-- card8 --> */}
            <div class="example-card">
              <img src={SalonThreeSix} alt="Shiba Inu" />
              <div>
                <div>
                  {t("place-order-page.card8.title")}
                </div>
                <div>
                  {t("place-order-page.card8.subtitle")}
                </div>
                <span>{t("place-order-page.card8.price")}</span>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- checkout --> */}
        <hr style={{ width: "100%" }} />
        {/* ng classes for this div, check the original code */}
        <div>
          {/* ng classes for this div, check the original code */}
          <h1 class="order">
            {t("place-order-page.POT.text1")} <span> info@meryashome.com</span>{" "}
            {t("place-order-page.POT.text2")} <span>514-447-7392</span>
          </h1>
          {/* ng classes for this div, check the original code */}
          <div class="order">
            <h1>
              {t("place-order-page.POT.text1resp")}
              <span> info@meryashome.com</span>
              {t("place-order-page.POT.text2resp")}
              <span>(+1)514-447-7392</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrderPage;
