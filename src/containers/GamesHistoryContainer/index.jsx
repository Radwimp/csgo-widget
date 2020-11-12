import React from 'react';
import styled from 'styled-components';

/** Images **/
import VitalityLogo from '../../assets/teams/vitality.png';
import FnaticLogo from '../../assets/teams/fnatic.png';

/** Components **/
import Title from '../../components/Title';
import GamesHistory from '../GamesHistory';

/** Consts **/
import { vitalityGames, fnaticGames } from './games';

const WinrateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.2rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.secondaryBg};
`;

const TeamLogo = styled.img`
  width: 2.2rem;
  height: 2rem;
`;

const Winrate = styled.div`
  display: flex;
  justify-content: space-between;

  & > div {
    padding: 0 1.8rem;

    &:first-child {
      border-right: 0.1rem dashed ${({ theme }) => theme.border};
    }
  }
`;

const PrimaryText = styled.div`
  font-size: ${({ theme }) => theme.primaryFontSize};
  line-height: ${({ theme }) => theme.primaryLineHeight};
`;

const SecondaryText = styled.div`
  color: ${({ theme }) => theme.secondaryText};
`;

const GamesHistoryContainer = () => {
  return (
    <>
      <Title mainTitle="История игр" />
      <WinrateWrapper>
        <TeamLogo src={VitalityLogo} alt="" />
        <Winrate>
          <div>
            <PrimaryText>20.49%</PrimaryText>
            <SecondaryText>Победы/3 мес</SecondaryText>
          </div>
          <div>
            <PrimaryText>68.49%</PrimaryText>
            <SecondaryText>Победы/3 мес</SecondaryText>
          </div>
        </Winrate>
        <TeamLogo src={FnaticLogo} alt="" />
      </WinrateWrapper>
      <GamesHistory team="Vitality" maps="14" wins="8" games={vitalityGames} />
      <GamesHistory team="Fnatic" maps="14" wins="8" games={fnaticGames} />
    </>
  );
};

export default GamesHistoryContainer;
