import React from 'react'
import { useTranslation } from "react-i18next";
import Untitled1 from '../../../assets/img/services/Untitled-1 1.png'
import Untitled2 from '../../../assets/img/services/Untitled-2 4.png'
import Untitled3 from '../../../assets/img/services/Untitled-2 5.png'
import { Link } from 'react-router-dom';
import './Services.css'


const Services = () => {
      const { t } = useTranslation();

    return (
      <div className="servicesContainer">
        <div className="servicesContent">
          <h1>{t("home.our-services.title")}</h1>
          <div className="partOneServices">
            <div className="partOneServicesContent">
              <h2>{t("home.our-services.bloc1.title")}</h2>
              <p>{t("home.our-services.bloc1.text")}</p>
              {/* <button>
                <Link to={"/services"}></Link>
                {t("home.our-services.btns")}
              </button> */}
              <Link to={"/services"}>
                <button>{t("home.our-services.btns")}</button>
              </Link>
            </div>
            <img src={Untitled2} alt="" />
          </div>
          <div className="partTwoServices">
            <div className="partTwoServicesContent">
              <h2>{t("home.our-services.bloc2.title")}</h2>
              <p>{t("home.our-services.bloc2.text")}</p>
              {/* <button>
                <Link to={"/services"}>{t("home.our-services.btns")}</Link>
              </button> */}
              <Link to={"/services"}>
                <button>{t("home.our-services.btns")}</button>
              </Link>
            </div>
            <img src={Untitled1} alt="" />
          </div>
          <div className="partOneServices">
            <div className="partOneServicesContent">
              <h2>{t("home.our-services.bloc3.title")}</h2>
              <p>{t("home.our-services.bloc3.text")}</p>
              {/* <button>
                <Link to={"/services"}>{t("home.our-services.btns")}</Link>
              </button> */}
              <Link to={"/services"}>
                <button>{t("home.our-services.btns")}</button>
              </Link>
            </div>
            <img src={Untitled3} alt="" />
          </div>
          <div className="go-to-services">
            <p>{t("home.our-services.text")}</p>
            {/* <button>
              <Link to={"/services"}>{t("home.our-services.btn")}</Link>
            </button> */}
            <Link to={"/services"}>
              <button>{t("home.our-services.btn")}</button>
            </Link>
          </div>
        </div>
      </div>
    );
}

export default Services