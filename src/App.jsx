import "./App.css";

/**
 * Components:
 *  Game
 *    ->Board
 *          >Square
 *    ->History
 *
 */

function Square() {
  return (
    <>
      <button className="bg-white border border-gray-100 h-12 w-12 m-1 leading-9 text-lg">
        X
      </button>
    </>
  );
}

export default Square;
