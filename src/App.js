import React, { useState } from 'react';
import styled from 'styled-components';
import Board from './components/Board';
import Info from './components/Info';
import Rule from './components/Rule';

const Game = styled.div`
  margin: 0 auto;
  width: 570px;
  padding: 10px 0;
`;

const BOARD_SIZE = 19;

function App() {
  const [board, setBoard] = useState(() => Array.from({ length: BOARD_SIZE }, () => Array.from({ length: BOARD_SIZE }, () => null)));
  const [blackIsNext, setBlackIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [moveCount, setMoveCount] = useState(0);

  const handleSetNewGame = () => {
    setBoard(Array.from({ length: BOARD_SIZE }, () => Array.from({ length: BOARD_SIZE }, () => null)));
    setBlackIsNext(true);
    setWinner(null);
    setMoveCount(0);
  };

  const calculateWinner = (x, y, currentPlayerColour) => {
    const directions = [
      [1, 0], [0, 1], [1, 1], [1, -1]
    ];

    for (const [dx, dy] of directions) {
      let count = 1;
      for (let i = 1; i <= 4; i++) {
        const nx = x + i * dx;
        const ny = y + i * dy;
        if (nx < 0 || ny < 0 || nx >= BOARD_SIZE || ny >= BOARD_SIZE || board[ny][nx] !== currentPlayerColour) break;
        count++;
      }
      for (let i = 1; i <= 4; i++) {
        const nx = x - i * dx;
        const ny = y - i * dy;
        if (nx < 0 || ny < 0 || nx >= BOARD_SIZE || ny >= BOARD_SIZE || board[ny][nx] !== currentPlayerColour) break;
        count++;
      }
      if (count >= 5) return currentPlayerColour;
    }

    return null;
  };

  const handlePlaceStone = (x, y, currentPlayerColour) => {
    if (winner || board[y][x] !== null || moveCount >= BOARD_SIZE * BOARD_SIZE) return;

    const newBoard = board.map(row => [...row]);
    newBoard[y][x] = currentPlayerColour;
    setBoard(newBoard);

    const winnerColour = calculateWinner(x, y, currentPlayerColour);
    if (winnerColour) {
      setWinner(winnerColour);
      return;
    }

    setBlackIsNext(!blackIsNext);
    setMoveCount(moveCount + 1);
  };

  return (
    <Game>
      <Info
        winner={winner}
        handleSetNewGame={handleSetNewGame}
        currentPlayerColour={blackIsNext ? 'black' : 'white'}
        count={moveCount}
      />
      <Board
        board={board}
        handlePlaceStone={handlePlaceStone}
        currentPlayerColour={blackIsNext ? 'black' : 'white'}
      />
      <Rule />
    </Game>
  );
}

export default App;
