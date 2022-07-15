import React, { Component } from "react";
import DataTable from "./data-table";

export default function Users() {
  const [state, setState] = React.useState({ usersCollection: [] });
  const [selectedId, setSelectedId] = React.useState(null);

  const axios = require("axios");
  const sendGetRequest = async () => {
    try {
      const resp = await axios
        .get("http://localhost:4000/users")
        .then((res) => {
          setState((prev) => {
            return { ...prev, usersCollection: res.data };
          });
        });
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };
  sendGetRequest();

  async function handleDelete(event) {
    console.log("Deleting", selectedId);
    event.preventDefault();
    const response = await axios.delete(
      `http://localhost:4000/users/delete/${selectedId}`
    );
    if (response.status === 200) {
      console.log("Delete Successful!");
      window.location.href = window.location.href;
    }
  }

  return (
    <div className="wrapper-users">
      <div className="container">
        <table className="table table-striped table-dark">
          <thead className="thead-dark">
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Email</td>
              <td>Select</td>
            </tr>
          </thead>
          <tbody>
            {state.usersCollection.map((data, i) => {
              return (
                <DataTable
                  obj={data}
                  selected={selectedId == data.email}
                  setter={setSelectedId}
                  SelectedId={selectedId}
                  key={i}
                />
              );
            })}
          </tbody>
        </table>
      </div>
      <button onClick={handleDelete}>Delete Selected</button>
    </div>
  );
}
