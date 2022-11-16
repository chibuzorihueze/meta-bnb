import React from "react";
import maxImg from "../image/max.png";
import walletImg from "../image/wallet.png";
import angleImg from "../image/angle.png";

const Modal = () => {
  return (
    <div>
      <div className="modal-container">
        <div className="modal-heading">
          <h3>Connet Wallet</h3>
        </div>
        <div className="modal-subheading">
          <p>Choose your prefeared Wallet:</p>
        </div>
        <div className="metamask">
          <div className="metamask-img">
            <img src={maxImg} alt="max" />
          </div>
          <div className="metamask-text">
            <h3>Metamask</h3>
          </div>
          <div className="angle">
            <img src={angleImg} alt="angle" />
          </div>
        </div>

        <div className="wallet">
          <div className="wallet-img">
            <img src={walletImg} alt="max" />
          </div>
          <div className="wallet-text">
            <h3> WalletConnect </h3>
          </div>
          <div className="angle2">
            <img src={angleImg} alt="angle" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
