import React from 'react';
import styled from 'styled-components';

const MapHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TeamLogo = styled.img`
  width: 1.65rem;
  margin: 0.85rem 2rem;
`;

const MapName = styled.h6`
  font-weight: bold;
  text-transform: uppercase;
`;

const MapSummary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: url(${({ bg }) => bg});
  background-size: cover;
  padding: 0.6rem 1.6rem;
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
      <MapHead>
        <TeamLogo src={teamALogo} alt="Team A" />
        {/* {teamAChoise && <div>{teamAChoise}</div>} */}
      </MapHead>
      <MapName>{name}</MapName>
      <div>
        <TeamLogo src={teamBLogo} alt="Team B" />
      </div>
    </MapHead>
    <MapSummary bg={bg}>
      <LeftSide>
        <h5>17%</h5>
        <h6>6 maps</h6>
      </LeftSide>
      {!isOpen && <h6>Статистика карты</h6>}
      <RightSide>
        <h5>
          <b>78%</b>
        </h5>
        <h6>9 maps</h6>
      </RightSide>
    </MapSummary>
  </>
);

export default Map;
