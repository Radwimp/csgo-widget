import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2.4rem 0 1.6rem;
  text-align: left;
`;

const MainTitle = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  font-size: ${({ theme }) => theme.secondaryFontSize};
  line-height: ${({ theme }) => theme.primaryLineHeight};
`;

const SubTitle = styled.div`
  color: ${({ theme }) => theme.secondaryText};
  font-size: ${({ theme }) => theme.tetriaryFontSize};
  line-height: ${({ theme }) => theme.secondaryLineHeight};
`;

const Title = ({ children, subTitle }) => {
  return (
    <Container>
      <MainTitle>{children}</MainTitle>
      {subTitle && <SubTitle>{subTitle}</SubTitle>}
    </Container>
  );
};

export default Title;
