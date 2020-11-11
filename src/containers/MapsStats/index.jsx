import React from 'react';
import styled from 'styled-components';

/** Images **/
import VitalityLogo from '../../assets/vitality.svg';
import FnaticLogo from '../../assets/fnatic.svg';
import Inferno from '../../assets/maps/small/inferno.png';
import Vertigo from '../../assets/maps/small/vertigo.png';
import Mirage from '../../assets/maps/small/mirage.png';
import Dust2 from '../../assets/maps/small/dust 2.png';
import Nuke from '../../assets/maps/small/nuke.png';
import Train from '../../assets/maps/small/train.png';
import Overpass from '../../assets/maps/small/overpass.png';

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
        teamALogo={VitalityLogo}
        teamBLogo={FnaticLogo}
        isOpen
      />
      <MapStats />
    </Container>
    <Container>
      <Map
        name="Vertigo"
        bg={Vertigo}
        teamALogo={VitalityLogo}
        teamBLogo={FnaticLogo}
      />
    </Container>
    <Container>
      <Map
        name="Mirage"
        bg={Mirage}
        teamALogo={VitalityLogo}
        teamBLogo={FnaticLogo}
      />
    </Container>
    <Container>
      <Map
        name="Dust2"
        bg={Dust2}
        teamALogo={VitalityLogo}
        teamBLogo={FnaticLogo}
      />
    </Container>
    <Container>
      <Map
        name="Nuke"
        bg={Nuke}
        teamALogo={VitalityLogo}
        teamBLogo={FnaticLogo}
      />
    </Container>
    <Container>
      <Map
        name="Train"
        bg={Train}
        teamALogo={VitalityLogo}
        teamBLogo={FnaticLogo}
      />
    </Container>
    <Container>
      <Map
        name="Overpass"
        bg={Overpass}
        teamALogo={VitalityLogo}
        teamBLogo={FnaticLogo}
      />
    </Container>
  </>
);

export default MapsStats;
