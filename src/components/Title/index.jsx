import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2.4rem 0 1.6rem;
  text-align: left;
`;

const SubTitle = styled.h5`
  color: ${({ theme }) => theme.secondaryText};
`;

const Title = ({ mainTitle, subTitle }) => {
  return (
    <Container>
      <h4>{mainTitle}</h4>
      {subTitle && <SubTitle>{subTitle}</SubTitle>}
    </Container>
  );
};

export default Title;
