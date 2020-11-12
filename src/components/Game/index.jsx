import React from 'react';
import styled from 'styled-components';

function getResult(score) {
  if (score.split(':')[0] > score.split(':')[1]) {
    return <Result color="green">В</Result>;
  } else if (score.split(':')[0] < score.split(':')[1]) {
    return <Result color="red">П</Result>;
  }

  return <Result color="grey">Н</Result>;
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.1rem;
  padding: 0.8rem 1.6rem;
  background-color: ${({ theme }) => theme.tetriaryBg};
`;

const Date = styled.div`
  text-align: left;
  color: ${({ theme }) => theme.secondaryText};
`;

const Score = styled.div`
  width: 18rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Team = styled.div`
  min-width: 6.4rem;
`;

const Result = styled.div`
  width: 2rem;
  margin-top: 0.4rem;
  background-color: ${({ color, theme }) => theme[color]};
  color: white;
  border-radius: 0.4rem;
  line-height: ${({ theme }) => theme.secondaryLineHeight};
`;

const TeamLogo = styled.img`
  width: 1.6rem;
  margin-bottom: 0.4rem;
`;

const EventLogo = styled.img`
  width: 1.6rem;
`;

const Game = ({
  date,
  eventLogo,
  firstTeamName,
  secondTeamName,
  firstTeamLogo,
  secondTeamLogo,
  score = '0:0',
}) => (
  <Container>
    <Date>
      <div>{date}</div>
      <EventLogo src={eventLogo} alt="Event" />
    </Date>
    <Score>
      <Team>
        <TeamLogo src={firstTeamLogo} alt={firstTeamName} />
        <div>{firstTeamName}</div>
      </Team>
      <div>
        <b>{score}</b>
        {getResult(score)}
      </div>
      <Team>
        <TeamLogo src={secondTeamLogo} alt={secondTeamName} />
        <div>{secondTeamName}</div>
      </Team>
    </Score>
  </Container>
);

export default Game;
