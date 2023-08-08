import React from "react";
import "./Testimonial.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useTranslation } from "react-i18next";

const Testimonial = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Header />
      {/* WE NEED TO WORK ON THE SUBMIT FUNCTIONALITIES */}
      {/* <div *ngIf="this.loading==true" class="loader-container">
    <span class="loader"></span>
  </div>  */}
      <div className="contact-container">
        <h1>We want to hear about your journey with us</h1>
        <p>
          Feel free to be as detailed as you wish, as every comment matters to
          us
        </p>
        <form className="formSubmit">
          <input
            type="text"
            placeholder={t("contact-us.placeholder1")}
            required
            formControlName="name"
          />
          <input
            type="email"
            placeholder={t("contact-us.placeholder2")}
            formControlName="Email"
            required
          />
          <textarea
            cols="30"
            rows="10"
            placeholder={t("contact-us.placeholder3")}
            formControlName="message"
            required
          ></textarea>
          <button>{t("contact-us.btn")}</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Testimonial;
