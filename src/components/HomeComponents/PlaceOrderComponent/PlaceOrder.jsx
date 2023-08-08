import React from 'react'
import './PlaceOrder.css'
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';

export const PlaceOrder = () => {
      const { t } = useTranslation();

    return (
      <div className="offerOrder">
        <p>{t("Place-order.text")}</p>
        <Link to={"/placeOrder"}>
          <button>{t("Place-order.btn")}</button>
        </Link>
      </div>
    );
}
