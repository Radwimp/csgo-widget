import React from 'react';
import styled from 'styled-components';

/* Components */
import Title from '../../components/Title';
import Map from '../../components/Map';

/* Const */
import maps from './maps';

const StyledMaps = styled.div`
  border-radius: 0.8rem;
  background: ${({ theme }) => theme.secondaryBg};
  font-weight: bold;
  padding: 1.2rem;
`;

const Maps = ({ live }) => {
  return (
    <div>
      <Title>Карты</Title>
      {live ? (
        maps.map(obj => <Map key={obj.name} {...obj} />)
      ) : (
        <StyledMaps>TBA</StyledMaps>
      )}
    </div>
  );
};

export default Maps;
