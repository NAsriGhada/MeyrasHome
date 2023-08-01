import React from 'react'
import './Partners.css'
import Century from '../../../assets/img/logo/century21.svg'
import Sothebys from "../../../assets/img/logo/sothebys.svg";
import KellerWilliams from "../../../assets/img/logo/kellerWilliams.svg";
import Remax from "../../../assets/img/logo/remax.svg";
import Six from "../../../assets/img/logo/six.svg";
import Via from "../../../assets/img/logo/via.svg";
import Royallepage from "../../../assets/img/logo/royallepage.svg";
import RoyalEngel from "../../../assets/img/logo/Engel-voelkers-logo.svg";
import Exp from "../../../assets/img/logo/exp.svg";
import Charisma from "../../../assets/img/logo/charisma.svg";
import Sutton from "../../../assets/img/logo/sutton.svg";
import { useTranslation } from "react-i18next";


const Partners = () => {
      const { t } = useTranslation();
  return (
    <div>
      <div className="partners-container">
        <h3 className="partners-title">{t("partners.title")}</h3>
        <div className="partners-logos">
          <img src={Century} alt="Century21" />
          <img src={Sothebys} alt="Sothebys" />
          <img src={KellerWilliams} alt="KellerWilliams" />
          <img src={Remax} alt="Remax" />
          <img src={Six} alt="Six" />
          <img src={Via} alt="Via" />
          <img src={Royallepage} alt="Royallepage" />
          <img src={RoyalEngel} alt="RoyalEngel" />
          <img src={Exp} alt="Exp" />
          <img src={Charisma} alt="Charisma" />
          <img src={Sutton} alt="" />
        </div>
      </div>
      
    </div>
  );
}

export default Partners