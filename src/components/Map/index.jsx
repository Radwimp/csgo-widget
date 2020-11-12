import React from 'react';
import styled from 'styled-components';

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
  font-weight: bold;
  text-transform: uppercase;
`;

const Team = styled.div`
  display: flex;
  align-items: center;
`;

const TeamLogo = styled.img`
  width: 1.6rem;
  margin: 0.8rem 2rem;
`;

const Choise = styled.div`
  background-color: ${({ color, theme }) => theme[color]};
  border-radius: 0.4rem;
  text-transform: uppercase;
  font-weight: normal;
  width: 3.2rem;
  height: 1.4rem;
  padding-bottom: 1.6rem;
`;

const MapSummary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: url(${({ bg }) => bg});
  background-size: cover;
  padding: 0.6rem 1.6rem;
`;

const Winrate = styled.div`
  font-size: ${({ theme }) => theme.tetriaryFontSize};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
`;

const LeftSide = styled.div`
  text-align: left;
`;

const RightSide = styled.div`
  text-align: right;
`;

const Map = ({
  name,
  bg,
  teamALogo,
  teamBLogo,
  isOpen,
  firstTeamChoise,
  secondTeamChoise,
}) => (
  <>
    <MapHead>
      <Team>
        <TeamLogo src={teamALogo} alt="Team A" />
        {getChoise(firstTeamChoise)}
      </Team>
      {name}
      <Team>
        {getChoise(secondTeamChoise)}
        <TeamLogo src={teamBLogo} alt="Team B" />
      </Team>
    </MapHead>
    <MapSummary bg={bg}>
      <LeftSide>
        <Winrate>17%</Winrate>
        <div>6 maps</div>
      </LeftSide>
      {!isOpen && <u>Статистика карты</u>}
      <RightSide>
        <Winrate bold>78%</Winrate>
        <div>9 maps</div>
      </RightSide>
    </MapSummary>
  </>
);

export default Map;
