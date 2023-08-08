import React from "react";
import "./Gallery.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Content from "./content/Content";
import Partners from "../../components/HomeComponents/Partners/Partners";
import { PlaceOrder } from "../../components/HomeComponents/PlaceOrderComponent/PlaceOrder";
import Testimonials from "../../components/HomeComponents/Testimonials/Testimonials";

const Gallery = () => {
  return (
    <div>
      <Header />
      <Content />
      <Partners />
      <PlaceOrder />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Gallery;
