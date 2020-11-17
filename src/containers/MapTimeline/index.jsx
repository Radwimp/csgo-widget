import React from 'react';
import styled from 'styled-components';

/** Components **/
import Title from '../../components/Title';

/** Images **/
import VitalityLogo from '../../assets/teams/vitality.png';
import FnaticLogo from '../../assets/teams/fnatic.png';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  overflow: auto;
`;

const TeamLogoWrapper = styled.div`
  /* height: 7.2rem; */
  display: flex;
  flex-direction: column;
  /*display: inline-block;
  align-items: center;
  justify-content: center; */
`;

const Timelines = styled.div``;

const TeamLogo = styled.img`
  width: 1.6rem;
  /* height: 1.6rem; */
  margin: 0.8rem;
  background-color: ${({ theme }) => theme.secondaryBg};
  border-radius: 50%;
  box-shadow: 0 0 0 0.4rem ${({ theme }) => theme.secondaryBg};
`;

const MapTimeline = () => (
  <>
    <Title>Таймлайн карты</Title>
    <Container>
      <TeamLogoWrapper>
        <TeamLogo src={VitalityLogo} alt="Team A" />

        <TeamLogo src={FnaticLogo} alt="Team A" />
      </TeamLogoWrapper>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Container>
  </>
);

export default MapTimeline;
