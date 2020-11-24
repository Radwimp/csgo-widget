import React, { useState } from 'react';
import styled from 'styled-components';

/* Containers */
import Scoreboard from '../Scoreboard';
import Maps from '../Maps';
import MapTimeline from '../MapTimeline';
import PastMatches from '../PastMatches';
import MapsStats from '../MapsStats';
import Rosters from '../Rosters';
import GamesHistoryContainer from '../GamesHistoryContainer';

const Container = styled.div`
  background-color: ${({ theme }) => theme.primaryBg};
  padding: 0 1.6rem 6.8rem;
  border-top-left-radius: 1.6rem;
  border-top-right-radius: 1.6rem;
  margin-top: -1.6rem;

  @media (min-width: 576px) {
    padding: 0 4.8rem 6rem;
  }
`;

const Main = () => {
  const [live, setLive] = useState(true);
  return (
    <>
      <Scoreboard live={live} setLive={setLive} />
      <Container>
        <Maps live={live} />
        <MapTimeline />
        <PastMatches />
        <GamesHistoryContainer />
        <MapsStats />
        <Rosters />
      </Container>
    </>
  );
};

export default Main;
