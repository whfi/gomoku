import React from 'react';
import styled from 'styled-components';

const StoneBase = styled.div`
  border: 1px solid black;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.7);
  z-index: 1;
`;

const BlackStone = styled(StoneBase)`
  background: black;
`;

const WhiteStone = styled(StoneBase)`
  background: white;
`;

const BoardContainer = styled.div`
  background: rgba(216, 170, 105, 0.7);
  border: 3px solid rgba(0, 0, 0, 0.5);
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.7);
  padding: 10px;
`;

const BoardRow = styled.div`
  display: flex;
  position: relative;
`;

const BoardBlock = styled.div`
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  cursor: pointer;
  position: relative;

  &:before {
    content: '';
    height: 30px;
    border-left: 1px solid black;
    position: absolute;
  }
  &:after {
    content: '';
    width: 30px;
    border-top: 1px solid black;
    position: absolute;
  }
`;

export default function Board({ board, handlePlaceStone, currentPlayerColour }) {
  return (
    <BoardContainer>
      {board.map((boardRow, y) => (
        <BoardRow key={y}>
          {boardRow.map((_, x) => (
            <BoardBlock key={x} onClick={() => handlePlaceStone(x, y, currentPlayerColour)}>
              {board[y][x] === 'black' && <BlackStone />}
              {board[y][x] === 'white' && <WhiteStone />}
            </BoardBlock>
          ))}
        </BoardRow>
      ))}
    </BoardContainer>
  );
}
