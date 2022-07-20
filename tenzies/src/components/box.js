import React from "react";

export default function Box(props) {
  const styles = {
    backgroundColor: props.type ? "white" : "green",
  };
  return (
    <div
      style={styles}
      className="box"
      onClick={() => props.toggle(props.id, props.value)}
    >
      {props.value}
    </div>
  );
}
