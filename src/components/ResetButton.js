import React from "react";
import "./ResetButton.css";

export const ResetButton = ({ handleReset }) => {
  return (
    <button className="reset" onClick={handleReset}>
      RESET
    </button>
  );
};
