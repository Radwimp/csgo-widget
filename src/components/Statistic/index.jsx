import React from 'react';
import styled from 'styled-components';
import PastMatches from '../PastMatches';

/** Components **/
import Title from '../Title';

const Container = styled.div`
  background-color: ${({ theme }) => theme.primaryBg};
  padding: 16px;
`;

const Maps = styled.div`
  background: ${({ theme }) => theme.secondaryBg};
  padding: 12px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
`;

const Statistic = () => {
  return (
    <Container>
      <Title mainTitle="Карты" />
      <Maps>TBA</Maps>
      <Title mainTitle="Личные встречи" />
      <PastMatches />
      <Title
        mainTitle="Статистика карт"
        subTitle="Winrate за последние 3 месяца"
      />
    </Container>
  );
};

export default Statistic;
