import React from 'react';
import styled from 'styled-components';

/** Images **/
import BombIcon from '../../assets/timeline/bomb.svg';
import DiffuseIcon from '../../assets/timeline/diffuse.svg';
import TimeoutIcon from '../../assets/timeline/timeout.svg';
import KillsCTIcon from '../../assets/timeline/kills-ct.svg';
import KillsTIcon from '../../assets/timeline/kills-t.svg';

function getWinTypeIcon(winType) {
  switch (winType) {
    case 'bomb':
      return BombIcon;
    case 'diffuse':
      return DiffuseIcon;
    case 'timeout':
      return TimeoutIcon;
    case 'killsCT':
      return KillsCTIcon;
    case 'killsT':
      return KillsTIcon;
    default:
      return null;
  }
}

function getWinner(winType) {
  switch (winType) {
    case 'bomb':
    case 'killsT':
      return 'T';
    case 'diffuse':
    case 'timeout':
    case 'killsCT':
      return 'CT';
    default:
      return null;
  }
}

function getColor(winType) {
  if (getWinner(winType) === 'T') {
    return 'orange';
  } else if (getWinner(winType) === 'CT') {
    return 'blue';
  }
  return 'secondaryBg';
}

const Container = styled.div`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'column-reverse' : 'column')};
  width: 1.2rem;
  height: 100%;
  margin: 0 0.15rem;
  padding: 1rem 0;
`;

const Divider = styled.div`
  margin: 1rem 0;
  height: 0.1rem;
  background-color: ${({ theme, color }) => theme[color]};
`;

const RoundResult = ({ winType, reverse }) => (
  <Container
    reverse={
      (!reverse && getWinner(winType) === 'T') ||
      (reverse && getWinner(winType) === 'CT')
    }
  >
    {getWinTypeIcon(winType) && (
      <img src={getWinTypeIcon(winType)} alt={winType} />
    )}
    <Divider color={getColor(winType)}></Divider>
  </Container>
);

export default RoundResult;
