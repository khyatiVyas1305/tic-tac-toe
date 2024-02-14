import React from "react";
import "./ScoreBoard.css";

export const ScoreBoard = ({ score, playerO }) => {
  const { scoreX, scoreO } = score;
  return (
    <div className="scoreBoard">
      <span className={`score o-score ${!playerO && "inactive"}`}>
        Player O: {scoreO}
      </span>
      <span className={`score x-score ${playerO && "inactive"}`}>
        Player X: {scoreX}
      </span>
    </div>
  );
};
