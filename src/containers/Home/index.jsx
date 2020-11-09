import React from 'react';
import styled from 'styled-components';

/** Components **/
import Scoreboard from '../../components/Scoreboard';

const Container = styled.div`
  text-align: center;
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
`;

const Home = () => {
  return (
    <Container>
      <Scoreboard />
    </Container>
  );
};

export default Home;
