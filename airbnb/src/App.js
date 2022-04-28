import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Data from "./Data";

export default function App() {
  const DataElement = Data.map((x) => (
    <Footer
      // key={x.id}
      // img={x.coverImg}
      // rating={x.stats.rating}
      // reviewCount={x.stats.reviewCount}
      // location={x.location}
      // title={x.title}
      // price={x.price}
      // openSpots={x.openSpots}

      // key={x.id}
      // item={x}
      key={x.id}
      {...x}
    />
  ));
  return (
    <div>
      <Navbar />
      <Main />
      <div className="Group">{DataElement}</div>
    </div>
  );
}
