import React from "react";
import "./header.css";
import {
  VscMenu,
  VscMail,
  VscChromeClose,
  VscChevronDown,
} from "react-icons/vsc";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  };

  const toggleSubMenu = () => {
    // Implementation for toggling the sub-menu goes here
  };

  return (
    <div>
      <div
        style={{
          width: "100%",
          backgroundColor: "black",
          margin: 0,
          position: "fixed",
          top: 0,
          zIndex: 2,
        }}
      >
        <div className="all">
          <div className="headerTop">
            <label htmlFor="check" className="checkbtn">
              <VscMenu id=" menuicon" />
            </label>
            <div className="black-header">
              <div className="phoneNumber">
                <VscMail style={{ fontSize: "20px" }} />
                <p>info@meryashome.com</p>
              </div>
              <p>
                {/* dynamic data to be fixed later with translations */}
                {t("header.topPart.text")}
              </p>
              <p>
                <span
                  className="language"
                  onClick={() => changeLanguage("en")}
                  // onClick={() => useLanguage("en")}
                  // You may add a condition to apply the 'active' class based on the selected language
                  // className={language === 'en' ? 'active' : ''}
                >
                  ENGLISH
                </span>
                -
                <span
                  className="language"
                  onClick={() => changeLanguage("fr")}
                  // onClick={() => useLanguage("fr")}
                  // You may add a condition to apply the 'active' class based on the selected language
                  // className={language === 'fr' ? 'active' : ''}
                >
                  français
                </span>
              </p>
              <p className="nav-item">
                <Link to={"/comming-soon"} className="nav-link">
                  {t("header.topPart.Login")}
                </Link>
              </p>
            </div>
          </div>

          <div className="BG">
            <nav>
              <input type="checkbox" id="check" />
              <Link to={"/"}>
                <label className="logo">
                  <img src={require("../../assets/img/logo/logo.png")} alt="" />
                </label>
              </Link>

              <ul>
                <label htmlFor="check" className="checkbtn">
                  <VscChromeClose />
                </label>
                <li>
                  <Link to={"/signUp"}>{t("header.menu.m1")}</Link>
                </li>
                <li className="link">
                  <Link to={"/home"} className="nav-link">
                    {t("header.menu.m2")}
                  </Link>
                </li>
                <li>
                  <Link to={"/virtual-staging"} className="nav-link">
                    {t("header.menu.m3")}
                  </Link>
                </li>
                <li id="dropdown">
                  <Link
                    to={"/services"}
                    className="nav-link"
                    style={{ display: "flex", justifyContent: "center" }}
                    onClick={toggleSubMenu}
                  >
                    <span>{t("header.menu.m4")}</span>
                    <VscChevronDown id="icon" />
                  </Link>
                  <ul
                    id="service-sub-menu"
                    // You may add styles to control the sub-menu height based on your implementation
                    // [style.height]="subMenuHeight"
                    style={{
                      transition: "0.1s ease-in-out",
                      width: "fit-content",
                    }}
                  >
                    <li>
                      <a href="http://localhost:4200/services#STAGING">
                        VIRTUAL STAGING
                      </a>
                    </li>
                    <li>
                      <a href="http://localhost:4200/services#RENOVATION">
                        VIRTUAL RENOVATION
                      </a>
                    </li>
                    <li>
                      <a href="http://localhost:4200/services#MODELING">
                        3D MODELING
                      </a>
                    </li>
                    <li>
                      <a href="http://localhost:4200/services#ENHANCEMENT">
                        IMAGE ENHANCEMENT
                      </a>
                    </li>
                    <li>
                      <a href="http://localhost:4200/services#REMOVAL">
                        ITEM REMOVAL
                      </a>
                    </li>
                    <li>
                      <a href="http://localhost:4200/services#EDITING">
                        CUSTOMIZED EDITING
                      </a>
                    </li>
                    <li>
                      <a href="http://localhost:4200/services#VIDEO">
                        LISTING PROMOTIONAL VIDEO
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/gallery" className="nav-link">
                    {t("header.menu.m5")}
                  </a>
                </li>
                <li>
                  <a href="/contact" className="nav-link">
                    {t("header.menu.m6")}
                  </a>
                </li>
                <li>
                  <a href="/placeOrder" id="order" className="nav-link">
                    {t("header.menu.m7")}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
