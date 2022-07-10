import React from "react";
import axios from "axios";
import API from "../api";

export default function PersonRemove() {
  const [state, setState] = React.useState([{ id: 1, name: "Leanne Graham" }]);

  function handleChange(event) {
    setState({ id: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await API.delete(`Data/${state.id}`);
    console.log(response.data);
    console.log();
  }

  //   handleSubmit = (event) => {
  //     event.preventDefault();
  //     API.delete(`users/${this.state.id}`).then((res) => {
  //       console.log(res);
  //       console.log(res.data);
  //     });
  //   };
  //   handleSubmit = (event) => {
  //     event.preventDefault();
  //     axios
  //       .delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
  //       .then((res) => {
  //         console.log(res);
  //         console.log(res.data);
  //       });
  //   };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Person ID:
          <input type="number" name="id" onChange={handleChange} />
        </label>
        <button type="submit" onClick={() => window.location.reload(false)}>
          Delete
        </button>
      </form>
    </div>
  );
}
