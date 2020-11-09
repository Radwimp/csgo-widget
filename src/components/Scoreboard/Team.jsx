import React from 'react';
import styled from 'styled-components';

const TeamLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  background-color: ${({ theme }) => theme.quaternaryBg};
  border-radius: 50%;
  border: 8px solid transparent;
  box-shadow: 0 0 0 1px ${({ theme }) => theme.quaternaryBg};
`;

const TeamName = styled.div`
  margin-top: 4px;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
`;

const TeamRank = styled.div`
  color: ${({ theme }) => theme.secondaryText};
  font-size: 12px;
  line-height: 16px;
`;

const Team = ({ logo, name, rank }) => {
  return (
    <div>
      <TeamLogo>
        <img src={logo} alt={name} />
      </TeamLogo>
      <TeamName>{name}</TeamName>
      <TeamRank>
        <b>#{rank}</b> World Rank
      </TeamRank>
    </div>
  );
};

export default Team;
