import "./App.css";
// import data from "./components/data";
import React from "react";
import Box from "./components/box";
import { useState } from "react";
import { Div } from "./components/styles/Div.styled";
import { Main } from "./components/styles/Main.styled";
import { P } from "./components/styles/P.styled";
import { H1 } from "./components/styles/H1.styled";
import { Button } from "./components/styles/Button.styled";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

function App() {
  const [boxs, setBoxs] = useState(generateData());
  const [buttonflag, setButtonflag] = useState(false);

  React.useEffect(() => {
    const holdbutton = boxs.every((box) => box.type === false);
    const firstvalue = boxs[0].value;
    const allsamenumber = boxs.every((box) => box.value === firstvalue);

    if (holdbutton && allsamenumber) {
      setButtonflag(true);
    }
  }, [boxs]);

  function getRandomInt() {
    return Math.ceil(Math.random() * 9);
  }

  function generateData() {
    let newArray = [];
    for (let i = 0; i < 10; i++) {
      const obj = {
        id: nanoid(),
        value: getRandomInt(),
        type: true,
      };
      newArray.push(obj);
    }

    return newArray;
  }

  function toggle(id, value) {
    setBoxs((prevSquares) =>
      prevSquares.map((square) => {
        return square.id === id ? { ...square, type: !square.type } : square;
      })
    );
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
      // window.location.reload(false);
      setButtonflag(false);
      setBoxs(generateData());
    } else {
      setBoxs((oldNotes) =>
        oldNotes.map((oldNote) => {
          return oldNote.type ? { ...oldNote, value: getRandomInt() } : oldNote;
        })
      );
    }
  }

  return (
    <Main>
      <Div>
        <H1>Tenzies</H1>
        <P>Roll until all dice are the same. Click</P>
        <P>each die to freeze it at its current value</P>
        <P>between rolls.</P>
        <div className="mulbutton">{squareElements}</div>
        <br />
        <Button onClick={handleClick}>
          {buttonflag ? "Reset Game" : "Roll"}
        </Button>
        {buttonflag && <Confetti height="700hv" />}
      </Div>
    </Main>
  );
}

export default App;
