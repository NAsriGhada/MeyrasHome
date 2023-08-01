import React from 'react'
import './commingSoon.css'

const CommingSoon = () => {
  return (
    <div>
      <section className="mainContent">
        <h1>STAY TUNED !</h1>
        <div className="partTwo">
          <p>
            Our website is being updated with better user experience ! It will
            be available soon
          </p>
          <p>
            Notre site web est en train d'être mis à jour pour une meilleure
            expérience d'utilisateur ! Il sera bientôt disponible
          </p>
        </div>
        <div className="partThree">
          <img src={require("../../assets/img/comingSoon/a.png")} alt="" />
          <img src={require("../../assets/img/comingSoon/b.png")} alt="" />
        </div>
        <div className="lastPart">
          <p>Contact us:</p>
          <p>514-447-7392 - info@meryashome.com</p>
          <p>Follow us:</p>
          <div className="imgsLastPart">
            <img src={require("../../assets/img/comingSoon/facebook.png")} alt="" />
            <img src={require("../../assets/img/comingSoon/instagram.png")} alt="" />
            <img src={require("../../assets/img/comingSoon/youtube.png")} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default CommingSoon