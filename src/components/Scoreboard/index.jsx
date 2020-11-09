import React from 'react';
import styled from 'styled-components';

/** Images **/
import VitalityLogo from '../../assets/vitality.svg';
import FnaticLogo from '../../assets/fnatic.svg';

/** Components **/
import Team from './Team';

const Container = styled.div`
  padding: 24px;
  background-color: ${({ theme }) => theme.tetriaryBg};
`;

const Date = styled.span`
  padding: 4px 8px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.secondaryBg};
`;

const EventName = styled.div`
  margin: 8px;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
`;

const Teams = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
`;

const Minus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  font-size: 48px;
`;

const GameFormat = styled.div`
  margin-top: 6px;
  color: ${({ theme }) => theme.secondaryText};
  font-size: 14px;
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
