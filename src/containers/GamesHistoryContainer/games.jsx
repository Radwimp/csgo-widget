/** Teams **/
import VitalityLogo from '../../assets/teams/vitality.png';
import FnaticLogo from '../../assets/teams/fnatic.png';
import NaviLogo from '../../assets/teams/navi.png';
import AsterLogo from '../../assets/teams/aster.png';
import SpiritLogo from '../../assets/teams/spirit.png';
import LiquidLogo from '../../assets/teams/liquid.png';
import WislaKrakowLogo from '../../assets/teams/wisla-krakow.png';
import TriangleLogo from '../../assets/events/triangle.png';
import StarLogo from '../../assets/events/star.png';

/** Events **/
import EslOneLogo from '../../assets/events/esl-one.png';
import DreamhackLogo from '../../assets/events/dreamhack.png';
import EslProLogo from '../../assets/events/esl-pro.png';
import IntelLogo from '../../assets/events/intel.png';

const vitalityGames = [
  {
    date: '16.09.20',
    eventLogo: StarLogo,
    firstTeamName: 'Vitality',
    firstTeamLogo: VitalityLogo,
    secondTeamName: 'Navi',
    secondTeamLogo: NaviLogo,
    score: '0:2',
  },
  {
    date: '07.10.20',
    eventLogo: DreamhackLogo,
    firstTeamName: 'Vitality',
    firstTeamLogo: VitalityLogo,
    secondTeamName: 'Fnatic',
    secondTeamLogo: FnaticLogo,
    score: '1:1',
  },
  {
    date: '02.03.20',
    eventLogo: EslProLogo,
    firstTeamName: 'Vitality',
    firstTeamLogo: VitalityLogo,
    secondTeamName: 'WislaKrakow',
    secondTeamLogo: WislaKrakowLogo,
    score: '2:1',
  },
  {
    date: '27.07.20',
    eventLogo: EslOneLogo,
    firstTeamName: 'Vitality',
    firstTeamLogo: VitalityLogo,
    secondTeamName: 'Spirit',
    secondTeamLogo: SpiritLogo,
    score: '1:2',
  },
  {
    date: '24.07.20',
    eventLogo: TriangleLogo,
    firstTeamName: 'Vitality',
    firstTeamLogo: VitalityLogo,
    secondTeamName: 'Liquid',
    secondTeamLogo: LiquidLogo,
    score: '1:2',
  },
];

const fnaticGames = [
  {
    date: '27.05.20',
    eventLogo: IntelLogo,
    firstTeamName: 'Fnatic',
    firstTeamLogo: FnaticLogo,
    secondTeamName: 'Navi',
    secondTeamLogo: NaviLogo,
    score: '0:2',
  },
  {
    date: '04.10.20',
    eventLogo: StarLogo,
    firstTeamName: 'Fnatic',
    firstTeamLogo: FnaticLogo,
    secondTeamName: 'Liquid',
    secondTeamLogo: LiquidLogo,
    score: '1:1',
  },
  {
    date: '09.11.20',
    eventLogo: EslProLogo,
    firstTeamName: 'Fnatic',
    firstTeamLogo: FnaticLogo,
    secondTeamName: 'WislaKrakow',
    secondTeamLogo: WislaKrakowLogo,
    score: '2:1',
  },
  {
    date: '08.11.20',
    eventLogo: DreamhackLogo,
    firstTeamName: 'Fnatic',
    firstTeamLogo: FnaticLogo,
    secondTeamName: 'Spirit',
    secondTeamLogo: SpiritLogo,
    score: '1:2',
  },
  {
    date: '17.04.20',
    eventLogo: TriangleLogo,
    firstTeamName: 'Fnatic',
    firstTeamLogo: FnaticLogo,
    secondTeamName: 'Aster',
    secondTeamLogo: AsterLogo,
    score: '2:1',
  },
];

export { vitalityGames, fnaticGames };
