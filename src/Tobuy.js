import React from "react";

const Tobuy = ({ id, name, complete, handleClick }) => (
  <li
    style={ complete ? { ...styles.complete } : { ...styles.tobuy } }
    onClick={() => handleClick(id)}
  >
    { name }
  </li>
)

const styles = {
  tobuy: { cursor: "pointer", },
  complete: { color: "grey", textDecoration: "line-through", },
}

export default Tobuy;