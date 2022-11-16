import React from "react";
import metaverseImg from "../image/F1.png";
import adventureImg from "../image/F2.png";
import adventureImg1 from "../image/F3.png";
import adventureImg2 from "../image/F4.png";
import adventureImg3 from "../image/F5.png";
import adventureImg4 from "../image/F6.png";
import adventureImg5 from "../image/F7.png";
import adventureImg6 from "../image/F8.png";

import Adventure from "./elements/adventure";

const adventures = [
  {
    id: 0,
    name: "desert king",
    price: "1MBT per night",
    distance: "2345km away",
    duration: "available for 2weeks stay",
    img: metaverseImg,
  },

  {
    id: 1,
    name: "desert king",
    price: "1MBT per night",
    distance: "2345km away",
    duration: "available for 2weeks away",
    img: adventureImg1,
  },

  {
    id: 2,
    name: "desert king",
    price: "1MBT per night",
    distance: "2345km away",
    duration: "available for 2weeks away",
    img: adventureImg2,
  },
  {
    id: 3,
    name: "desert king",
    price: "1MBT per night",
    distance: "2345km away",
    duration: "available for 2weeks away",
    img: adventureImg,
  },

  {
    id: 4,
    name: "desert king",
    price: "1MBT per night",
    distance: "2345km away",
    duration: "available for 2weeks away",
    img: adventureImg3,
  },

  {
    id: 5,
    name: "desert king",
    price: "1MBT per night",
    distance: "2345km away",
    duration: "available for 2weeks away",
    img: adventureImg4,
  },

  {
    id: 6,
    name: "desert king",
    price: "1MBT per night",
    distance: "2345km away",
    duration: "available for 2weeks away",
    img: adventureImg5,
  },

  {
    id: 7,
    name: "desert king",
    price: "1MBT per night",
    distance: "2345km away",
    duration: "available for 2weeks away",
    img: adventureImg6,
  },
];

function Secondpage() {
  return (
    <div className="secondpage-container">
      <div className="secondpage-header">
        <h1>Inspiration for your next adventure</h1>
      </div>

      <div className="grid-container">
        {adventures.map(({ name, id, img, duration, price, distance }) => (
          <Adventure
            key={id}
            name={name}
            img={img}
            duration={duration}
            price={price}
            distance={distance}
          />
        ))}
      </div>
    </div>
  );
}

export default Secondpage;
