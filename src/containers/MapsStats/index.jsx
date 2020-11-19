import React from 'react';

/* Images */
import VitalityLogo from '../../assets/teams/vitality.png';
import FnaticLogo from '../../assets/teams/fnatic.png';

/* Components */
import Title from '../../components/Title';
import MapStats from '../../components/MapStats';

const MapsStats = () => (
  <>
    <Title subTitle="Winrate за последние 3 месяца">Статистика карт</Title>
    <MapStats
      open
      name="inferno"
      firstTeamLogo={VitalityLogo}
      secondTeamLogo={FnaticLogo}
      secondTeamChoise="pick"
    />
    <MapStats
      name="vertigo"
      firstTeamLogo={VitalityLogo}
      secondTeamLogo={FnaticLogo}
      secondTeamChoise="pick"
    />
    <MapStats
      name="mirage"
      firstTeamLogo={VitalityLogo}
      secondTeamLogo={FnaticLogo}
    />
    <MapStats
      name="dust2"
      firstTeamLogo={VitalityLogo}
      secondTeamLogo={FnaticLogo}
      secondTeamChoise="ban"
    />
    <MapStats
      name="nuke"
      firstTeamLogo={VitalityLogo}
      secondTeamLogo={FnaticLogo}
      secondTeamChoise="ban"
    />
    <MapStats
      name="train"
      firstTeamLogo={VitalityLogo}
      secondTeamLogo={FnaticLogo}
      firstTeamChoise="ban"
    />
    <MapStats
      name="overpass"
      firstTeamLogo={VitalityLogo}
      secondTeamLogo={FnaticLogo}
      firstTeamChoise="ban"
    />
  </>
);

export default MapsStats;
