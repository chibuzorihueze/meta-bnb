import React from "react";
import { Link } from "react-router-dom";
import metaverseImg from "../image/logo.png";

function Nav({ setShowModal }) {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <div className="logo-text">
          <img src={metaverseImg} alt="logo" />
        </div>
      </div>
      <div className="nav-list">
        <ul>
          <li>Home</li>
          <li className="place-link">
            <Link to="/places">Place to stay</Link>
          </li>
          <li>NFTs</li>
          <li>Community</li>
        </ul>
      </div>
      <div
        className="nav-button"
        onClick={() => setShowModal((prevState) => !prevState)}
      >
        <button>Connect wallet</button>
      </div>
    </div>
  );
}

export default Nav;
