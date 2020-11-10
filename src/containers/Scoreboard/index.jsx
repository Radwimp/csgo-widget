import React from 'react';
import styled from 'styled-components';

/** Images **/
import VitalityLogo from '../../assets/vitality.svg';
import FnaticLogo from '../../assets/fnatic.svg';

/** Components **/
import Team from '../../components/Team';

const Container = styled.div`
  padding: 2.4rem 2.4rem 4rem;
  background-color: ${({ theme }) => theme.tetriaryBg};
`;

const Date = styled.h5`
  display: inline-block;
  padding: 0.2rem 1rem;
  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.secondaryBg};
`;

const EventName = styled.h3`
  margin: 0.8rem;
`;

const Teams = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2.4rem;
`;

const Minus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4.8rem;
  line-height: 8rem;
`;

const GameFormat = styled.h5`
  margin-top: 0.6rem;
  color: ${({ theme }) => theme.secondaryText};
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
