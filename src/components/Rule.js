import React from 'react';
import styled from 'styled-components';

const RuleContainer = styled.div`
  margin-top: 1.5rem;
  padding: 1rem;
  background-color: rgba(240, 240, 240, 0.9);
`;

const Title = styled.h3`
  color: #333;
`;

const RuleList = styled.ul`
  padding-left: 20px;
`;

const RuleItem = styled.li`
  color: #666;
`;

const Rule = () => {
  return (
    <RuleContainer>
      <Title>How to Play Gomoku</Title>
      <RuleList>
        <RuleItem>Two players needed. Be the first player to get five stones in a row horizontally, vertically, or diagonally.</RuleItem>
        <RuleItem>Play on a 19x19 grid. Black plays first.</RuleItem>
        <RuleItem>Players take turns placing one stone of their color on any empty intersection.</RuleItem>
        <RuleItem>Achieve five stones in a row to win.</RuleItem>
      </RuleList>
    </RuleContainer>
  );
};

export default Rule;
