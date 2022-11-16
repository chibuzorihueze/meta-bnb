import React from "react";
import metaverseImg from "../image/F1.png";

const adventures = [
  {
    id: 0,
    name: "desert king",
    price: "1MBT per night",
    distance: "2345km away",
    duration: "available for 2weeks away",
    img: metaverseImg
  },

  {
    id: 1,
    name: "desert king",
    price: "1MBT per night",
    distance: "2345km away",
    duration: "available for 2weeks away",
    img: metaverseImg
  },
];

function Secondpage() {
  return (
    <div className="secondpage-container">
      <div className="secondpage-header">
        <h1>Inspiration for your next adventure</h1>
      </div>

      {/*first gird colume */}

      <div className="grid-container">
        {adventures.map((adventure) => (
          <div className="grid-section" key={adventure.id}>
            <div className="grid-image">
              <img src={adventure.img} alt="metaverse" loading="lazy" />
            </div>
            <div className="grid-image-footer">
              <div className="desert-king">
                <p>{adventure.name}</p>
                <p>{adventure.price}</p>
              </div>
              <div className="desert-king">
                <p>{adventure.distance}</p>
                <p>{adventure.duration}</p>
              </div>
              <span> &#9733; &#9733; &#9733; &#9733; &#9733;</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Secondpage;
