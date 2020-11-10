import React from 'react';
import styled from 'styled-components';

/** Components **/
import Title from '../../components/Title';

const StyledMaps = styled.h6`
  background: ${({ theme }) => theme.secondaryBg};
  padding: 1.2rem;
  border-radius: 0.8rem;
  font-weight: bold;
`;

const Maps = () => {
  return (
    <>
      <Title mainTitle="Карты" />
      <StyledMaps>TBA</StyledMaps>
    </>
  );
};

export default Maps;
