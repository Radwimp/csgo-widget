import React from 'react';
import styled from 'styled-components';

const Stat = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 1.6rem;
  border-bottom: 1px dashed #3b3d49;
  font-size: ${({ theme }) => theme.tetriaryFontSize};
  line-height: ${({ theme }) => theme.secondaryLineHeight};
`;

const StyledSpan = styled.span`
  color: ${({ color, theme }) => theme[color] || theme.primaryText};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
`;

const HideStats = styled.div`
  padding: 0.8rem 1.6rem;
  color: ${({ theme }) => theme.secondaryText};
  text-decoration: underline;
`;

const MapStats = () => (
  <div>
    <Stat>
      <StyledSpan>250</StyledSpan>
      <StyledSpan>Avg. rounds</StyledSpan>
      <StyledSpan bold>390</StyledSpan>
    </Stat>
    <Stat>
      <StyledSpan bold>179</StyledSpan>
      <StyledSpan>Round won</StyledSpan>
      <StyledSpan>140</StyledSpan>
    </Stat>
    <Stat>
      <StyledSpan color="red">51.2%</StyledSpan>
      <StyledSpan>CT round win percent</StyledSpan>
      <StyledSpan color="green">62.2%</StyledSpan>
    </Stat>
    <Stat>
      <StyledSpan color="red">51.2%</StyledSpan>
      <StyledSpan>T round win percent</StyledSpan>
      <StyledSpan color="green">62.2%</StyledSpan>
    </Stat>
    <HideStats>Скрыть статистику</HideStats>
  </div>
);

export default MapStats;
