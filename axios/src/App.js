// import "./App.css";
import PersonList from "./components/PersonList.js";
import PersonAdd from "./components/PersonAdd";
import PersonRemove from "./components/PersonRemove";
import React from "react";

function App() {
  return (
    <div className="App">
      <PersonAdd />
      <PersonList />
      <PersonRemove />
    </div>
  );
}

export default App;
