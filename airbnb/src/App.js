import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Data from "./Data";

export default function App() {
  const DataElement = Data.map((x) => (
    <Footer
      img={x.coverImg}
      rating={x.stats.rating}
      reviewCount={x.stats.reviewCount}
      location={x.location}
      title={x.title}
      price={x.price}
    />
  ));
  return (
    <div>
      <Navbar />
      <Main />
      {DataElement}
    </div>
  );
}
