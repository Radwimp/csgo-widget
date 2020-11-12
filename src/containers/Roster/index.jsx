import React from 'react';
import styled from 'styled-components';

/** Components **/
import Title from '../../components/Title';
import Player from '../../components/Player';

/** Images **/
import VitalityLogo from '../../assets/teams/vitality.png';
import FnaticLogo from '../../assets/teams/fnatic.png';
import France from '../../assets/country/France.svg';
import Sweden from '../../assets/country/Sweden.svg';
import Shox from '../../assets/players/shox.svg';
import Rpk from '../../assets/players/rpk.svg';
import Apex from '../../assets/players/apex.svg';
import Zywoo from '../../assets/players/zywoo.svg';
import Misuta from '../../assets/players/misuta.svg';
import Flusha from '../../assets/players/flusha.svg';
import Jw from '../../assets/players/jw.svg';
import Krimz from '../../assets/players/krimz.svg';
import Golden from '../../assets/players/golden.svg';
import Brollan from '../../assets/players/brollan.svg';

const Container = styled.div`
  margin-bottom: 1.6rem;
  border-radius: 0.8rem;
  overflow: hidden;
`;

const Team = styled.div`
  position: relative;
  padding: 1.4rem 0;
  background-color: ${({ theme }) => theme.secondaryBg};
  font-size: ${({ theme }) => theme.secondaryFontSize};
  line-height: ${({ theme }) => theme.primaryLineHeight};
  font-weight: bold;
`;

const TeamLogo = styled.img`
  position: absolute;
  left: 3rem;
  width: 2.2rem;
`;

const Roster = () => (
  <>
    <Title mainTitle="Состав команд" />
    <Container>
      <Team>
        <TeamLogo src={VitalityLogo} alt="Team A" />
        Vitality
      </Team>
      <Player
        name="Richard Papillion"
        nick="shox"
        photo={Shox}
        countryFlag={France}
      />
      <Player
        name="Cédric Guipouy"
        nick="RpK"
        photo={Rpk}
        countryFlag={France}
      />
      <Player
        name="Dan Madesclaire"
        nick="apEX"
        photo={Apex}
        countryFlag={France}
      />
      <Player
        name="Mathieu Herbaut"
        nick="ZywOo"
        photo={Zywoo}
        countryFlag={France}
      />
      <Player
        name="Kévin Rabier"
        nick="misutaaa"
        photo={Misuta}
        countryFlag={France}
      />
    </Container>
    <Container>
      <Team>
        <TeamLogo src={FnaticLogo} alt="Team B" />
        <b>Fnatic</b>
      </Team>
      <Player
        name="Robin Rönnquist"
        nick="flusha"
        photo={Flusha}
        countryFlag={Sweden}
      />
      <Player
        name="Robin Rönnquist"
        nick="JW"
        photo={Jw}
        countryFlag={Sweden}
      />
      <Player
        name="Jesper Wecksell"
        nick="misutaaa"
        photo={Misuta}
        countryFlag={Sweden}
      />
      <Player
        name="Freddy Johansson"
        nick="KRIMZ"
        photo={Krimz}
        countryFlag={Sweden}
      />
      <Player
        name="Maikil Selim"
        nick="Golden"
        photo={Golden}
        countryFlag={Sweden}
      />
      <Player
        name="Ludvig Brolin"
        nick="Brollan"
        photo={Golden}
        countryFlag={Sweden}
      />
    </Container>
  </>
);
export default Roster;
