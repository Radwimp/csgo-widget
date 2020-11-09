import React from 'react';
import styled from 'styled-components';

const Summary = styled.div`
  background-color: ${({ theme }) => theme.secondaryBg};
  display: flex;
  justify-content: space-between;
  padding: 10px 8px;
`;

const SummaryCell = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TeamLogo = styled.img`
  width: 22px;
`;

const WinAmount = styled.div`
  margin: 0 12px;
`;

const Overtimes = styled.div`
  width: 86px;
  padding: 0 12px;
  border-left: 1px dashed ${({ theme }) => theme.primaryBorder};
  border-right: 1px dashed ${({ theme }) => theme.primaryBorder};
`;

const PrimaryText = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
`;

const SecondaryText = styled.div`
  font-size: 12px;
  line-height: 16px;
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
    <Summary>
      <SummaryCell>
        <TeamLogo src={teamALogo} alt="Team A" />
        <WinAmount>
          <PrimaryText>{teamAWinAmount}</PrimaryText>
          <SecondaryText>Победы</SecondaryText>
        </WinAmount>
      </SummaryCell>
      <Overtimes>
        <PrimaryText>{overtimesAmount}</PrimaryText>
        <SecondaryText>Овертаймов</SecondaryText>
      </Overtimes>
      <SummaryCell>
        <WinAmount>
          <PrimaryText>{teamBWinAmount}</PrimaryText>
          <SecondaryText>Победы</SecondaryText>
        </WinAmount>
        <TeamLogo src={teamBLogo} alt="Team B" />
      </SummaryCell>
    </Summary>
  );
};

export default PastMatchesSummary;
