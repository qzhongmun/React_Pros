import React, { useState, useEffect } from "react";
import axios from "axios";

export default function PersonList() {
  const [state, setState] = useState([{ id: 1, name: "Leanne Graham" }]);

  const getData = async () => {
    const { data } = await axios.get(`http://localhost:3000/Data`);
    setState(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ul>
      {state.map((Data) => (
        <li key={Data.id}>{Data.name}</li>
      ))}
    </ul>
  );
}
