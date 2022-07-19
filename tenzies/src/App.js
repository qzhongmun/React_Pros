import "./App.css";
// import data from "./components/data";
import React from "react";
import Box from "./components/box";
import { useState } from "react";
import { Div } from "./components/styles/Div.styled";
import { P } from "./components/styles/P.styled";
import { H1 } from "./components/styles/H1.styled";
import { Button } from "./components/styles/Button.styled";

function App() {
  const [boxs, setBoxs] = useState(generateData());
  const [flag, setFlag] = useState(0);
  const [buttonflag, setButtonflag] = useState(false);

  // useEffect(() => {
  //   let boxs = generateData();
  // }, []);

  function getRandomInt() {
    let min = Math.ceil(1);
    let max = Math.floor(10);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  function generateData() {
    let newArray = [];
    for (let i = 0; i < 10; i++) {
      const obj = {
        id: i,
        value: getRandomInt(),
        type: true,
      };
      newArray.push(obj);
    }

    return newArray;
  }

  function toggle(id, value) {
    setFlag(value);
    setBoxs((prevSquares) => {
      return prevSquares.map((square) => {
        return square.id === id ? { ...square, type: !square.type } : square;
      });
    });
  }

  const squareElements = boxs.map((box) => (
    <Box
      key={box.id}
      id={box.id}
      type={box.type}
      toggle={toggle}
      value={box.value}
    />
  ));

  function handleClick() {
    if (buttonflag) {
      window.location.reload(false);
    } else {
      setBoxs((oldNotes) => {
        var newarray = [];
        for (let i = 0; i < oldNotes.length; i++) {
          const oldNote = oldNotes[i];
          oldNote.type
            ? newarray.push({ ...oldNote, value: getRandomInt() })
            : newarray.push(oldNote);
        }
        return newarray;
      });

      let anotherArray = boxs.filter((box) => box.type);
      let thirdArray = boxs.filter((box) => box.value === flag);
      if (anotherArray.length === 0 && thirdArray.length === 10) {
        console.log("success");
        setButtonflag(true);
      } else if (thirdArray.length === 10) {
        console.log("not success");
      }
    }
  }

  return (
    <Div>
      <H1>Tenzies</H1>
      <P>
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </P>
      <div>{squareElements}</div>
      <br />
      <Button onClick={handleClick}>
        {buttonflag ? "Reset Game" : "Roll"}
      </Button>
    </Div>
  );
}

export default App;
