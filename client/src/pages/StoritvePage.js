import React, { useEffect } from 'react';
import '../sass/pages/storitve_page.scss';
import {
  Izdelava,
  Podpora,
  Izobrazevanje,
  Svetovanje,
  Dizajn,
  Marketing,
} from '../components/svgs';
import { connect } from 'react-redux';

function StoritvePage(props) {
  useEffect(() => {
    const clicked = props.services.selected;
    const classes = document.getElementsByClassName('storitve__storitev');

    if (clicked !== undefined) {
      if (clicked % 2 === 0) {
        classes[clicked].classList.add('selectedService-w');
      } else {
        classes[clicked].classList.add('selectedService-b');
      }
      classes[clicked].scrollIntoView({
        behavior: 'smooth',
        block: window.innerWidth <= 900 ? 'start' : 'center',
      });
    }
  });

  return (
    <div className="storitve">
      <div className="storitve__storitev">
        <div className="flexson">
          <div className="svgson">
            <Izobrazevanje />
          </div>
          <div className="storitve__storitev--content">
            <h2>Izobraževanje</h2>
            <p>
              Izobraževanje je glavna dejavnost zavoda ZDPI. Osredotočamo se na
              izobraževanje predvsem malih in srednje velikih podjetji na
              področju digitalizacije. Osredotočamo se predvsem na uporabo
              sodobnih digitalnih tehnologij, ki podjetjem olajšajo poslovanje,
              izboljšajo komunikacijo s strankami in znotraj podjetja in
              naredijo podjetja prepoznavnejša na spletu, kar vse skupaj privede
              do boljše konkurenčnosti malih in srednje velikih podjetij.
              Izobraževanja so brezplačna, potekajo v obliki predavanj ali
              delavnic, katerih termini so redno objavljeni na naši spletni
              strani in v obliki člankov ter priročnikov, ki jih prav tako redno
              objavljamo.
            </p>
          </div>
        </div>
      </div>
      <div className="storitve__storitev">
        <div className="flexson">
          <div className="storitve__storitev--content">
            <h2>Svetovanje</h2>
            <p>
              Vsem podjetnikom nudimo tudi brezplačna svetovanja na področju
              digitalizacije. Svetovanja zadevajo predvsem proces integracije
              digitalnih tehnologij v poslovni model podjetij. Gre na primer za
              svetovanje glede izbire prave programske opreme, svetovanje pri
              izdelavi spletne trgovine, spletne strani, mobilne aplikacije ipd.
              Namen svetovanja je pomagati podjetjem najti programsko opremo in
              postopke digitalizacije, ki jim najbolj ustrezajo in so za njih
              tudi finančno najbolj ugodni.
            </p>
          </div>
          <div className="svgson">
            <Svetovanje />
          </div>
        </div>
      </div>
      <div className="storitve__storitev">
        <div className="flexson">
          <div className="svgson">
            <Podpora />
          </div>
          <div className="storitve__storitev--content">
            <h2>Pomoč in podpora</h2>
            <p>
              Zavod ZDPI nudi tudi pomoč in podporo podjetnikom pri upravljanju
              njihovih strani oz. poslovnih sistemov ter v primeru, da gre kaj
              narobe.
            </p>
          </div>
        </div>
      </div>
      <div className="storitve__storitev">
        <div className="flexson">
          <div className="storitve__storitev--content">
            <h2>Izdelava spletnih strani</h2>
            <p>
              Podejtnikom nudimo tudi izdelavo spletnih strani oz. spletnih
              trgovin. Pri izdelavi strani uporabljamo najsodobnejše tehnologije
              in pristope, kar prinaša številne prednosti, izmed katerih imajo
              najbolj pomembno vlogo odlična uporabniška izkušnja, boljša
              optimizacija strani za spletne brskalnike in popolna prilagoditev
              rešitev Vašim potrebam. Poleg tega Vam nudimo tudi podporo in
              pomoč pri uporabi naših digitalnih rešitev.
            </p>
          </div>
          <div className="svgson izdelava">
            <Izdelava />
          </div>
        </div>
      </div>
      <div className="storitve__storitev">
        <div className="flexson">
          <div className="svgson">
            <Dizajn />
          </div>
          <div className="storitve__storitev--content">
            <h2>Dizajn</h2>
            <p>
              Prvi vtis je zelo pomemben in to še posebej velja pri spletnih
              straneh. Dobro izdelana spletna stran odraža odnos in vrednote
              podjetja. Kot smo že omenili pri izdelavi spletnih strani, strmimo
              k popolni uporabniški izkušnji. Zelo pomemben del uporabniške
              izkušnje je zagotovo tudi dizajn. Da bi uporabniško izkušnjo
              maksimizirali, skrbimo da je dizajn všečen, funkcionalen in
              ergonomičen. Iz navedenih razlogov preferiramo t.i. minimalistični
              oz. "Clean design", ki se je v praksi izkazal za najbolj
              preglednega in funkcionalnega, prav tako pa je bil najbolj všečen.
              Seveda pa lahko izdelamo dizajn po meri, glede na prefernce
              strank.
            </p>
          </div>
        </div>
      </div>
      <div className="storitve__storitev">
        <div className="flexson">
          <div className="storitve__storitev--content seo">
            <h2>SEO / Marketing</h2>
            <p>
              Zavod Vam nudi tudi storitve povezane z marketingom. Gre za tri
              sklope storitev, izmed katerih so prve tržne analize. Ena izmed
              tržnih rasikav je analiza ključnih besed, kjer iščemo najbolj
              iskane nize na spletnih brskalnikih povezane z Vašimi produkti oz.
              storitvami. Druga je analiza ciljne publike, kjer preučimo
              obnašanje uporabnikov socialnih omrežji in na podlagi tega
              izberemo za Vas najbolj relevantno ciljno publiko. Tretja pa je
              analiza konkurence, kjer pregledamo aktivnost Vaše konkurence na
              spletu in preučimo področja, na katerih Vam lahko zagotovimo
              konkurenčno prednost. Drugi sklop storitev zajema SEO oz.
              optimizacijo Vaše strani za spletne brskalnike. Sledi še tretji
              sklop, ki zajema samo oglaševanje, pri čemer se osredotočamo na
              oglaševanje na socialnih omrežjih. Nudimo Vam tako izdelavo
              oglasov, kot tudi vodenje oglaševalske kampanje.
            </p>
          </div>
          <div className="svgson">
            <Marketing />
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ services }) => {
  return {
    services,
  };
};

export default connect(mapStateToProps, {})(StoritvePage);
