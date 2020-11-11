import React from 'react';
import styled from 'styled-components';

/** Containers **/
import PastMatches from '../PastMatches';
import MapsStats from '../MapsStats';
import Maps from '../Maps';

const Container = styled.div`
  background-color: ${({ theme }) => theme.primaryBg};
  padding: 0 1.6rem 8.4rem;
  border-top-left-radius: 1.6rem;
  border-top-right-radius: 1.6rem;
  margin-top: -1.6rem;
`;

const Statistic = () => {
  return (
    <Container>
      <Maps />
      <PastMatches />
      <MapsStats />
    </Container>
  );
};

export default Statistic;
