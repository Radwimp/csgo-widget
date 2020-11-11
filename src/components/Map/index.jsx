import React from 'react';
import styled from 'styled-components';

const MapHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  text-transform: uppercase;
`;

const TeamLogo = styled.img`
  width: 1.65rem;
  margin: 0.85rem 2rem;
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

const Map = ({ name, bg, teamALogo, teamBLogo, isOpen, teamAChoise }) => (
  <>
    <MapHead>
      <div>
        <TeamLogo src={teamALogo} alt="Team A" />
        {/* {teamAChoise && <div>{teamAChoise}</div>} */}
      </div>
      {name}
      <div>
        <TeamLogo src={teamBLogo} alt="Team B" />
      </div>
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
