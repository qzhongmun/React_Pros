// ** create-user.component.js ** //
import React from "react";
import axios from "axios";

export default function CreateUser() {
  const [addnewdata, setAddnewdata] = React.useState({
    name: "",
    email: "",
  });

  // console.log(state.name);
  function onChangeUserName(e) {
    // console.log(e.target.value);
    setAddnewdata((prevData) => {
      return {
        ...prevData,
        name: e.target.value,
      };
    });
  }
  function onChangeUserEmail(e) {
    // console.log(e.target.value);
    setAddnewdata((prevData) => {
      return {
        ...prevData,
        email: e.target.value,
      };
    });
  }
  function onSubmit(e) {
    e.preventDefault();
    const userObject = {
      name: addnewdata.name,
      email: addnewdata.email,
    };
    console.log(userObject);
    axios
      .post("http://localhost:4000/users/create", userObject)
      .then((res) => {
        // console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setAddnewdata((prev) => {
      return { ...prev, name: "", email: "" };
    });
  }

  return (
    <div className="wrapper">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Add User Name</label>
          <input
            type="text"
            value={addnewdata.name}
            placeholder="Name"
            onChange={onChangeUserName}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Add User Email</label>
          <input
            type="text"
            value={addnewdata.email}
            placeholder="Email"
            onChange={onChangeUserEmail}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Create User"
            className="btn btn-success btn-block"
          />
        </div>
      </form>
    </div>
  );
}
