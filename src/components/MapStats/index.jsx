import React, { useState } from 'react';
import styled from 'styled-components';

/** Comonents **/
import Map from '../../components/Map';

const Container = styled.div`
  margin-bottom: 0.8rem;
  background-color: ${({ theme }) => theme.secondaryBg};
  border-radius: 0.8rem;

  @media (min-width: 576px) {
    margin-bottom: 1.6rem;
  }
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

const Stat = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 1.6rem;
  padding: 0.8rem 0;
  border-bottom: 0.1rem dashed #3b3d49;
  font-size: ${({ theme }) => theme.tetriaryFontSize};
  line-height: ${({ theme }) => theme.secondaryLineHeight};
`;

const StyledSpan = styled.span`
  color: ${({ color, theme }) => theme[color] || theme.primaryText};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
`;

const HideStats = styled.div`
  padding: 0.8rem 1.6rem;
  text-decoration: underline;
  color: ${({ theme }) => theme.secondaryText};
`;

const MapStats = ({ open: openByDefault, ...map }) => {
  const [open, setOpen] = useState(openByDefault);

  return (
    <>
      <Container onClick={() => setOpen(!open)}>
        <Map {...map}>
          <LeftSide>
            <PrimaryText>17%</PrimaryText>
            <SecondaryText>6 maps</SecondaryText>
          </LeftSide>
          {!open && <u>Статистика карты</u>}
          <RightSide>
            <PrimaryText bold>78%</PrimaryText>
            <SecondaryText>9 maps</SecondaryText>
          </RightSide>
        </Map>
        {open && (
          <>
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
          </>
        )}
      </Container>
    </>
  );
};

export default MapStats;
