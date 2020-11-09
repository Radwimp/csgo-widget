import React from 'react';
import styled from 'styled-components';

/** Images **/
import VitalityLogo from '../../assets/vitality.svg';
import FnaticLogo from '../../assets/fnatic.svg';

const Container = styled.div`
  border-radius: 8px;
  overflow: hidden;
`;

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
  border-left: 1px dashed #3b3d49;
  border-right: 1px dashed #3b3d49;
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

const PastMatches = () => {
  return (
    <Container>
      <Summary>
        <SummaryCell>
          <TeamLogo src={VitalityLogo} alt="Team A" />
          <WinAmount>
            <PrimaryText>2</PrimaryText>
            <SecondaryText>Победы</SecondaryText>
          </WinAmount>
        </SummaryCell>
        <Overtimes>
          <PrimaryText>0</PrimaryText>
          <SecondaryText>Овертаймов</SecondaryText>
        </Overtimes>
        <SummaryCell>
          <WinAmount>
            <PrimaryText>3</PrimaryText>
            <SecondaryText>Победы</SecondaryText>
          </WinAmount>
          <TeamLogo src={FnaticLogo} alt="Team B" />
        </SummaryCell>
      </Summary>
    </Container>
  );
};

export default PastMatches;
