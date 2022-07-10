import React, { useState, useEffect } from "react";
import axios from "axios";

export default class PersonList extends React.Component {
  state = {
    persons: [],
  };
  // const [state, setState] = useState([]);

  componentDidMount() {
    axios.get(`http://localhost:3000/Data`).then((res) => {
      const persons = res.data;
      this.setState({ persons });
    });
  }

  // const getData = async () => {
  //   const { data } = await axios.get(`http://localhost:3000/Data`);
  //   setState(data);
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  render() {
    return (
      <ul>
        {this.state.persons.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    );
  }
}
