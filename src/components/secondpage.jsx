import React from "react";
import metaverseImg from "../image/F1.png";
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
    img: metaverseImg,
  },

  {
    id: 2,
    name: "desert king",
    price: "1MBT per night",
    distance: "2345km away",
    duration: "available for 2weeks away",
    img: metaverseImg,
  },
  {
    id: 3,
    name: "desert king",
    price: "1MBT per night",
    distance: "2345km away",
    duration: "available for 2weeks away",
    img: metaverseImg,
  },

  {
    id: 4,
    name: "desert king",
    price: "1MBT per night",
    distance: "2345km away",
    duration: "available for 2weeks away",
    img: metaverseImg,
  },

  {
    id: 5,
    name: "desert king",
    price: "1MBT per night",
    distance: "2345km away",
    duration: "available for 2weeks away",
    img: metaverseImg,
  },

  {
    id: 6,
    name: "desert king",
    price: "1MBT per night",
    distance: "2345km away",
    duration: "available for 2weeks away",
    img: metaverseImg,
  },

  {
    id: 7,
    name: "desert king",
    price: "1MBT per night",
    distance: "2345km away",
    duration: "available for 2weeks away",
    img: metaverseImg,
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
