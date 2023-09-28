import React from "react";

function Button({ text, onClick, color, margineLeft }) {
  const buttonStyle = {
    color: color,
    //padding: "10px 20px",
    borderRadius: "5px",
    fontSize: "16px",
    border: "none",
    cursor: "pointer",
    marginLeft: margineLeft,
  };
  return (
    <button className={`btn ${color}`} style={buttonStyle} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
