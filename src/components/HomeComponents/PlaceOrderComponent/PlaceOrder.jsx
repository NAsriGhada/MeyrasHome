import React from 'react'
import './PlaceOrder.css'
import { useTranslation } from "react-i18next";

export const PlaceOrder = () => {
      const { t } = useTranslation();

    return <div className="offerOrder">
      <p>
    {t( 'Place-order.text')}
  </p>
  <button routerLink="/placeOrder">
    {t('Place-order.btn')}
  </button>
  </div>;
}
