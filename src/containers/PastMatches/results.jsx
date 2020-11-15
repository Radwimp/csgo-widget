/** Images **/
import VitalityLogo from '../../assets/teams/vitality.png';
import FnaticLogo from '../../assets/teams/fnatic.png';
import TriangleLogo from '../../assets/events/triangle.png';
import StarLogo from '../../assets/events/star.png';
import EslOneLogo from '../../assets/events/esl-one.png';
import DreamhackLogo from '../../assets/events/dreamhack.png';
import EslProLogo from '../../assets/events/esl-pro.png';

const summary = {
  firstTeamLogo: VitalityLogo,
  secondTeamLogo: FnaticLogo,
  firstTeamWinAmount: '2',
  secondTeamWinAmount: '3',
  overtimesAmount: '0',
};

const results = [
  {
    date: '4.07.20',
    firstTeamLogo: VitalityLogo,
    secondTeamLogo: FnaticLogo,
    score: '2:1',
    eventLogo: EslProLogo,
  },
  {
    date: '16.09.20',
    firstTeamLogo: VitalityLogo,
    secondTeamLogo: FnaticLogo,
    score: '1:0',
    eventLogo: StarLogo,
  },
  {
    date: '10.03.20',
    firstTeamLogo: VitalityLogo,
    secondTeamLogo: FnaticLogo,
    score: '1:2',
    eventLogo: DreamhackLogo,
  },
  {
    date: '23.11.20',
    firstTeamLogo: VitalityLogo,
    secondTeamLogo: FnaticLogo,
    score: '0:1',
    eventLogo: EslOneLogo,
  },
  {
    date: '2.08.20',
    firstTeamLogo: VitalityLogo,
    secondTeamLogo: FnaticLogo,
    score: '0:2',
    eventLogo: TriangleLogo,
  },
];

export { summary, results };
