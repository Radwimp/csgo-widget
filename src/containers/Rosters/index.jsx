import React from 'react';
import styled from 'styled-components';

/* Components */
import Title from '../../components/Title';
import Player from '../../components/Player';

/* Images */
import VitalityLogo from '../../assets/teams/vitality.png';
import FnaticLogo from '../../assets/teams/fnatic.png';

/* Consts */
import { fnaticRoster, vitalityRoster } from './rosters';

const Container = styled.div`
  @media (min-width: 576px) {
    display: flex;
    justify-content: space-between;
  }
`;

const RosterWrapper = styled.div`
  margin-bottom: 1.6rem;
  border-radius: 0.8rem;
  overflow: hidden;

  @media (min-width: 576px) {
    width: calc(50% - 1.2rem);
  }
`;

const Team = styled.div`
  position: relative;
  padding: 1.4rem 0;
  background-color: ${({ theme }) => theme.secondaryBg};
  font-size: ${({ theme }) => theme.secondaryFontSize};
  line-height: ${({ theme }) => theme.primaryLineHeight};
  font-weight: bold;
`;

const TeamLogo = styled.img`
  position: absolute;
  left: 3rem;
  width: 2.2rem;
`;

const Rosters = () => (
  <>
    <Title>Состав команд</Title>
    <Container>
      <RosterWrapper>
        <Team>
          <TeamLogo src={VitalityLogo} alt="Team A" />
          Vitality
        </Team>
        {vitalityRoster.map(player => (
          <Player key={player.nick} {...player} />
        ))}
      </RosterWrapper>{' '}
      <RosterWrapper>
        <Team>
          <TeamLogo src={FnaticLogo} alt="Team B" />
          <b>Fnatic</b>
        </Team>
        {fnaticRoster.map(player => (
          <Player key={player.nick} {...player} />
        ))}
      </RosterWrapper>
    </Container>
  </>
);
export default Rosters;
