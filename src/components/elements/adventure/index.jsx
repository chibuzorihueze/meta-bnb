import React from "react";

const Adventure = ({ img, name, price, distance, duration }) => {
  return (
    <div className="grid-section">
      <div className="grid-image">
        <img src={img} alt="metaverse" loading="lazy" />
      </div>
      <div className="grid-image-footer">
        <div className="desert-king">
          <p>{name}</p>
          <p>{price}</p>
        </div>
        <div className="desert-king">
          <p>{distance}</p>
          <p>{duration}</p>
        </div>
        <span> &#9733; &#9733; &#9733; &#9733; &#9733;</span>
      </div>
    </div>
  );
};

export default Adventure;
