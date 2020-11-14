import React from 'react';
import styled from 'styled-components';

/** Components **/
import Title from '../../components/Title';
import Player from '../../components/Player';

/** Images **/
import VitalityLogo from '../../assets/teams/vitality.png';
import FnaticLogo from '../../assets/teams/fnatic.png';
import France from '../../assets/country/France.svg';
import Sweden from '../../assets/country/Sweden.svg';
import Shox from '../../assets/players/shox.svg';
import Rpk from '../../assets/players/rpk.svg';
import Apex from '../../assets/players/apex.svg';
import Zywoo from '../../assets/players/zywoo.svg';
import Misuta from '../../assets/players/misuta.svg';
import Flusha from '../../assets/players/flusha.svg';
import Jw from '../../assets/players/jw.svg';
import Krimz from '../../assets/players/krimz.svg';
import Brollan from '../../assets/players/brollan.svg';
import Golden from '../../assets/players/golden.svg';

/** Consts **/
import { fnaticRoster, vitalityRoster } from './rosters';

const Container = styled.div`
  margin-bottom: 1.6rem;
  border-radius: 0.8rem;
  overflow: hidden;
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
    <Title mainTitle="Состав команд" />
    <Container>
      <Team>
        <TeamLogo src={VitalityLogo} alt="Team A" />
        Vitality
      </Team>
      {vitalityRoster.map(player => (
        <Player {...player} />
      ))}
    </Container>
    <Container>
      <Team>
        <TeamLogo src={FnaticLogo} alt="Team B" />
        <b>Fnatic</b>
      </Team>
      {fnaticRoster.map(player => (
        <Player {...player} />
      ))}
    </Container>
  </>
);
export default Rosters;
