import React from "react";

function InputField({ placeholder, value, onChange }) {
  return (
    <input
      type="text"
      className="form-control mb-3"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default InputField;
