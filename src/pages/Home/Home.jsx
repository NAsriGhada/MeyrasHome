import React from "react";
import Partners from "../../components/HomeComponents/Partners/Partners";
import Banner from "../../components/HomeComponents/Banner/Banner";
import Services from "../../components/HomeComponents/Services/Services";
import WeOffer from "../../components/HomeComponents/WeOffer/WeOffer";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import WhyUs from "../../components/HomeComponents/WhyUs/WhyUs";
import StagedListing from "../../components/HomeComponents/StagedListing/StagedListing";
import { PlaceOrder } from "../../components/HomeComponents/PlaceOrderComponent/PlaceOrder";



const Home = () => {
  return (
    <div className="bg">
      <Header />
      <Banner />
      <WhyUs />
      {/* <StagedListing /> */}
      <WeOffer />
      <PlaceOrder />
      <Services />
      <Partners />
      <PlaceOrder />
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta enim iusto at eaque dolore cum, tenetur, quod facilis error numquam repellendus molestias sit sint corporis qui corrupti, perspiciatis id expedita.
      <Footer />
    </div>
  );
};

export default Home;
