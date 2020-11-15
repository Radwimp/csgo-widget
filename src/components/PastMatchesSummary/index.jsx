import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.2rem;
  background-color: ${({ theme }) => theme.secondaryBg};
`;

const TeamInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 2;
`;

const TeamLogo = styled.img`
  width: 2.2rem;
  height: 2rem;
`;

const WinAmount = styled.div`
  margin: 0 1.2rem;
`;

const Overtimes = styled.div`
  width: 8.6rem;
  padding: 0 1.2rem;
  border-left: 0.1rem dashed ${({ theme }) => theme.border};
  border-right: 0.1rem dashed ${({ theme }) => theme.border};
`;

const PrimaryText = styled.div`
  font-weight: bold;
  font-size: ${({ theme }) => theme.primaryFontSize};
`;

const SecondaryText = styled.div`
  color: ${({ theme }) => theme.secondaryText};
`;

const PastMatchesSummary = ({
  firstTeamLogo,
  secondTeamLogo,
  firstTeamWinAmount,
  secondTeamWinAmount,
  overtimesAmount,
}) => {
  return (
    <Container>
      <TeamInfo>
        <TeamLogo src={firstTeamLogo} alt="Team A" />
        <WinAmount>
          <PrimaryText>{firstTeamWinAmount}</PrimaryText>
          <SecondaryText>Победы</SecondaryText>
        </WinAmount>
      </TeamInfo>
      <Overtimes>
        <PrimaryText>{overtimesAmount}</PrimaryText>
        <SecondaryText>Овертаймов</SecondaryText>
      </Overtimes>
      <TeamInfo>
        <WinAmount>
          <PrimaryText>{secondTeamWinAmount}</PrimaryText>
          <SecondaryText>Победы</SecondaryText>
        </WinAmount>
        <TeamLogo src={secondTeamLogo} alt="Team B" />
      </TeamInfo>
    </Container>
  );
};

export default PastMatchesSummary;
