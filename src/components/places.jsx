import React from "react";
import Nav from "./nav";
import Adventure from "./elements/adventure";
import placetoImg1 from "../image/F1.png";
import placetoImg2 from "../image/F2.png";
import placetoImg3 from "../image/F3.png";
import placetoImg4 from "../image/F4.png";
import placetoImg5 from "../image/F5.png";
import placetoImg6 from "../image/F6.png";
import placetoImg7 from "../image/F7.png";
import placetoImg8 from "../image/F8.png";
import Footer from "./footer";

const placetostay = [
  {
    id: 0,
    name: "desert king",
    price: "1MBT per night",
    distance: "2345km away",
    duration: "available for 2weeks stay",
    img: placetoImg1,
  },

  {
    id: 1,
    name: "desert king",
    price: "1MBT per night",
    distance: "2345km away",
    duration: "available for 2weeks away",
    img: placetoImg2,
  },

  {
    id: 2,
    name: "desert king",
    price: "1MBT per night",
    distance: "2345km away",
    duration: "available for 2weeks away",
    img: placetoImg3,
  },
  {
    id: 3,
    name: "desert king",
    price: "1MBT per night",
    distance: "2345km away",
    duration: "available for 2weeks away",
    img: placetoImg4,
  },

  {
    id: 4,
    name: "desert king",
    price: "1MBT per night",
    distance: "2345km away",
    duration: "available for 2weeks away",
    img: placetoImg5,
  },

  {
    id: 5,
    name: "desert king",
    price: "1MBT per night",
    distance: "2345km away",
    duration: "available for 2weeks away",
    img: placetoImg6,
  },

  {
    id: 6,
    name: "desert king",
    price: "1MBT per night",
    distance: "2345km away",
    duration: "available for 2weeks away",
    img: placetoImg7,
  },

  {
    id: 7,
    name: "desert king",
    price: "1MBT per night",
    distance: "2345km away",
    duration: "available for 2weeks away",
    img: placetoImg8,
  },
];

const Placetostay = () => {
  return (
    <div>
      <Nav />
      <div className="sub-nav">
        <li>Resturant</li>
        <li>Cottage</li>
        <li>Castle</li>
        <li>Fantast city</li>
        <li>beach</li>
        <li>carbins</li>
        <li>off-grid</li>
        <li>farm</li>
      </div>
      <div className="grid-container">
        {placetostay.map(({ name, id, img, duration, price, distance }) => (
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
      <Footer/>
    </div>
  );
};

export default Placetostay;
