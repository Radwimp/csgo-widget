import React from 'react';
import styled from 'styled-components';

/** Images **/
import Inferno from '../../assets/mobile/maps/inferno.png';
import Vertigo from '../../assets/mobile/maps/vertigo.png';
import Mirage from '../../assets/mobile/maps/mirage.png';
import Dust2 from '../../assets/mobile/maps/dust2.png';
import Nuke from '../../assets/mobile/maps/nuke.png';
import Train from '../../assets/mobile/maps/train.png';
import Overpass from '../../assets/mobile/maps/overpass.png';

function getMapBg(name) {
  switch (name) {
    case 'inferno':
      return Inferno;
    case 'vertigo':
      return Vertigo;
    case 'mirage':
      return Mirage;
    case 'dust2':
      return Dust2;
    case 'nuke':
      return Nuke;
    case 'train':
      return Train;
    case 'overpass':
      return Overpass;
    default:
      return null;
  }
}

function getChoise(choise) {
  if (choise === 'pick') {
    return <Choise color="blue">pick</Choise>;
  } else if (choise === 'ban') {
    return <Choise color="red">ban</Choise>;
  }

  return null;
}

const MapHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 1.8rem;
  font-weight: bold;
  text-transform: uppercase;
`;

const Team = styled.div`
  display: flex;
  justify-content: ${({ align }) =>
    align === 'right' ? 'flex-end' : 'flex-start'};
  align-items: center;
  width: 6.8rem;
`;

const TeamLogo = styled.img`
  width: 1.6rem;
`;

const Choise = styled.div`
  width: 3.2rem;
  margin: 0 1.2rem;
  border-radius: 0.4rem;
  text-transform: uppercase;
  background-color: ${({ color, theme }) => theme[color]};
  font-weight: normal;
`;

const MapSummary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem 1.6rem;
  background-image: url(${({ bg }) => bg});
  background-size: cover;
  color: white;
`;

const Map = ({
  name,
  firstTeamLogo,
  secondTeamLogo,
  firstTeamChoise,
  secondTeamChoise,
  children,
}) => (
  <>
    <MapHead>
      <Team align="left">
        <TeamLogo src={firstTeamLogo} alt="Team A" />
        {getChoise(firstTeamChoise)}
      </Team>
      {name}
      <Team align="right">
        {getChoise(secondTeamChoise)}
        <TeamLogo src={secondTeamLogo} alt="Team B" />
      </Team>
    </MapHead>
    <MapSummary bg={getMapBg(name)}>{children}</MapSummary>
  </>
);

export default Map;
