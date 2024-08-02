

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data/data";

const App = () => {

 const cards = data.map((item,index)=>(
  <Card key={index}
  img={item.coverImg}
  title={item.title}
  startRet={item.stats.rating}
  counsValue={item.stats.reviewCount}
  dolerValue={item.price}
  openSpots={item.openSpots}
/>

 ))
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="  px-5">
        <div className="grid grid-cols-12 ">
        {cards}
        </div>
      </div>
    </div>
  );
};

export default App;

