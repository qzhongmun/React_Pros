import React from "react";
import memesData from "../memesData";
import "../App.css";

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
  const [memeImage, setMemeImage] = React.useState({
    Toptext: "",
    Bottomtext: "",
    Url: "https://i.imgflip.com/9ehk.jpg",
  });

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage((prev) => {
      return {
        ...prev,
        Url: memesArray[randomNumber].url,
      };
    });
  }

  function handleChange(event) {
    const { value, name } = event.target;
    setMemeImage((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
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
        <input
          type="text"
          placeholder="Top text"
          className="form--input"
          name="Toptext"
          value={memeImage.Toptext}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="form--input"
          name="Bottomtext"
          value={memeImage.Bottomtext}
          onChange={handleChange}
        />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <br />
      <br />
      <div className="meme--image">
        <img className="meme--image1" src={memeImage.Url} alt="" />
        <h2 className="meme--text meme--image2">{memeImage.Toptext}</h2>
        <h2 className="meme--text meme--image3">{memeImage.Bottomtext}</h2>
      </div>
    </main>
  );
}
