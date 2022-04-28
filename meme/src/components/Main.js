import React from "react";
import pic2 from "../images/2.png";
import pic3 from "../images/3.png";

export default function Main() {
  return (
    <main>
      <div className="main_input">
        <input placeholder="  Shut Up"></input>
        <input placeholder="  And Take My Money"></input>
      </div>
      <button className="main_button">
        <img className="main_pic2" src={pic2}></img>
      </button>
      <img src={pic3}></img>
    </main>
  );
}
