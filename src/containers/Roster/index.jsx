import React from 'react';
import styled from 'styled-components';

/** Components **/
import Title from '../../components/Title';
import Player from '../../components/Player';

/** Images **/
import VitalityLogo from '../../assets/vitality.svg';
import FnaticLogo from '../../assets/fnatic.svg';
import France from '../../assets/country/France.svg';
import Sweden from '../../assets/country/Sweden.svg';
import Shox from '../../assets/player/shox.svg';
import Rpk from '../../assets/player/rpk.svg';
import Apex from '../../assets/player/apex.svg';
import Zywoo from '../../assets/player/zywoo.svg';
import Misuta from '../../assets/player/misuta.svg';
import Flusha from '../../assets/player/flusha.svg';
import Jw from '../../assets/player/jw.svg';
import Krimz from '../../assets/player/krimz.svg';
import Golden from '../../assets/player/golden.svg';
import Brollan from '../../assets/player/brollan.svg';

const Container = styled.div`
  margin-bottom: 1.6rem;
  border-radius: 0.8rem;
  overflow: hidden;
`;

const Team = styled.div`
  position: relative;
  padding: 1.6rem 0;
  background-color: ${({ theme }) => theme.secondaryBg};
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
        <b>Vitality</b>
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
