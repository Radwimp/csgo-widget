import React from 'react';
import styled from 'styled-components';

/** Images **/
import VitalityLogo from '../../assets/teams/vitality.png';
import FnaticLogo from '../../assets/teams/fnatic.png';
import Inferno from '../../assets/mobile/maps/inferno.png';
import Vertigo from '../../assets/mobile/maps/vertigo.png';
import Mirage from '../../assets/mobile/maps/mirage.png';
import Dust2 from '../../assets/mobile/maps/dust2.png';
import Nuke from '../../assets/mobile/maps/nuke.png';
import Train from '../../assets/mobile/maps/train.png';
import Overpass from '../../assets/mobile/maps/overpass.png';

/** Components **/
import Title from '../../components/Title';
import MapStats from '../../components/MapStats';
import Map from '../../components/Map';

const Container = styled.div`
  margin-bottom: 0.8rem;
  background-color: ${({ theme }) => theme.secondaryBg};
  border-radius: 0.8rem;
`;

const MapsStats = () => (
  <>
    <Title
      mainTitle="Статистика карт"
      subTitle="Winrate за последние 3 месяца"
    />
    <Container>
      <Map
        name="Inferno"
        bg={Inferno}
        firstTeamLogo={VitalityLogo}
        secondTeamLogo={FnaticLogo}
        secondTeamChoise="pick"
        open
      />
      <MapStats />
    </Container>
    <Container>
      <Map
        name="Vertigo"
        bg={Vertigo}
        firstTeamLogo={VitalityLogo}
        secondTeamLogo={FnaticLogo}
        secondTeamChoise="ban"
      />
    </Container>
    <Container>
      <Map
        name="Mirage"
        bg={Mirage}
        firstTeamLogo={VitalityLogo}
        secondTeamLogo={FnaticLogo}
        firstTeamChoise="pick"
      />
    </Container>
    <Container>
      <Map
        name="Dust2"
        bg={Dust2}
        firstTeamLogo={VitalityLogo}
        secondTeamLogo={FnaticLogo}
      />
    </Container>
    <Container>
      <Map
        name="Nuke"
        bg={Nuke}
        firstTeamLogo={VitalityLogo}
        secondTeamLogo={FnaticLogo}
      />
    </Container>
    <Container>
      <Map
        name="Train"
        bg={Train}
        firstTeamLogo={VitalityLogo}
        secondTeamLogo={FnaticLogo}
      />
    </Container>
    <Container>
      <Map
        name="Overpass"
        bg={Overpass}
        firstTeamLogo={VitalityLogo}
        secondTeamLogo={FnaticLogo}
      />
    </Container>
  </>
);

export default MapsStats;
