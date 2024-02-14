import React, { useState } from "react";
import "./App.css";
import { GameBoard } from "./components/GameBoard";
import { ScoreBoard } from "./components/ScoreBoard";
import { ResetButton } from "./components/ResetButton";

/**
 * React functional component for the tic tac toe game.
 *
 * @returns {JSX.Element} The tic tac toe game component.
 */
function App() {
  const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const [gameBoard, setGameBoard] = useState(Array(9).fill(null));
  const [oPlay, setOPlay] = useState(true);
  const [score, setScore] = useState({ scoreX: 0, scoreO: 0 });
  const [gameOver, setGameOver] = useState(false);

  /**
   * Handles a click on a square on the game board.
   *
   * @param {number} index The index of the square that was clicked.
   */
  function handleClick(index) {
    const updatedGameBoard = gameBoard.map((value, i) => {
      if (i === index) {
        return oPlay === true ? "O" : "X";
      } else {
        return value;
      }
    });
    const winner = checkForWinner(updatedGameBoard);

    if (winner) {
      if (winner === "X") {
        let { scoreX } = score;
        scoreX++;
        setScore({ ...score, scoreX });
      } else {
        let { scoreO } = score;
        scoreO++;
        setScore({ ...score, scoreO });
      }
    }
    setGameBoard(updatedGameBoard);
    setOPlay(!oPlay);
  }

  /**
   * Checks if the game has a winner.
   *
   * @param {Array<string | null>} gameBoard The current state of the game board.
   * @returns {string | null} The winner, or null if the game is not over.
   */
  function checkForWinner(gameBoard) {
    for (let i = 0; i < WINNING_COMBINATIONS.length; i++) {
      const [a, b, c] = WINNING_COMBINATIONS[i];
      if (
        gameBoard[a] === "X" &&
        gameBoard[b] === "X" &&
        gameBoard[c] === "X"
      ) {
        setGameOver(true);
        return "X";
      } else if (
        gameBoard[a] === "O" &&
        gameBoard[b] === "O" &&
        gameBoard[c] === "O"
      ) {
        setGameOver(true);
        return "O";
      }
    }
  }

  /**
   * Resets the game.
   */
  function handleReset() {
    setGameBoard(Array(9).fill(null));
    setGameOver(false);
  }

  return (
    <div className="App">
      <ScoreBoard score={score} playerO={oPlay} />
      <GameBoard
        gameBoard={gameBoard}
        onClick={gameOver ? handleReset : handleClick}
      />
      <ResetButton handleReset={handleReset} />
    </div>
  );
}

export default App;
