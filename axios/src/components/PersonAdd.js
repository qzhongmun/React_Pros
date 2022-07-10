import React, { useState, useEffect } from "react";
import axios from "axios";

export default function PersonList() {
  const [state, setState] = useState([{ id: 1, name: "Leanne Graham" }]);

  function handleChange(event) {
    setState({ name: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const name = state.name;

    axios.post(`http://localhost:3000/Data`, { name }).then((res) => {
      console.log(res.data);
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Person Name:
          <input type="text" name="name" onChange={handleChange} />
        </label>
        <button type="submit" onClick={() => window.location.reload(false)}>
          Add
        </button>
      </form>
    </div>
  );
}
