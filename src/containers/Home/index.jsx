import React from 'react';
import styled from 'styled-components';

/** Components **/
import Scoreboard from '../../components/Scoreboard';
import Statistic from '../../components/Statistic';

const Container = styled.div`
  text-align: center;
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.primaryText};
`;

const Home = () => {
  return (
    <Container>
      <Scoreboard />
      <Statistic />
    </Container>
  );
};

export default Home;
