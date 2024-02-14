import React from "react";
import { Box } from "./Box";
import "./GameBoard.css";

export const GameBoard = ({ gameBoard, onClick }) => {
  return (
    <div className="board">
      {gameBoard.map((value, index) => {
        return (
          <Box value={value} onClick={() => value === null && onClick(index)} />
        );
      })}
    </div>
  );
};
