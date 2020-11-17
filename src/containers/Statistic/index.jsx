import React from 'react';
import styled from 'styled-components';

/** Containers **/
import PastMatches from '../PastMatches';
import MapsStats from '../MapsStats';
import Maps from '../Maps';
import Rosters from '../Rosters';
import GamesHistoryContainer from '../GamesHistoryContainer';
import MapTimeline from '../MapTimeline';

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

const Statistic = () => {
  return (
    <Container>
      <Maps />
      {/* <MapTimeline /> */}
      <PastMatches />
      <GamesHistoryContainer />
      <MapsStats />
      <Rosters />
    </Container>
  );
};

export default Statistic;
