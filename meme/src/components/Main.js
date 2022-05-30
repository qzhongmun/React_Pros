import React from "react";
import pic2 from "../images/2.png";
import pic3 from "../images/3.png";
import memesData from "../memesData";

export default function Main() {
  // const [memeImage, setMemeImage] = React.useState([
  //   "https://i.imgflip.com/9ehk.jpg",
  // ]);
  // let url;

  // function getMemeImage() {
  //   const memesArray = memesData.data.memes;
  //   const randomNumber = Math.floor(Math.random() * memesArray.length);
  //   url = memesArray[randomNumber].url;
  //   const newThingText = url;
  //   // setMemeImage((prevState) => [...prevState, newThingText]);  重复增加
  //   setMemeImage((prevState) => [newThingText]); //只增加一次
  // }

  // const setMemeImage = memeImage.map((thing) => (
  //   <img key={thing} src={thing} className="img1" />
  // ));
  const [memeImage, setMemeImage] = React.useState(
    "https://i.imgflip.com/9ehk.jpg"
  );
  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
  }

  return (
    // <main>
    //   <div className="main_input">
    //     <input placeholder="  Shut Up"></input>
    //     <input placeholder="  And Take My Money"></input>
    //   </div>
    //   <button className="main_button">
    //     <img className="main_pic2" src={pic2}></img>
    //   </button>
    //   <img src={pic3}></img>
    // </main>
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" className="form--input" />
        <input type="text" placeholder="Bottom text" className="form--input" />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <img src={memeImage} className="meme--image" />
    </main>
  );
}
