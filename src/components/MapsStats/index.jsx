import React from 'react';
import styled from 'styled-components';

/** Images **/
import VitalityLogo from '../../assets/vitality.svg';
import FnaticLogo from '../../assets/fnatic.svg';
import Inferno from '../../assets/maps/inferno.png';

/** Components **/
import Title from '../Title';

const MapContainer = styled.div`
  background-color: ${({ theme }) => theme.secondaryBg};
  border-radius: 8px;
  overflow: hidden;
`;

const TeamLogo = styled.img`
  width: 16.5px;
  margin: 8.5px 17.75px;
`;

const MapName = styled.div`
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  text-transform: uppercase;
`;

const MapSummary = styled.div`
  background-image: url(${Inferno});
  background-size: cover;
  padding: 7px 16px;
`;

const Percent = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 16px;
`;

const MapsAmount = styled.div`
  font-size: 12px;
  line-height: 14px;
`;

const MapInfo = styled(Percent)`
  border-bottom: 1px dashed #3b3d49;
  line-height: 20px;
  margin: 0 16px;
`;

const WinPercent = styled.div`
  color: ${props => props.color};
`;

const Hide = styled.div`
  color: ${props => props.color};
  padding: 8px 0;
  font-size: 12px;
  line-height: 16px;
  text-decoration: underline;
`;

const MapsStats = () => {
  return (
    <>
      <Title
        mainTitle="Статистика карт"
        subTitle="Winrate за последние 3 месяца"
      />
      <MapContainer>
        <Head>
          <div>
            <TeamLogo src={VitalityLogo} alt="Team A" />
          </div>
          <MapName>Inferno</MapName>
          <div>
            <TeamLogo src={FnaticLogo} alt="Team B" />
          </div>
        </Head>
        <MapSummary>
          <Percent>
            <div>17%</div>
            <b>78%</b>
          </Percent>
          <Percent>
            <MapsAmount>6 maps</MapsAmount>
            <MapsAmount>9 maps</MapsAmount>
          </Percent>
        </MapSummary>
        <MapInfo>
          <p>250</p>
          <p>Avg.rounds</p>
          <b>390</b>
        </MapInfo>
        <MapInfo>
          <b>179</b>
          <p>Round won</p>
          <p>140</p>
        </MapInfo>
        <MapInfo>
          <WinPercent color="#27AE60">51.2%</WinPercent>
          <p>CT round win percent</p>
          <WinPercent color="#EB5757">62.2%</WinPercent>
        </MapInfo>
        <MapInfo>
          <WinPercent color="#27AE60">51.2%</WinPercent>
          <p>T round win percent</p>
          <WinPercent color="#EB5757">62.2%</WinPercent>
        </MapInfo>
        <Hide color="#7D7F8E">Скрыть статистику</Hide>
      </MapContainer>
    </>
  );
};

export default MapsStats;
