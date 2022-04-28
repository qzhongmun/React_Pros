import React from "react";
import pic1 from "../images/1.png";

export default function Header() {
  return (
    <nav>
      <div className="header-img_p1">
        <img className="img1" src={pic1}></img>
        <p className="header-p1">Meme Generator</p>
      </div>
      <p className="header-p2">React Course - Project 3</p>
    </nav>
  );
}
