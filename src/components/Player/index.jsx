import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.1rem;
  padding: 0rem 1.7rem;
  background-color: ${({ theme }) => theme.tetriaryBg};
`;

const Photo = styled.img`
  width: 4.6rem;
  height: 4.8rem;
`;

const Name = styled.div`
  color: ${({ theme }) => theme.secondaryText};
`;

const Nick = styled.div`
  min-width: 4.6rem;
  font-size: ${({ theme }) => theme.tetriaryFontSize};
  line-height: ${({ theme }) => theme.secondaryLineHeight};
`;

const CountryWrapper = styled.div`
  min-width: 4.6rem;
  text-align: right;
  font-size: 1.2rem;
  line-height: ${({ theme }) => theme.secondaryFontSize};
`;

const Player = ({ name, nick, photo, countryFlag }) => (
  <>
    <Container>
      <Photo src={photo} alt={nick} />
      <div>
        <Nick>{nick}</Nick>
        <Name>{name}</Name>
      </div>
      <CountryWrapper>
        <img src={countryFlag} alt="Country" />
      </CountryWrapper>
    </Container>
  </>
);

export default Player;
