import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBowlRice } from '@fortawesome/free-solid-svg-icons';

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: .5rem;
  background: white;
`;

const Button = styled.button`
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  padding: .5rem;
  cursor: pointer;
`;

const SetNewGameButton = styled(Button)`
  background: antiquewhite;
`;

const PlayerStatus = ({ winner, currentPlayerColour, count }) => {
  let status;
  let icon;

  if (winner) {
    status = <WinnerText>🎉 The winner is <span>{winner}</span>!</WinnerText>;
  } else if (count.current >= 361) {
    status = <FairGameText>Fair Game!</FairGameText>;
  } else {
    icon = (
      <>
        <IconContainer>
          <FontAwesomeIcon
            icon={faBowlRice}
            style={{ color: currentPlayerColour === 'black' ? '#000' : '#bbb' }}
          />
        </IconContainer>
        <IconContainer>
          <FontAwesomeIcon
            icon={faBowlRice}
            style={{ color: currentPlayerColour === 'white' ? '#fff' : '#bbb' }}
          />
        </IconContainer>
      </>
    );
  }

  return <NextPlayer>{status}{icon}</NextPlayer>;
};

const NextPlayer = styled.div`
  font-size: 1.2rem;
  color: #333;
  display: flex;
  align-items: center;
`;

const WinnerText = styled.span`
  color: #4CAF50;
  font-weight: bold;
`;

const FairGameText = styled.span`
  color: #FFC107;
  font-weight: bold;
`;

const IconContainer = styled.span`
  background-color: #bbb;
  padding: 0.5rem;
  border: 1px solid #000;
  border-radius: 4px;
  margin-right: 0.5rem;
`;

export default function Info({ winner, handleSetNewGame, currentPlayerColour, count }) {
  return (
    <InfoContainer>
      <PlayerStatus winner={winner} currentPlayerColour={currentPlayerColour} count={count} />
      <SetNewGameButton onClick={handleSetNewGame}>New Game</SetNewGameButton>
    </InfoContainer>
  );
}
