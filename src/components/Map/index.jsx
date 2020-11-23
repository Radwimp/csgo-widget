import React from 'react';
import styled from 'styled-components';

/* Images */
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

function getResult(totalScore = '') {
  const [a, b] = totalScore.split(':');

  if (+a > +b) {
    return [{ winner: true }, { loser: true }];
  }
  if (+a < +b) {
    return [{ loser: true }, { winner: true }];
  }

  return null;
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledMap = styled.div`
  margin-bottom: 1.6rem;
  border-radius: 0.8rem;
  background: ${({ theme }) => theme.secondaryBg};
  overflow: hidden;

  &:last-child {
    margin: 0;
  }
`;

const ScoreBox = styled.div`
  padding: 0.4rem;
`;

const LeftSide = styled.div`
  min-width: 40%;
  text-align: left;

  ${({ winner }) =>
    winner &&
    css`
      background: linear-gradient(
        90deg,
        rgba(39, 174, 96, 0.5),
        rgba(0, 0, 0, 0)
      );

      & > div {
        font-weight: bold;
      }
    `}

  ${({ loser }) =>
    loser &&
    css`
      background: linear-gradient(
        90deg,
        rgba(235, 87, 87, 0.5),
        rgba(0, 0, 0, 0)
      );
    `}

  & > div {
    padding: 1.2rem 1.6rem 0 1.6rem;
  }
`;

const RightSide = styled(LeftSide)`
  text-align: right;
  ${({ winner }) =>
    winner &&
    css`
      background: linear-gradient(
        270deg,
        rgba(39, 174, 96, 0.5),
        rgba(0, 0, 0, 0)
      );
      & > div {
        font-weight: bold;
      }
    `}

  ${({ loser }) =>
    loser &&
    css`
      background: linear-gradient(
        270deg,
        rgba(235, 87, 87, 0.5),
        rgba(0, 0, 0, 0)
      );
    `}
`;

const Live = styled.div`
  width: 3.2rem;
  margin: 0.4rem auto 0.2rem;
  border-radius: 0.4rem;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.red};
`;

const PrimaryText = styled.div`
  line-height: ${({ theme }) => theme.secondaryLineHeight};
  font-size: ${({ theme }) => theme.tetriaryFontSize};
`;

const SecondaryText = styled.div`
  color: ${({ theme }) => theme.grey};
`;

const Map = ({
  name,
  firstTeamName,
  secondTeamName,
  totalScore,
  firstHalfScore,
  secondHalfScore,
  firstTeamLogo,
  secondTeamLogo,
  firstTeamChoise,
  secondTeamChoise,
  live,
}) => {
  return (
    <StyledMap>
      <MapWrapper
        name={name}
        firstTeamLogo={firstTeamLogo}
        secondTeamLogo={secondTeamLogo}
        firstTeamChoise={firstTeamChoise}
        secondTeamChoise={secondTeamChoise}
      >
        <Container>
          <LeftSide {...getResult(totalScore)?.[0]}>
            <PrimaryText>{firstTeamName}</PrimaryText>
          </LeftSide>
          <ScoreBox>
            {totalScore && (
              <PrimaryText>
                <b>{totalScore}</b>
              </PrimaryText>
            )}
            {live && <Live>live</Live>}
            <SecondaryText>
              {firstHalfScore}; {secondHalfScore}
            </SecondaryText>
          </ScoreBox>
          <RightSide {...getResult(totalScore)?.[1]}>
            <PrimaryText>{secondTeamName}</PrimaryText>
          </RightSide>
        </Container>
      </MapWrapper>
    </StyledMap>
  );
};

export default Map;
