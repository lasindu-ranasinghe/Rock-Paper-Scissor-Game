import React from "react";

function OutputTextArea({ value }) {
  return (
    <textarea
      rows="4"
      className="form-control"
      value={value}
      readOnly
    ></textarea>
  );
}

export default OutputTextArea;
