import React from 'react';
import styled from 'styled-components';

/** Components **/
import Title from '../../components/Title';
import RoundResult from '../../components/RoundResult';

/** Images **/
import VitalityLogo from '../../assets/teams/vitality.png';
import FnaticLogo from '../../assets/teams/fnatic.png';

/** Consts **/
import { firstHalfResults, secondHalfResults } from './timeline';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: auto;
  height: 6.5rem;
`;

const TeamLogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const TeamLogo = styled.img`
  width: 1.6rem;
  margin: 0.8rem 0.8rem 0.8rem 0.4rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.secondaryBg};
  box-shadow: 0 0 0 0.4rem ${({ theme }) => theme.secondaryBg};
`;

const ScoreBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin: 0 0.4rem;
  padding: 0.8rem 0;
`;

const ScoreCT = styled.div`
  color: ${({ theme }) => theme.blue};
`;

const ScoreT = styled.div`
  color: ${({ theme }) => theme.orange};
`;

const MapTimeline = () => (
  <>
    <Title>Таймлайн карты</Title>
    <Container>
      <TeamLogoWrapper>
        <TeamLogo src={VitalityLogo} alt="Team A" />
        <TeamLogo src={FnaticLogo} alt="Team A" />
      </TeamLogoWrapper>
      {firstHalfResults.map((winType, i) => (
        <RoundResult key={i} winType={winType} />
      ))}
      <ScoreBox>
        <ScoreCT>7</ScoreCT>
        <ScoreT>8</ScoreT>
      </ScoreBox>
      {secondHalfResults.map((winType, i) => (
        <RoundResult key={i} winType={winType} reverse />
      ))}
    </Container>
  </>
);

export default MapTimeline;
