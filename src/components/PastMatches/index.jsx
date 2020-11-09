import React from 'react';
import styled from 'styled-components';

/** Images **/
import VitalityLogo from '../../assets/vitality.svg';
import FnaticLogo from '../../assets/fnatic.svg';
import TriangleLogo from '../../assets/triangle.svg';
import StarLogo from '../../assets/star.svg';

/** Components **/
import PastMatchesSummary from './PastMatchesSummary';
import MatchResult from './MatchResult';

const Container = styled.div`
  border-radius: 8px;
  overflow: hidden;
`;

const PastMatches = () => {
  return (
    <Container>
      <PastMatchesSummary
        teamALogo={VitalityLogo}
        teamBLogo={FnaticLogo}
        teamAWinAmount="2"
        teamBWinAmount="3"
        overtimesAmount="0"
      />
      <MatchResult
        date="16.09.20"
        teamALogo={VitalityLogo}
        teamBLogo={FnaticLogo}
        score="2:1"
        eventLogo={StarLogo}
      />
      <MatchResult
        date="16.09.20"
        teamALogo={VitalityLogo}
        teamBLogo={FnaticLogo}
        score="0:1"
        eventLogo={TriangleLogo}
      />
      <MatchResult
        date="16.09.20"
        teamALogo={VitalityLogo}
        teamBLogo={FnaticLogo}
        score="0:1"
        eventLogo={TriangleLogo}
      />
      <MatchResult
        date="16.09.20"
        teamALogo={VitalityLogo}
        teamBLogo={FnaticLogo}
        score="1:2"
        eventLogo={StarLogo}
      />
      <MatchResult
        date="16.09.20"
        teamALogo={VitalityLogo}
        teamBLogo={FnaticLogo}
        score="2:1"
        eventLogo={StarLogo}
      />
    </Container>
  );
};

export default PastMatches;
