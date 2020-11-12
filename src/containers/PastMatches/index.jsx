import React from 'react';
import styled from 'styled-components';

/** Images **/
import VitalityLogo from '../../assets/teams/vitality.png';
import FnaticLogo from '../../assets/teams/fnatic.png';
import TriangleLogo from '../../assets/events/triangle.png';
import StarLogo from '../../assets/events/star.png';
import EslOneLogo from '../../assets/events/esl-one.png';
import DreamhackLogo from '../../assets/events/dreamhack.png';
import EslProLogo from '../../assets/events/esl-pro.png';

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
          firstTeamLogo={VitalityLogo}
          secondTeamLogo={FnaticLogo}
          firstTeamWinAmount="2"
          secondTeamWinAmount="3"
          overtimesAmount="0"
        />
        <PastMatchResult
          date="16.09.20"
          firstTeamLogo={VitalityLogo}
          secondTeamLogo={FnaticLogo}
          score="2:1"
          eventLogo={StarLogo}
          firstTeamColor="green"
          secondTeamColor="red"
        />
        <PastMatchResult
          date="16.09.20"
          firstTeamLogo={VitalityLogo}
          secondTeamLogo={FnaticLogo}
          score="0:1"
          eventLogo={TriangleLogo}
          firstTeamColor="red"
          secondTeamColor="green"
        />
        <PastMatchResult
          date="16.09.20"
          firstTeamLogo={VitalityLogo}
          secondTeamLogo={FnaticLogo}
          score="0:1"
          eventLogo={EslOneLogo}
          firstTeamColor="red"
          secondTeamColor="green"
        />
        <PastMatchResult
          date="16.09.20"
          firstTeamLogo={VitalityLogo}
          secondTeamLogo={FnaticLogo}
          score="1:2"
          eventLogo={DreamhackLogo}
          firstTeamColor="red"
          secondTeamColor="green"
        />
        <PastMatchResult
          date="16.09.20"
          firstTeamLogo={VitalityLogo}
          secondTeamLogo={FnaticLogo}
          score="2:1"
          eventLogo={EslProLogo}
          firstTeamColor="green"
          secondTeamColor="red"
        />
      </Container>
    </>
  );
};

export default PastMatches;
