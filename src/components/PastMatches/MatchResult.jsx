import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: ${({ theme }) => theme.tetriaryBg};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 16px;
  margin-bottom: 1px;
`;

const TeamLogo = styled.img`
  width: 22px;
  height: 22px;
  border: 5px solid transparent;
  border-radius: 50%;
  box-shadow: 0 0 0 1px
    ${({ color }) =>
      color == 'green'
        ? '#289d3f'
        : color == 'red'
        ? '#EB5757'
        : 'transparent'};
`;

const Score = styled.div`
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
`;

const Date = styled.div`
  min-width: 42px;
  text-align: left;

  font-size: 12px;
  line-height: 16px;
  color: ${({ theme }) => theme.secondaryText};
`;

const EventLogoWrapper = styled.div`
  min-width: 42px;
  text-align: right;
`;

const MatchResult = ({
  date,
  teamALogo,
  teamBLogo,
  score,
  eventLogo,
  teamAColor,
  teamBColor,
}) => {
  return (
    <Container>
      <Date>{date}</Date>
      <Score>
        <TeamLogo color={teamAColor} src={teamALogo} alt="Team A" />
        <span>{score}</span>
        <TeamLogo color={teamBColor} src={teamBLogo} alt="Team B" />
      </Score>
      <EventLogoWrapper>
        <img src={eventLogo} alt="Event" />
      </EventLogoWrapper>
    </Container>
  );
};

export default MatchResult;
