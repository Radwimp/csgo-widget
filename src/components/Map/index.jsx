import React from 'react';
import styled from 'styled-components';

/* Components */
import MapWrapper from '../MapWrapper';

function getTeamBlock(totalScore = '', side = '', teamName = '') {
  const [leftTeamScore, rightTeamScore] = totalScore.split(':');

  if (+leftTeamScore > +rightTeamScore) {
    if (side === 'left') {
      return <Winner side="left">{teamName}</Winner>;
    } else {
      return <Loser side="right">{teamName}</Loser>;
    }
  }
  if (+leftTeamScore < +rightTeamScore) {
    if (side === 'left') {
      return <Loser side="left">{teamName}</Loser>;
    } else {
      return <Winner side="right">{teamName}</Winner>;
    }
  }

  return <TeamBlock side={side}>{teamName}</TeamBlock>;
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

const PrimaryText = styled.div`
  line-height: ${({ theme }) => theme.secondaryLineHeight};
  font-size: ${({ theme }) => theme.tetriaryFontSize};
`;

const SecondaryText = styled.div`
  color: ${({ theme }) => theme.grey};
`;

const TeamBlock = styled(PrimaryText)`
  min-width: 40%;
  padding: 1.2rem 1.6rem;
  text-align: ${({ side }) => side};
`;

const Winner = styled(TeamBlock)`
  font-weight: bold;
  background: linear-gradient(
    ${({ side }) => (side === 'left' ? 90 : 270)}deg,
    rgba(39, 174, 96, 0.5),
    rgba(0, 0, 0, 0)
  );
`;

const Loser = styled(TeamBlock)`
  background: linear-gradient(
    ${({ side }) => (side === 'left' ? 90 : 270)}deg,
    rgba(235, 87, 87, 0.5),
    rgba(0, 0, 0, 0)
  );
`;

const Live = styled.div`
  width: 3.2rem;
  margin: 0.4rem auto 0.2rem;
  border-radius: 0.4rem;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.red};
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
          {getTeamBlock(totalScore, 'left', firstTeamName)}
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
          {getTeamBlock(totalScore, 'right', secondTeamName)}
        </Container>
      </MapWrapper>
    </StyledMap>
  );
};

export default Map;
