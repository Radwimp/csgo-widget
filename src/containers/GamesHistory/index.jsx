import React from 'react';
import styled from 'styled-components';

/** Components **/
import Game from '../../components/Game';

const Container = styled.div`
  border-radius: 0.8rem;
  overflow: hidden;
`;

const GamesSummaryInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Score = styled.div`
  width: 2rem;
  margin-left: 0.8rem;
  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.secondaryBg};
  line-height: ${({ theme }) => theme.secondaryLineHeight};

  &:first-of-type {
    margin-right: 1.6rem;
  }
`;

const GamesSummary = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0 0.8rem;

  span {
    font-size: ${({ theme }) => theme.tetriaryFontSize};
    line-height: ${({ theme }) => theme.secondaryLineHeight};
  }
`;

const GamesHistory = ({ team = '', maps = '0', wins = '0', games = [] }) => (
  <>
    <GamesSummary>
      <span>Игры {team}</span>
      <GamesSummaryInfo>
        <span>Карт</span>
        <Score>{maps}</Score>
        <span>Побед</span>
        <Score>{wins}</Score>
      </GamesSummaryInfo>
    </GamesSummary>
    <Container>
      {games.map(game => (
        <Game
          key={`${game.firstTeamName} - ${game.secondTeamName}`}
          {...game}
        />
      ))}
    </Container>
  </>
);

export default GamesHistory;
