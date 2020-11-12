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
  padding: 0.6rem 1.6rem;
  background-image: url(${({ bg }) => bg});
  background-size: cover;
  color: white;
`;

const PrimaryText = styled.div`
  font-size: ${({ theme }) => theme.tetriaryFontSize};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
`;

const SecondaryText = styled.div`
  color: ${({ theme }) => theme.grey};
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
  firstTeamLogo,
  secondTeamLogo,
  firstTeamChoise,
  secondTeamChoise,
  open,
}) => (
  <>
    <MapHead>
      <Team>
        <TeamLogo src={firstTeamLogo} alt="Team A" />
        {getChoise(firstTeamChoise)}
      </Team>
      {name}
      <Team>
        {getChoise(secondTeamChoise)}
        <TeamLogo src={secondTeamLogo} alt="Team B" />
      </Team>
    </MapHead>
    <MapSummary bg={bg}>
      <LeftSide>
        <PrimaryText>17%</PrimaryText>
        <SecondaryText>6 maps</SecondaryText>
      </LeftSide>
      {!open && <u>Статистика карты</u>}
      <RightSide>
        <PrimaryText bold>78%</PrimaryText>
        <SecondaryText>9 maps</SecondaryText>
      </RightSide>
    </MapSummary>
  </>
);

export default Map;
