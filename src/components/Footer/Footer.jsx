import React from 'react'
import './footer.css'
import { useTranslation } from "react-i18next";


const Footer = () => {
    const { t } = useTranslation();

  return (
    <div>
      <section className="footerMainContent">
        <div className="allTogether">
          <img src={require("../../assets/img/logo/whiteLogo.png")} alt="" />
          <p className="email">info@meryashome.com</p>
          <p className="Phonenumber">514-447-7392</p>
          <div className="socialMedia">
            <img src={require("../../assets/img/social media logo/whiteFacebook.png")} alt="" />
            <img
              src={require("../../assets/img/social media logo/whiteInstagram.png")}
              alt=""
            />
            <img src={require("../../assets/img/social media logo/whiteYoutube.png")} alt="" />
          </div>
          <div className="footerMenu">
            <a href="/">
              {t('header.menu.m2')}
            </a>
            <a href="/virtual-staging">
              {t('header.menu.m3')}
            </a>
            <a href="/services">
              {t('header.menu.m4')}
            </a>
            <a href="/gallery">
              {t( 'header.menu.m5')}
            </a>
            <a href="/contact">
              {t('header.menu.m6')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer