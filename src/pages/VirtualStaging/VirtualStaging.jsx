import React from "react";
import Header from "../../components/Header/Header";
import Partners from "../../components/HomeComponents/Partners/Partners";
import {PlaceOrder} from "../../components/HomeComponents/PlaceOrderComponent/PlaceOrder";
import { useTranslation } from "react-i18next";
import Testimonials from "../../components/Testimonials/Testimonials";
import Footer from "../../components/Footer/Footer";


const VirtualStaging = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Header />
      <div class="go-to-services">
        <p>{t("VS.text")}</p>
        <button>{t("VS.btn")}</button>
      </div>
      <Partners />
      <PlaceOrder />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default VirtualStaging;
