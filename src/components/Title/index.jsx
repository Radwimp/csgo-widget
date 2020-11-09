import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 24px 0 16px;
  text-align: left;
`;

const MainTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  text-transform: uppercase;
`;

const SubTitle = styled.span`
  color: ${({ theme }) => theme.secondaryText};
`;

const Title = ({ mainTitle, subTitle }) => {
  return (
    <Container>
      <MainTitle>{mainTitle}</MainTitle>
      <SubTitle>{subTitle}</SubTitle>
    </Container>
  );
};

export default Title;
