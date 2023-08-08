import React from "react";
import './Contact.css'
import { useTranslation } from "react-i18next";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Contact = () => {
  const { t } = useTranslation();

  return (
      <div>
          {/* WE NEED ONSUBMIT FUNTIONALITIES */}
      {/* {loading && (
      <div className="loader-container">
        <span className="loader"></span>
      </div>
    )} */}
          <Header />

      <div className="contact-container">
        <h1>{t("contact-us.title")}</h1>
        <p>{t("contact-us.text")}</p>
        <form className="formSubmit">
          <input
            type="text"
            placeholder={t("contact-us.placeholder1")}
            required
            name="name"
          />
          <input
            type="email"
            placeholder={t("contact-us.placeholder2")}
            required
            name="Email"
          />
          <textarea
            cols="30"
            rows="10"
            placeholder={t("contact-us.placeholder3")}
            required
            name="message"
          ></textarea>
          <button>{t("contact-us.btn")}</button>
        </form>
          </div>
          <Footer />
    </div>
  );
};

export default Contact;
