import React from "react";
import metaverseImg from "../image/logo2.png";
import facebookImg from "../image/facebook.png"
import instaImg from "../image/instagram.png"
import tweetImg from "../image/twiter.png"

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-line1">
        <img src={metaverseImg} alt="logo" />
          <div className="icon">
            <img src={facebookImg} alt="facebook"/>
            <img className="inst" src={instaImg} alt="instagram"/>
            <img src={tweetImg} alt="twitter"/>
          </div>
          <div className="copyright">©2022 Metabnb</div>
      </div>
      <div className="footer-line2">
        <h3>Community</h3>
        <p>NFTs</p>
        <p>Landlords</p>
        <p>Tokens</p>
        <p>Discord</p>
      </div>
      <div className="footer-line3">
        <h3>Places</h3>
        <p>Castle</p>
        <p>Farms</p>
        <p>Beach</p>
        <p>Learn moreddd</p>
      </div>
      <div className="footer-line4">
        <h3>About us</h3>
        <p>Road map</p>
        <p>Creators</p>
        <p>Career</p>
        <p>Contact us</p>
      </div>
    </div>
  );
}

export default Footer;
