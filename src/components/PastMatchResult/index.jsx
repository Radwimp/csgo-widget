import React from 'react';
import styled from 'styled-components';

function getColors(score) {
  const [a, b] = score.split(':');

  if (+a > +b) {
    return ['green', 'red'];
  } else if (+a < +b) {
    return ['red', 'green'];
  }

  return ['grey', 'grey'];
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.4rem 1.6rem;
  margin-bottom: 0.1rem;
  background-color: ${({ theme }) => theme.tetriaryBg};
`;

const Score = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 12rem;
  font-weight: bold;
  font-size: ${({ theme }) => theme.primaryFontSize};
  line-height: ${({ theme }) => theme.primaryLineHeight};
`;

const TeamLogo = styled.img`
  width: 3.2rem;
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
}) => {
  return (
    <Container>
      <Date>{date}</Date>
      <Score>
        <TeamLogo
          color={getColors(score)[0]}
          src={firstTeamLogo}
          alt="Team A"
        />
        {score}
        <TeamLogo
          color={getColors(score)[1]}
          src={secondTeamLogo}
          alt="Team B"
        />
      </Score>
      <EventLogoWrapper>
        <EventLogo src={eventLogo} alt="Event" />
      </EventLogoWrapper>
    </Container>
  );
};

export default PastMatchResult;
