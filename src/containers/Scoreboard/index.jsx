import React, { useState } from 'react';
import { SwitchTransition, Transition } from 'react-transition-group';
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

const Live = styled.div`
  width: 3.2rem;
  margin: auto;
  border-radius: 0.4rem;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.red};
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
  const [live, setLive] = useState(true);

  return (
    <Container>
      <SwitchTransition>
        <Transition>
          {live ? (
            <Live>Live</Live>
          ) : (
            <Date onClick={() => setLive(live => !live)}>22.10.20 - 16:00</Date>
          )}
        </Transition>
      </SwitchTransition>
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
