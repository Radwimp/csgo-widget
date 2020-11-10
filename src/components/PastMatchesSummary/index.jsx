import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: ${({ theme }) => theme.secondaryBg};
  display: flex;
  justify-content: space-between;
  padding: 1rem 0.8rem;
`;

const TeamInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 2;
`;

const TeamLogo = styled.img`
  width: 2.2rem;
`;

const WinAmount = styled.div`
  margin: 0 1.2rem;
`;

const Overtimes = styled.div`
  width: 8.6rem;
  padding: 0 1.2rem;
  border-left: 1px dashed ${({ theme }) => theme.primaryBorder};
  border-right: 1px dashed ${({ theme }) => theme.primaryBorder};
`;

const SecondaryText = styled.h6`
  color: ${({ theme }) => theme.secondaryText};
`;

const PastMatchesSummary = ({
  teamALogo,
  teamBLogo,
  teamAWinAmount,
  teamBWinAmount,
  overtimesAmount,
}) => {
  return (
    <Container>
      <TeamInfo>
        <TeamLogo src={teamALogo} alt="Team A" />
        <WinAmount>
          <h3>{teamAWinAmount}</h3>
          <SecondaryText>Победы</SecondaryText>
        </WinAmount>
      </TeamInfo>
      <Overtimes>
        <h3>{overtimesAmount}</h3>
        <SecondaryText>Овертаймов</SecondaryText>
      </Overtimes>
      <TeamInfo>
        <WinAmount>
          <h3>{teamBWinAmount}</h3>
          <SecondaryText>Победы</SecondaryText>
        </WinAmount>
        <TeamLogo src={teamBLogo} alt="Team B" />
      </TeamInfo>
    </Container>
  );
};

export default PastMatchesSummary;
