import React from 'react';
import styled from 'styled-components';

const TeamLogoWrapper = styled.div`
  width: 8rem;
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.quaternaryBg};
  border-radius: 50%;
  border: 0.8rem solid ${({ theme }) => theme.tetriaryBg};
  box-shadow: 0 0 0 0.1rem ${({ theme }) => theme.quaternaryBg};
`;

const TeamLogo = styled.img`
  width: 4.4rem;
  height: 4rem;
`;

const TeamName = styled.div`
  margin-top: 0.4rem;
  text-transform: capitalize;
  font-size: ${({ theme }) => theme.secondaryFontSize};
  line-height: ${({ theme }) => theme.primaryLineHeight};
  font-weight: bold;
`;

const TeamRank = styled.div`
  color: ${({ theme }) => theme.secondaryText};
`;

const Team = ({ logo, name, rank }) => {
  return (
    <div>
      <TeamLogoWrapper>
        <TeamLogo src={logo} alt={name} />
      </TeamLogoWrapper>
      <TeamName>{name}</TeamName>
      <TeamRank>
        <b>#{rank}</b> World Rank
      </TeamRank>
    </div>
  );
};

export default Team;
