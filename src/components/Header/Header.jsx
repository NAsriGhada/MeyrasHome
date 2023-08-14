import React, { useState } from "react";
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
  const [activeLanguage, setActiveLanguage] = useState(
    localStorage.getItem("lng") || "en"
  );
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setActiveLanguage(lng);
    localStorage.setItem("lng", lng);
    console.log(`Language changed to: ${lng}`);
  };

  // useEffect(() => {
  //   i18n.changeLanguage(activeLanguage);
  //   localStorage.setItem("lng", activeLanguage);
  // }, [activeLanguage]);

  // const changeLanguage = (lng) => {
  //   setActiveLanguage(lng);
  // };

  const toggleSubMenu = () => {
    // Implementation for toggling the sub-menu goes here
  };

  return (
    <>
      {/* !!!!! I CHANGED THE LINKS CSS, I ADDED A CLASS TO ALL OF THE LINK TAGS */}
      <p
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
                  className={`language ${
                    activeLanguage === "en" ? "active" : ""
                  }`}
                  onClick={() => changeLanguage("en")}
                  // onClick={() => useLanguage("en")}
                  // You may add a condition to apply the 'active' class based on the selected language
                  // className={language === 'en' ? 'active' : ''}
                >
                  ENGLISH
                </span>
                -
                <span
                  className={`language ${
                    activeLanguage === "fr" ? "active" : ""
                  }`}
                  onClick={() => changeLanguage("fr")}
                  // onClick={() => useLanguage("fr")}
                  // You may add a condition to apply the 'active' class based on the selected language
                  // className={language === 'fr' ? 'active' : ''}
                >
                  français
                </span>
              </p>
              <p className="nav-item">
                <Link to={"/comming-soon"} className="a nav-link">
                  {t("header.topPart.Login")}
                </Link>
              </p>
            </div>
          </div>

          <div className="BG">
            <nav>
              <input type="checkbox" id="check" />
              <Link to={"/"} className="a">
                <label className="logo">
                  <img src={require("../../assets/img/logo/logo.png")} alt="" />
                </label>
              </Link>

              <ul>
                <label htmlFor="check" className="checkbtn">
                  <VscChromeClose />
                </label>
                <li>
                  <Link to={"/signUp"} className="a">
                    {t("header.menu.m1")}
                  </Link>
                </li>
                <li className="link">
                  <Link to={"/"} className="a nav-link">
                    {t("header.menu.m2")}
                  </Link>
                </li>
                <li>
                  <Link to={"/virtual-staging"} className="a nav-link">
                    {t("header.menu.m3")}
                  </Link>
                </li>
                <li id="dropdown">
                  <Link
                    to={"/services"}
                    className="a nav-link"
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
                      <Link
                        to={"http://localhost:4200/services#STAGING"}
                        className="a"
                      >
                        VIRTUAL STAGING
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"http://localhost:4200/services#RENOVATION"}
                        className="a"
                      >
                        VIRTUAL RENOVATION
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"http://localhost:4200/services#MODELING"}
                        className="a"
                      >
                        3D MODELING
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"http://localhost:4200/services#ENHANCEMENT"}
                        className="a"
                      >
                        IMAGE ENHANCEMENT
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"http://localhost:4200/services#REMOVAL"}
                        className="a"
                      >
                        ITEM REMOVAL
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"http://localhost:4200/services#EDITING"}
                        className="a"
                      >
                        CUSTOMIZED EDITING
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"http://localhost:4200/services#VIDEO"}
                        className="a"
                      >
                        LISTING PROMOTIONAL VIDEO
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to={"/gallery"} className="a nav-link">
                    {t("header.menu.m5")}
                  </Link>
                </li>
                <li>
                  <Link to={"/contact"} className="a nav-link">
                    {t("header.menu.m6")}
                  </Link>
                </li>
                <li>
                  <Link to={"/placeOrder"} id="order" className="a nav-link">
                    {t("header.menu.m7")}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </p>
    </>
  );
};

export default Header;
