import { useState } from "react";
import "./App.css";
import Square from "./components/Square";

/**
 * Components:
 *  Game
 *    ->Board
 *          >Square
 *    ->History
 *
 */

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  //to create 9 element in a array: Array(9)
  // to set default value we can use fill() method
  // console.log(squares);
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = "Next Player: " + (xIsNext ? "X" : "O");
  }

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return; // this function will execute from here if there is vlaue else it go to next block if blank value means it will toggle ;
    } else {
      // way 1: will make clone of array; which works if do not make history of game move
      // squares[0] = "X";
      // setSquares(squares); react will not execute this; for complex array we have to make a clone of array or we need to make a new object to make react understand;
      // setSquares([...squares]); because we have to use the each new array for our history but ... will change the array so we can not do this
      // console.log(squares);

      //way 2: will create new objects ;will be effective for history of game move(here react will not confuse that it will get a new array)

      const nextSquares = squares.slice(); // slice() method of Array instacnes retrun a shallow copy of a portion of a array into a new array object
      // nextSquares[0] = "X"; index no. will  not work as dynamic
      // nextSquares[i] = "X"; // i is for dynamic index number

      if (xIsNext) {
        nextSquares[i] = "X";
      } else {
        nextSquares[i] = "0";
      }
      setSquares(nextSquares);
      console.log(nextSquares);
      setXIsNext(!xIsNext); // to toggle we used !; it will not allow the same in the next
    }
  }

  return (
    <>
      <div className="flex">{status}</div>
      <div className="flex">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>

      <div className="flex">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="flex">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
