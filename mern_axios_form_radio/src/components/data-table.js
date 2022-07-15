import React, { useEffect } from "react";
import axios from "axios";

// destructuring props
const DataTable = ({ obj, setter, selected, selectedId }) => {
  const rediovariable = selected;
  const handleChange = () => {
    setter(obj.email);
    const rediovariable = axios.put(
      `http://localhost:4000/users/update/${selectedId}`,
      {
        selection: !obj.selection,
      }
    );
  };

  useEffect(() => {
    rediovariable && console.log("User selected", obj.email);
  }, [rediovariable]);

  return (
    <tr>
      <td>{obj._id}</td>
      <td>{obj.name}</td>
      <td>{obj.email}</td>
      <td>
        <input
          type="radio"
          name="sample-radio"
          checked={rediovariable}
          onChange={handleChange}
        />
      </td>
    </tr>
  );
};
export default DataTable;
