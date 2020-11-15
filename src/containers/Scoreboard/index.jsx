import React from 'react';
import styled from 'styled-components';

/** Images **/
import VitalityLogo from '../../assets/teams/vitality.png';
import FnaticLogo from '../../assets/teams/fnatic.png';

/** Components **/
import Team from '../../components/Team';

const Container = styled.div`
  padding: 2.4rem 2.4rem 4rem;
  background-color: ${({ theme }) => theme.tetriaryBg};
`;

const Date = styled.div`
  display: inline-block;
  padding: 0.2rem 1rem;
  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.secondaryBg};
  font-size: ${({ theme }) => theme.tetriaryFontSize};
  line-height: ${({ theme }) => theme.secondaryLineHeight};
`;

const EventName = styled.div`
  margin: 0.8rem;
  font-weight: bold;
  font-size: ${({ theme }) => theme.primaryFontSize};
  line-height: ${({ theme }) => theme.primaryLineHeight};
`;

const Teams = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2.4rem;

  @media (min-width: 576px) {
    justify-content: space-around;
  }
`;

const Minus = styled.div`
  display: flex;
  justify-content: center;
  margin: 0.8rem 0 1.4rem;
  font-size: 4.8rem;
  line-height: 6.4rem;
`;

const GameFormat = styled.div`
  color: ${({ theme }) => theme.secondaryText};
  font-size: ${({ theme }) => theme.tetriaryFontSize};
  line-height: ${({ theme }) => theme.secondaryLineHeight};
`;

const Scoreboard = () => {
  return (
    <Container>
      <Date>22.10.20 - 16:00</Date>
      <EventName>2020 FunSpark ULTI</EventName>
      <Teams>
        <Team logo={VitalityLogo} name="Vitality" rank="4" />
        <div>
          <Minus>-</Minus>
          <GameFormat>Best of 3</GameFormat>
        </div>
        <Team logo={FnaticLogo} name="Fnatic" rank="2" />
      </Teams>
    </Container>
  );
};

export default Scoreboard;
