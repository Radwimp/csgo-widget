import React from 'react';
import styled from 'styled-components';

/** Components **/
import Title from '../../components/Title';

const StyledMaps = styled.div`
  padding: 1.2rem;
  border-radius: 0.8rem;
  background: ${({ theme }) => theme.secondaryBg};
  font-weight: bold;
`;

const Maps = () => {
  return (
    <>
      <Title>Карты</Title>
      <StyledMaps>TBA</StyledMaps>
    </>
  );
};

export default Maps;
