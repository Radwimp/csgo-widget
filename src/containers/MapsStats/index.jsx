import React from 'react';

/** Images **/
import VitalityLogo from '../../assets/teams/vitality.png';
import FnaticLogo from '../../assets/teams/fnatic.png';

/** Components **/
import Title from '../../components/Title';
import MapStats from '../../components/MapStats';

const MapsStats = () => (
  <>
    <Title subTitle="Winrate за последние 3 месяца">Статистика карт</Title>
    <MapStats firstTeamLogo={VitalityLogo} secondTeamLogo={FnaticLogo} />
    {/* <Container>
      <Map
        name="Inferno"
        bg={Inferno}
        firstTeamLogo={VitalityLogo}
        secondTeamLogo={FnaticLogo}
        secondTeamChoise="pick"
        open
      />
      <MapStats />
    </Container> */}
    {/* <Container>
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
    </Container> */}
  </>
);

export default MapsStats;
