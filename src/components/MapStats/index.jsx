import React from 'react';
import styled from 'styled-components';

const Stat = styled.h5`
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 1.6rem;
  border-bottom: 1px dashed #3b3d49;
  line-height: 20px;
`;

const ColoredP = styled.p`
  color: ${({ color, theme }) => theme[color] || theme.primaryText};
`;

const HideStats = styled.h6`
  color: ${({ theme }) => theme.secondaryText};
  padding: 0.8rem 1.6rem;
  text-decoration: underline;
`;

const MapStats = () => (
  <div>
    <Stat>
      <p>250</p>
      <p>Avg. rounds</p>
      <b>390</b>
    </Stat>
    <Stat>
      <b>179</b>
      <p>Round won</p>
      <p>140</p>
    </Stat>
    <Stat>
      <ColoredP color="red">51.2%</ColoredP>
      <p>CT round win percent</p>
      <ColoredP color="green">62.2%</ColoredP>
    </Stat>
    <Stat>
      <ColoredP color="red">51.2%</ColoredP>
      <p>T round win percent</p>
      <ColoredP color="green">62.2%</ColoredP>
    </Stat>
    <HideStats>Скрыть статистику</HideStats>
  </div>
);

export default MapStats;
