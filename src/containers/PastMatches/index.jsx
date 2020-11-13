import React from 'react';
import styled from 'styled-components';

/** Components **/
import PastMatchesSummary from '../../components/PastMatchesSummary';
import PastMatchResult from '../../components/PastMatchResult';
import Title from '../../components/Title';

/** Consts **/
import { summary, results } from './results';

const Container = styled.div`
  border-radius: 0.8rem;
  overflow: hidden;
`;

const PastMatches = () => {
  return (
    <>
      <Title mainTitle="Личные встречи" />
      <Container>
        <PastMatchesSummary {...summary} />
        {results.map((result, i) => (
          <PastMatchResult key={i} {...result} />
        ))}
      </Container>
    </>
  );
};

export default PastMatches;
