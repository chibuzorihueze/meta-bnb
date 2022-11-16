import React from "react";

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
          <h3>Metamask</h3>
        </div>
        <div className="wallet">
          <h3>WalletConnect</h3>
        </div>
      </div>
    </div>
  );
};

export default Modal;
