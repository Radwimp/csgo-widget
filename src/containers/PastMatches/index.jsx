import React from 'react';
import styled from 'styled-components';

/** Images **/
import VitalityLogo from '../../assets/vitality.svg';
import FnaticLogo from '../../assets/fnatic.svg';
import TriangleLogo from '../../assets/triangle.svg';
import StarLogo from '../../assets/star.svg';

/** Components **/
import PastMatchesSummary from '../../components/PastMatchesSummary';
import PastMatchResult from '../../components/PastMatchResult';
import Title from '../../components/Title';

const Container = styled.div`
  border-radius: 0.8rem;
  overflow: hidden;
`;

const PastMatches = () => {
  return (
    <>
      <Title mainTitle="Личные встречи" />
      <Container>
        <PastMatchesSummary
          teamALogo={VitalityLogo}
          teamBLogo={FnaticLogo}
          teamAWinAmount="2"
          teamBWinAmount="3"
          overtimesAmount="0"
        />
        <PastMatchResult
          date="16.09.20"
          teamALogo={VitalityLogo}
          teamBLogo={FnaticLogo}
          score="2:1"
          eventLogo={StarLogo}
          teamAColor="green"
          teamBColor="red"
        />
        <PastMatchResult
          date="16.09.20"
          teamALogo={VitalityLogo}
          teamBLogo={FnaticLogo}
          score="0:1"
          eventLogo={TriangleLogo}
          teamAColor="red"
          teamBColor="green"
        />
        <PastMatchResult
          date="16.09.20"
          teamALogo={VitalityLogo}
          teamBLogo={FnaticLogo}
          score="0:1"
          eventLogo={TriangleLogo}
          teamAColor="red"
          teamBColor="green"
        />
        <PastMatchResult
          date="16.09.20"
          teamALogo={VitalityLogo}
          teamBLogo={FnaticLogo}
          score="1:2"
          eventLogo={StarLogo}
          teamAColor="red"
          teamBColor="green"
        />
        <PastMatchResult
          date="16.09.20"
          teamALogo={VitalityLogo}
          teamBLogo={FnaticLogo}
          score="2:1"
          eventLogo={StarLogo}
          teamAColor="green"
          teamBColor="red"
        />
      </Container>
    </>
  );
};

export default PastMatches;
