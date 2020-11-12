import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: ${({ theme }) => theme.tetriaryBg};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.4rem 1.6rem;
  margin-bottom: 0.1rem;
`;

const Score = styled.div`
  width: 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.primaryFontSize};
  line-height: ${({ theme }) => theme.primaryLineHeight};
  font-weight: bold;
`;

const TeamLogo = styled.img`
  width: 3.2rem;
  height: 3.2rem;
  border: 0.5rem solid transparent;
  border-radius: 50%;
  box-shadow: 0 0 0 0.1rem
    ${({ color, theme }) => theme[color] || 'transparent'};
`;

const Date = styled.div`
  min-width: 4.2rem;
  color: ${({ theme }) => theme.secondaryText};
`;

const EventLogoWrapper = styled.div`
  min-width: 4.2rem;
  text-align: right;
`;

const EventLogo = styled.img`
  width: 1.6rem;
`;

const PastMatchResult = ({
  date,
  firstTeamLogo,
  secondTeamLogo,
  score,
  eventLogo,
  firstTeamColor,
  secondTeamColor,
}) => {
  return (
    <Container>
      <Date>{date}</Date>
      <Score>
        <TeamLogo color={firstTeamColor} src={firstTeamLogo} alt="Team A" />
        {score}
        <TeamLogo color={secondTeamColor} src={secondTeamLogo} alt="Team B" />
      </Score>
      <EventLogoWrapper>
        <EventLogo src={eventLogo} alt="Event" />
      </EventLogoWrapper>
    </Container>
  );
};

export default PastMatchResult;
