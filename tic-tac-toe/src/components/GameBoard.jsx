// src/components/Board.js
import React, { useState } from 'react';
import Square from './square';

const Board = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    const handleClick = (index) => {
        const newSquares = squares.slice();
        if (calculateWinner(newSquares) || newSquares[index]) {
            return;
        }
        newSquares[index] = xIsNext ? 'X' : 'O';
        setSquares(newSquares);
        setXIsNext(!xIsNext);
    };

    const renderSquare = (index) => {
        return <Square value={squares[index]} onClick={() => handleClick(index)} />;
    };

    const winner = calculateWinner(squares);
    const status = winner ? `Winner: ${winner}` : `current player: ${xIsNext ? 'X' : 'O'}`;

    const reset = () => {
        setXIsNext(true);
        setSquares(Array(9).fill(null));
    }

    return (
        <div>
            <div className="status">{status}</div>
            {winner && <button className='reset' onClick={reset}>Reset</button>}
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
};

const calculateWinner = (squares) => {
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
};

export default Board;
