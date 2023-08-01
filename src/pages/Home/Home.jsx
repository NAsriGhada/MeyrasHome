import React from "react";
import Partners from "../../components/HomeComponents/Partners/Partners";
import Banner from "../../components/HomeComponents/Banner/Banner";
import Services from "../../components/HomeComponents/Services/Services";
import WeOffer from "../../components/HomeComponents/WeOffer.jsx/WeOffer";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import WhyUs from "../../components/HomeComponents/WhyUs/WhyUs";

const Home = () => {
  return (
    <div className="bg">
      <Header />
      <Banner />
      <WhyUs />
      <WeOffer />
      <Services />
      <Partners />
      <Footer />
    </div>
  );
};

export default Home;
