import React, { useState, useEffect } from 'react';
import '../sass/pages/konfigurator_page.scss';
import '../sass/components/infoicon.scss';
import InfoIcon from '../components/InfoIcon';
import Label from '../components/Label';
import ProgressBar from '../components/ProgressBar';
import Loader from '../components/Loader';
import { Link } from 'react-router-dom';
import { sendData } from '../actions';
import { connect } from 'react-redux';
import * as EmailValidator from 'email-validator';

var intraval = null;

function KonfiguratorrPage(props) {
  const [dizajn, setdizajn] = useState(false);
  const [seo, setseo] = useState(false);
  const [stran, setstran] = useState(false);
  const [trgovina, settrgovina] = useState(false);
  const [dizajnval, setdizajnval] = useState('osnovni');
  const [logo, setlogo] = useState('osnovni');
  const [seoval, setseoval] = useState('osnovni');
  const [googleanalytics, setgoogleanalytics] = useState(false);
  const [fbpixel, setfbpixel] = useState(false);
  const [googlebusiness, setgooglebusiness] = useState(false);
  const [googlebusinessval, setgooglebusinessval] = useState('osnovni');
  const [izdelavaoglasa, setizdelavaoglasa] = useState(false);
  const [izdelavaoglasaval, setizdelavaoglasaval] = useState('osnovni');
  const [oglasevanje, setoglasevanje] = useState(false);
  const [cenaoglasevanja, setcenaoglasevanja] = useState(0);
  const [raziskavatrga, setraziskavatrga] = useState(false);
  const [ststrani, setststrani] = useState(1);
  const [stjezikov, setstjezikov] = useState(1);
  const [kontaktniobrazec, setkontaktniobrazec] = useState(false);
  const [koledar, setkoledar] = useState(false);
  const [vtisi, setvtisi] = useState(false);
  const [narocise, setnarocise] = useState(false);
  const [galerija, setgalerija] = useState(false);
  const [stream, setstream] = useState(false);
  const [cms, setcms] = useState(false);
  const [urejanjestrani, seturejanjestrani] = useState(false);
  const [urejanjekom, seturejanjekom] = useState(false);
  const [reg, setreg] = useState(false);
  const [fbglogin, setfbglogin] = useState(false);

  const [dizajnurl, setdizajnurl] = useState('');
  const [logourl, setlogourl] = useState('');
  const [seotext, setseotext] = useState('');
  const [showGA, setshowGA] = useState(false);
  const [showFBP, setshowFBP] = useState(false);
  const [showGB, setshowGB] = useState(false);
  const [showmarket, setshowmarket] = useState(false);
  const [showkontakt, setshowkontakt] = useState(false);
  const [showkoledar, setshowkoledar] = useState(false);
  const [showvtisi, setshowvtisi] = useState(false);
  const [shownarocilonovice, setshownarocilonovice] = useState(false);
  const [showgalerija, setshowgalerija] = useState(false);
  const [showstream, setshowstream] = useState(false);
  const [showblog, setshowblog] = useState(false);
  const [showurejanjestrani, setshowurejanjestrani] = useState(false);
  const [showurejanjekom, setshowurejanjekom] = useState(false);
  const [showreg, setshowreg] = useState(false);
  const [showfbg, setshowfbg] = useState(false);

  const [currentPage, setCurrentPage] = useState(0);
  const [loader, setloader] = useState(true);

  const [emailpovprasevanje, setemailpovprasevanje] = useState('');
  const [poslano, setposlano] = useState(false);
  const [poslanomsg, setposlanomsg] = useState('');
  const [jsonval, setjsonval] = useState(true);
  const [domena, setdomena] = useState(false);
  const [showdomena, setshowdomena] = useState(false);
  const [gostovanje, setgostovanje] = useState(false);
  const [showgostovanje, setshowgostovanje] = useState(false);

  const meseci = [
    'januarju',
    'februarju',
    'marcu',
    'aprilu',
    'maju',
    'juniju',
    'juliju',
    'avgustu',
    'septembru',
    'oktobru',
    'novembru',
    'decembru',
  ];

  const [cenastrani, setcenastrani] = useState(0);

  let i = 1;

  let statedata = {
    dizajn,
    seo,
    stran,
    trgovina,
    dizajnval,
    logo,
    seoval,
    googleanalytics,
    fbpixel,
    googlebusiness,
    googlebusinessval,
    izdelavaoglasa,
    izdelavaoglasaval,
    oglasevanje,
    cenaoglasevanja,
    raziskavatrga,
    ststrani,
    stjezikov,
    kontaktniobrazec,
    koledar,
    vtisi,
    narocise,
    galerija,
    stream,
    cms,
    urejanjestrani,
    urejanjekom,
    reg,
    fbglogin,
    cenastrani,
    domena,
    gostovanje,
  };

  const array = [
    kajPotrebujete(),
    dizajnDiv(),
    logoDiv(),
    seoDiv(),
    marketingDiv(),
    stranDiv1(),
    stranDiv2(),
    cenaDiv(),
  ];

  let arr = [
    fbpixel,
    raziskavatrga,
    kontaktniobrazec,
    koledar,
    vtisi,
    narocise,
    galerija,
    stream,
    cms,
    urejanjestrani,
    urejanjekom,
    reg,
    fbglogin,
    domena,
    gostovanje,
    oglasevanje,
  ];

  const arrcene = [
    50,
    150,
    60,
    350,
    90,
    30,
    60,
    150,
    350,
    200,
    150,
    250,
    130,
    15,
    40,
    cenaoglasevanja <= 50000 && cenaoglasevanja >= 0 ? cenaoglasevanja : 0,
  ];

  function sendDataOnClick() {
    const mail = EmailValidator.validate(emailpovprasevanje);
    if (mail) {
      setposlano(true);
      setjsonval(true);
      props.sendData(emailpovprasevanje, statedata);
    } else {
      setposlano(true);
      setposlanomsg('Napačen e-mail naslov');
      setjsonval(false);
    }
  }

  useEffect(() => {
    if (props.email.data) {
      if (props.email.data.success === 1) {
        setposlanomsg(props.email.data.msg);
        setjsonval(true);
      } else if (props.email.data.success === 0) {
        setposlanomsg(props.email.data.msg);
        setjsonval(false);
      }
    }
  }, [props.email]);

  const changeimg = (id, src1, src2, alt) => {
    let logo = document.getElementById(id);
    logo.alt = alt;
    if (i === 1) {
      logo.src = src1;
      i = 2;
    } else {
      logo.src = src2;
      i = 1;
    }
  };

  const checkInterval = () => {
    intraval = intraval !== null ? clearInterval(intraval) : intraval;
  };

  function calculate() {
    let num = 0;
    for (var a = 0; a < arr.length; a++) {
      if (arr[a]) {
        num += parseInt(arrcene[a]);
      }
    }
    let stranival = ststrani >= 1 && ststrani <= 10 ? parseInt(ststrani) : 1;
    let stjezikovval =
      stjezikov >= 1 && stjezikov <= 7 ? parseInt(stjezikov) : 1;
    let sum = stranival * 50 + (stjezikovval - 1) * 150;
    num += sum;
    if (dizajnval === 'osnovni') {
      num += 100;
    } else if (dizajnval === 'zahtevni') {
      num += 300;
    } else if (dizajnval === 'napredni') {
      num += 1000;
    }
    if (logo === 'osnovni') {
      num += 60;
    } else if (logo === 'napredni') {
      num += 150;
    }
    if (seo) {
      if (seoval === 'napredni') {
        num += 200;
      }
      if (googlebusiness) {
        if (googlebusinessval === 'osnovni') {
          num += 50;
        } else {
          num += 100;
        }
      }
    }
    if (izdelavaoglasa) {
      if (izdelavaoglasaval === 'osnovni') {
        num += 120;
      } else {
        num += 300;
      }
    }
    setcenastrani(cenastrani + num);
  }

  /*   useEffect(() => {
    if (cenastrani !== 0) {
      props.sendData('BELEZENJE@NIMAVEZE.SI', statedata);
    }
  }, [cenastrani]); */

  function cenaDiv() {
    let cena = cenastrani < 600 ? 600 : cenastrani;
    currentPage === 7 &&
      setTimeout(() => {
        setloader(false);
      }, 5000);
    return (
      <div className="konfigurator__container--infocena">
        <span className="konfigurator__container--title">
          Informativni izračun cene
        </span>
        {loader ? (
          <Loader />
        ) : (
          <>
            <p className="prvacena">
              Prvotna cena: <span>{cena * 1.45} €</span>
            </p>
            <p className="popust">
              Popust: {cena * 1.45 - cena} €{' '}
              <span>
                ({Math.round(((cena * 1.45 - cena) / (cena * 1.45)) * 100)}
                %)
              </span>
              <span className="popust__samo">
                *Popust velja samo v mesecu {meseci[new Date().getMonth()]}
              </span>
            </p>
            <p className="zadnjacena">
              Okvirna cena: <span>{cena} €</span>
            </p>
            <div className="posljipovprasevanje">
              {poslano ? (
                <p style={{ color: jsonval ? 'green' : '#cd0000' }}>
                  {poslanomsg}{' '}
                  {jsonval === false && (
                    <span className="popravi" onClick={() => setposlano(false)}>
                      Popravi
                    </span>
                  )}
                </p>
              ) : (
                <>
                  <input
                    type="email"
                    name="mail"
                    placeholder="E-mail naslov"
                    value={emailpovprasevanje}
                    onChange={(e) => setemailpovprasevanje(e.target.value)}
                  />
                  <button onClick={() => sendDataOnClick()}>
                    Pošlji povpraševanje
                  </button>
                </>
              )}
            </div>
            <p className="vec">
              Zgoraj navedna okvirna cena je samo informativnega značaja, saj je
              končna cena odvisna od dodatnih oziroma dopolnilnih želja strank.
              Za natačno končno ceno nas lahko kontaktirate preko e-mail
              naslova: <span>info@zdpi.si</span> ali pa nas pokličete na
              telefonsko številko: <span>068/821-221</span>
            </p>
          </>
        )}
      </div>
    );
  }

  function kajPotrebujete() {
    return (
      <div className="konfigurator__container--select">
        <span className="konfigurator__container--select-title">
          Kaj ponujamo
        </span>
        <Label
          ime="dizajn"
          span="Dizajn"
          state={true}
          setstate={() => setdizajn(!dizajn)}
        />
        <Label
          ime="seo"
          span="SEO / Marketing"
          state={true}
          setstate={() => setseo(!seo)}
        />
        <Label
          ime="stran"
          span="Spletna stran"
          state={true}
          setstate={() => setstran(!stran)}
        />
        <Label
          ime="trgovina"
          span="Spletna trgovina (v pripravi)"
          state={false}
          setstate={() => settrgovina(!trgovina)}
        />
        <label htmlFor="aplikacija">
          <input type="checkbox" name="aplikacija" />
          <span></span>Aplikacija (v pripravi)
        </label>
      </div>
    );
  }

  function dizajnDiv() {
    return (
      <div className="konfigurator__container--dizajn">
        <span className="konfigurator__container--title">Dizajn</span>
        <Label
          ime="osnovnidizajn"
          span="Osnovni"
          type="radio"
          name="dizajnval"
          state={dizajnval === 'osnovni' ? true : false}
          primer={true}
          setstate={() => setdizajnval('osnovni')}
          pokaziprimerState={() => setdizajnurl('/gifs/osnovni500.gif')}
        />
        {dizajnurl === '/gifs/osnovni500.gif' && (
          <p className="konfigurator__container--infotext konfigurator__container--showgif">
            <img src="/gifs/osnovni500.gif" alt="osnovni dizajn" />
            <span
              className="konfigurator__container--dizajn-X"
              onClick={() => setdizajnurl('')}
            >
              zapri
            </span>
          </p>
        )}
        <Label
          ime="zahtevnidizajn"
          span="Zahtevni"
          type="radio"
          name="dizajnval"
          state={dizajnval === 'zahtevni' ? true : false}
          setstate={() => setdizajnval('zahtevni')}
          primer={true}
          pokaziprimerState={() => setdizajnurl('/gifs/zahtevni500.gif')}
        />
        {dizajnurl === '/gifs/zahtevni500.gif' && (
          <p className="konfigurator__container--infotext konfigurator__container--showgif">
            <img src="/gifs/zahtevni500.gif" alt="zahtevni dizajn" />
            <span
              className="konfigurator__container--dizajn-X"
              onClick={() => setdizajnurl('')}
            >
              zapri
            </span>
          </p>
        )}
        <Label
          ime="naprednidizajn"
          span="Napredni"
          type="radio"
          name="dizajnval"
          state={dizajnval === 'napredni' ? true : false}
          setstate={() => setdizajnval('napredni')}
          primer={true}
          pokaziprimerState={() => setdizajnurl('/gifs/napredni500.gif')}
        />
        {dizajnurl === '/gifs/napredni500.gif' && (
          <p className="konfigurator__container--infotext konfigurator__container--showgif">
            <img src="/gifs/napredni500.gif" alt="napredni dizajn" />
            <span
              className="konfigurator__container--dizajn-X"
              onClick={() => setdizajnurl('')}
            >
              zapri
            </span>
          </p>
        )}
      </div>
    );
  }

  function logoDiv() {
    return (
      <div className="konfigurator__container--logo">
        <span className="konfigurator__container--title">Logotip</span>
        <Label
          ime="osnovnilogo"
          span="Osnovni"
          type="radio"
          name="logotip"
          state={logo === 'osnovni' ? true : false}
          setstate={() => setlogo('osnovni')}
          logofuncion={
            <p
              className="konfigurator__container__pokaziprimer"
              onClick={() => {
                setlogourl('/logo/osnovni1.png');
                checkInterval();
                intraval = setInterval(
                  () =>
                    changeimg(
                      'logoid',
                      '/logo/osnovni1.png',
                      '/logo/osnovni2.png',
                      'osnovni logo'
                    ),
                  1500
                );
              }}
            >
              Pokaži primer
            </p>
          }
        />
        {logourl === '/logo/osnovni1.png' && (
          <p className="konfigurator__container--infotext konfigurator__container--logoanimate">
            <img id="logoid" src="/logo/osnovni1.png" alt="Osnovni logo 1" />
            <span
              className="konfigurator__container--dizajn-X"
              onClick={() => {
                setlogourl('');
                window.clearInterval(intraval);
              }}
            >
              zapri
            </span>
          </p>
        )}
        <Label
          ime="naprednilogo"
          span="Napredni"
          type="radio"
          name="logotip"
          state={logo === 'napredni' ? true : false}
          setstate={() => setlogo('napredni')}
          logofuncion={
            <p
              className="konfigurator__container__pokaziprimer"
              onClick={() => {
                setlogourl('/logo/napredni1.png');
                checkInterval();
                intraval = setInterval(
                  () =>
                    changeimg(
                      'logonapredniid',
                      '/logo/napredni1.png',
                      '/logo/napredni2.png',
                      'napredni logo'
                    ),
                  1500
                );
              }}
            >
              Pokaži primer
            </p>
          }
        />
        {logourl === '/logo/napredni1.png' && (
          <p className="konfigurator__container--infotext konfigurator__container--logoanimate">
            <img
              id="logonapredniid"
              src="/logo/napredni1.png"
              alt="napredni logo"
            />
            <span
              className="konfigurator__container--dizajn-X"
              onClick={() => {
                setlogourl('');
                window.clearInterval(intraval);
              }}
            >
              zapri
            </span>
          </p>
        )}
        <Label
          ime="logone"
          span="Ne potrebujem logotipa"
          type="radio"
          name="logotip"
          state={logo === 'logone' ? true : false}
          setstate={() => setlogo('logone')}
        />
      </div>
    );
  }

  function seoDiv() {
    return (
      <div className="konfigurator__container--seo">
        <span className="konfigurator__container--title">SEO</span>
        <Label
          ime="osnovniseo"
          type="radio"
          name="seo"
          span="Osnovni"
          state={seoval === 'osnovni' ? true : false}
          setstate={() => setseoval('osnovni')}
          logofuncion={
            <div className="infoicon" onClick={() => setseotext('osnovni')}>
              <InfoIcon />
            </div>
          }
        />
        {seotext === 'osnovni' && (
          <p className="konfigurator__container--infotext">
            Vsako stran tekom izdelave optimiziramo v skladu z "Best Practices"
            oz. najnovejšimi napotki za optimizacijo. Paket osnovne optimizacije
            Vam za razliko od napredne nudi omejeno število ključnih besed in
            omejeno število uporabljenih značk za brskalnike in robote, kar ne
            zagotavlja najvišje uvrstitve med iskanimi nizi spletnih iskalnikov.
            <span
              className="konfigurator__container--dizajn-X"
              onClick={() => setseotext('')}
            >
              zapri
            </span>
          </p>
        )}
        <Label
          ime="napredniseo"
          type="radio"
          name="seo"
          span="Napredni"
          state={seoval === 'napredni' ? true : false}
          setstate={() => setseoval('napredni')}
          logofuncion={
            <div className="infoicon" onClick={() => setseotext('napredni')}>
              <InfoIcon />
            </div>
          }
        />
        {seotext === 'napredni' && (
          <p className="konfigurator__container--infotext">
            Napredna optimizacija temelji na uporabi večih, skrbno izbranih
            ključnih besed in na uporabi t.i. "Structured Data" značk, kar so
            značke, ki spletnim iskalnikom omogočajo boljše razumevanje vsebine
            Vaše strani. Poleg tega omogočimo tudi prikaz AMP datotek, ki so
            iskalnikom prav tako bolj razumljive in jih tudi lažje prikažejo
            znotraj iskanih nizov.
            <span
              className="konfigurator__container--dizajn-X"
              onClick={() => setseotext('')}
            >
              zapri
            </span>
          </p>
        )}
      </div>
    );
  }

  function marketingDiv() {
    return (
      <div className="konfigurator__container--marketing">
        <span className="konfigurator__container--title">Marketing</span>
        <Label
          ime="googleanalytics"
          state={googleanalytics}
          setstate={() => setgoogleanalytics(!googleanalytics)}
          span="Google Analytics"
          logofuncion={
            <div className="infoicon infoicon2" onClick={() => setshowGA(true)}>
              <InfoIcon />
            </div>
          }
        />
        {showGA && (
          <p className="konfigurator__container--infotext">
            Google Analytics je orodje za spremljanje prometa na Vaši spletni
            strani. S pomočjo tega orodja lahko spremljate kdo je obiskal Vašo
            spletno stran, kje je stran našel, iz kakšne naprave se je povezal
            itd. Podatki, ki jih s pomočjo Google Analytics-a pridobite pa Vam
            lahko služijo kot vir informacij za sestavo strategije za digitalni
            marketing.
            <span
              className="konfigurator__container--dizajn-X"
              onClick={() => setshowGA('')}
            >
              zapri
            </span>
          </p>
        )}
        <Label
          ime="fbpixel"
          state={fbpixel}
          setstate={() => setfbpixel(!fbpixel)}
          span="Facebook Pixel"
          logofuncion={
            <div
              className="infoicon infoicon2"
              onClick={() => setshowFBP(true)}
            >
              <InfoIcon />
            </div>
          }
        />
        {showFBP && (
          <p className="konfigurator__container--infotext">
            Facebook pixel je tako kot Google Analztics orodje za spremljanje
            prometa spletne strani. Za razliko od Google analytics se poveže z
            Vašim Facebook računom. Največja prednost Pixel-a je lažja
            integracija s Facebook stranjo vašega podjetja, kar Vam olajša
            nastavitve ciljne skupine pri oglaševanju na socialnih omrežjih
            Facebook in Instagram.
            <span
              className="konfigurator__container--dizajn-X"
              onClick={() => setshowFBP('')}
            >
              zapri
            </span>
          </p>
        )}
        <label htmlFor="googlebusiness">
          <input
            type="checkbox"
            name="googlebusiness"
            id="googlebusiness"
            checked={googlebusiness}
            onChange={() => setgooglebusiness(!googlebusiness)}
          />
          <span></span>Google Business
          <div className="infoicon infoicon2" onClick={() => setshowGB(true)}>
            <InfoIcon />
          </div>
          {googlebusiness && (
            <div className="twolabelsinsidelabel">
              <label
                htmlFor="googlebusinessvalosnovni"
                className="labelinsidelabel"
              >
                <input
                  type="radio"
                  name="googlebusinessval"
                  id="googlebusinessvalosnovni"
                  checked={googlebusinessval === 'osnovni' ? true : false}
                  onChange={() => setgooglebusinessval('osnovni')}
                />
                <span></span>Osnovni
              </label>
              <label
                htmlFor="googlebusinessnapredni"
                className="labelinsidelabel"
              >
                <input
                  type="radio"
                  name="googlebusinessval"
                  id="googlebusinessnapredni"
                  onChange={() => setgooglebusinessval('napredni')}
                />
                <span></span>Napredni
              </label>
            </div>
          )}
        </label>
        {showGB && (
          <p className="konfigurator__container--infotext info2">
            Google Business je enostavno orodje, s pomočjo katerega ustvarite
            svojo spletno vizitko, ki se nato prikazuje uporabnikom Googlovega
            iskalnika. Google Business zajema osnovne podatke o vašem podjetju,
            kot so naslov, telefon, kontakt, dejavnost, delovni čas, itd.
            Pomembno je tudi to, da Google Business vsebuje tudi naslov Vaše
            spletne strani, saj se s tem lahko bistveno povzpnete po Googlovi
            lestvici zadetkov za določen iskani niz.
            <br />
            Osnovni paket Google Bussiness zajema vnos osnovnih podatkov, kot so
            telefonska številka, naslov, email in spletna stran. Napredni paket
            pa zajema nastavitev popolnega Google Business profila.
            <span
              className="konfigurator__container--dizajn-X"
              onClick={() => setshowGB(false)}
            >
              zapri
            </span>
          </p>
        )}
        <label htmlFor="izdelavaoglasa">
          <input
            type="checkbox"
            name="izdelavaoglasa"
            id="izdelavaoglasa"
            checked={izdelavaoglasa}
            onChange={() => setizdelavaoglasa(!izdelavaoglasa)}
          />
          <span></span>Izdelava oglasa
          {izdelavaoglasa && (
            <div className="twolabelsinsidelabel">
              <label
                htmlFor="izdelavaoglasaovnovni"
                className="labelinsidelabel"
              >
                <input
                  type="radio"
                  name="izdelavaoglasaval"
                  id="izdelavaoglasaovnovni"
                  checked={izdelavaoglasaval === 'osnovni' ? true : false}
                  onChange={() => setizdelavaoglasaval('osnovni')}
                />
                <span></span>Osnovni
              </label>
              <label
                htmlFor="izdelavaoglasanapredni"
                className="labelinsidelabel"
              >
                <input
                  type="radio"
                  name="izdelavaoglasaval"
                  id="izdelavaoglasanapredni"
                  onChange={() => setizdelavaoglasaval('napredni')}
                />
                <span></span>Napredni
              </label>
            </div>
          )}
        </label>
        {izdelavaoglasa && izdelavaoglasaval === 'osnovni' ? (
          <p className="konfigurator__container--infotext konfigurator__container--showgif">
            <img src="/images/oglas-osnovni.png" alt="osnovni oglas" />
            <span
              className="konfigurator__container--dizajn-X"
              onClick={() => setizdelavaoglasa(false)}
            >
              zapri
            </span>
          </p>
        ) : izdelavaoglasa && izdelavaoglasaval === 'napredni' ? (
          <p className="konfigurator__container--infotext konfigurator__container--showgif">
            <img src="/images/oglas-napredni.png" alt="osnovni oglas" />
            <span
              className="konfigurator__container--dizajn-X"
              onClick={() => setizdelavaoglasa(false)}
            >
              zapri
            </span>
          </p>
        ) : null}
        <Label
          ime="oglasevanje"
          span="Facebook, Instagram in/ali Google oglaševanje"
          state={oglasevanje}
          setstate={() => setoglasevanje(!oglasevanje)}
          logofuncion={
            oglasevanje ? (
              <div className="vlozekvoglasevanje">
                <p>Željen vložek v oglaševanje:</p>
                <input
                  type="number"
                  id="cenanumb"
                  value={cenaoglasevanja}
                  onChange={(e) => setcenaoglasevanja(e.target.value)}
                />
                &nbsp; <em>€</em>
              </div>
            ) : null
          }
        />
        <Label
          ime="raziskavatrga"
          span="Raziskava trga"
          state={raziskavatrga}
          setstate={() => setraziskavatrga(!raziskavatrga)}
          logofuncion={
            <div
              className="infoicon infoicon2"
              onClick={() => setshowmarket(true)}
            >
              <InfoIcon />
            </div>
          }
        />
        {showmarket && (
          <p className="konfigurator__container--infotext">
            Raziskava trga je poleg analitičnih orodij najbolj pomemben del pri
            pripravi strategije marketinga. Raziskava zajema analizo Vaše ciljne
            skupine na socialnih omrežjih, analizo digitalnih aktivnosti Vaše
            konkurence in analizo za Vas relevantnih ključnih besed. Rezultate
            analiz strnemo v poročilo in izdelamo osnovno marketinško
            strategijo.
            <span
              className="konfigurator__container--dizajn-X"
              onClick={() => setshowmarket('')}
            >
              zapri
            </span>
          </p>
        )}
      </div>
    );
  }

  function stranDiv1() {
    return (
      <div className="konfigurator__container--spletnastran">
        <span className="konfigurator__container--title">
          Izdelava spletne strani (1/2)
        </span>
        <div className="konfigurator__container--numbdiv">
          Število strani/podstrani: &nbsp;
          <input
            type="number"
            id="ststrani"
            value={ststrani}
            onChange={(e) => setststrani(e.target.value)}
          />
        </div>
        <div className="konfigurator__container--numbdiv">
          Število jezikov: &nbsp;
          <input
            type="number"
            id="stjezikov"
            value={stjezikov}
            onChange={(e) => setstjezikov(e.target.value)}
          />
        </div>
        <Label
          ime="kontaktniobrazec"
          state={kontaktniobrazec}
          setstate={() => setkontaktniobrazec(!kontaktniobrazec)}
          span="Kontaktni obrazec"
          logofuncion={
            <div
              className="infoicon infoicon3"
              onClick={() => setshowkontakt(true)}
            >
              <InfoIcon />
            </div>
          }
        />
        {showkontakt && (
          <p className="konfigurator__container--infotext infotextsmall">
            Gre za obrazec, s pomočjo katerega Vas lahko Vaše stranke
            kontaktirajo. Prilagodimo ga lahko tako, da od strank pridobite
            željene podatke (npr. telefonska številka, email, ...).
            <span
              className="konfigurator__container--dizajn-X"
              onClick={() => setshowkontakt('')}
            >
              zapri
            </span>
          </p>
        )}
        <Label
          ime="koledar"
          state={koledar}
          setstate={() => setkoledar(!koledar)}
          span="Koledar"
          logofuncion={
            <div className="infoicon" onClick={() => setshowkoledar(true)}>
              <InfoIcon />
            </div>
          }
        />
        {showkoledar && (
          <p className="konfigurator__container--infotext infotextsmall">
            Po naročilu Vam izdelamo koledar, kjer so prikazane Vaše proste in
            zasedene ure in s pomočjo katerega se lahko Vaše stranke naročijo
            oz. ustvarijo rezervacijo.
            <span
              className="konfigurator__container--dizajn-X"
              onClick={() => setshowkoledar('')}
            >
              zapri
            </span>
          </p>
        )}
        <Label
          ime="vtisi"
          state={vtisi}
          setstate={() => setvtisi(!vtisi)}
          span="Vtisi"
          logofuncion={
            <div className="infoicon" onClick={() => setshowvtisi(true)}>
              <InfoIcon />
            </div>
          }
        />
        {showvtisi && (
          <p className="konfigurator__container--infotext infotextsmall">
            Gre za obrazec, kjer lahko stranke podajo svoje mnenje o Vaših
            izdelkih oz. storitvah. Podano mnenje lahko najprej preverite,
            preden se objavi na spletno stran.
            <span
              className="konfigurator__container--dizajn-X"
              onClick={() => setshowvtisi('')}
            >
              zapri
            </span>
          </p>
        )}
        <Label
          ime="narocise"
          state={narocise}
          setstate={() => setnarocise(!narocise)}
          span="Naročilo na novice"
          logofuncion={
            <div
              className="infoicon infoicon3"
              onClick={() => setshownarocilonovice(true)}
            >
              <InfoIcon />
            </div>
          }
        />
        {shownarocilonovice && (
          <p className="konfigurator__container--infotext infotextsmall">
            Gre za preprost način kako pridobiti e-mail naslov Vaših strank za
            sprotno obveščanje o novostih in ugodnostih vaših izdelkov in
            storitev.
            <span
              className="konfigurator__container--dizajn-X"
              onClick={() => setshownarocilonovice('')}
            >
              zapri
            </span>
          </p>
        )}
        <Label
          ime="galerija"
          state={galerija}
          setstate={() => setgalerija(!galerija)}
          span="Galerija"
          logofuncion={
            <div className="infoicon" onClick={() => setshowgalerija(true)}>
              <InfoIcon />
            </div>
          }
        />
        {showgalerija && (
          <p className="konfigurator__container--infotext infotextsmall">
            Gre za vmesnik s pomočjo katerega lahko nalagate ali brišete slike
            iz galerije na Vaši strani.
            <span
              className="konfigurator__container--dizajn-X"
              onClick={() => setshowgalerija('')}
            >
              zapri
            </span>
          </p>
        )}
        <Label
          ime="stream"
          state={stream}
          span="Progresivno streamanje"
          setstate={() => setstream(!stream)}
          logofuncion={
            <div
              className="infoicon infoicon5"
              onClick={() => setshowstream(true)}
            >
              <InfoIcon />
            </div>
          }
        />
        {showstream && (
          <p className="konfigurator__container--infotext">
            To je posebna oblika prenosa podatkov, ki se uporabi pri prenosu
            velikih datotek ali pa datotek, ki jih ne prenašate v kosu.
            Najpogosteje se uporablja pri prenosu video-posnetkov, saj se tako
            posnetki predvajajo hitreje in uporabnik porabi manj podatkov.
            <span
              className="konfigurator__container--dizajn-X"
              onClick={() => setshowstream('')}
            >
              zapri
            </span>
          </p>
        )}
      </div>
    );
  }

  function stranDiv2() {
    return (
      <div className="konfigurator__container--spletnastran">
        <span className="konfigurator__container--title">
          Izdelava spletne strani (2/2)
        </span>
        <Label
          ime="cms"
          state={cms}
          setstate={() => setcms(!cms)}
          span="Blog / članki"
          logofuncion={
            <div
              className="infoicon infoicon2"
              onClick={() => setshowblog(true)}
            >
              <InfoIcon />
            </div>
          }
        />
        {showblog && (
          <p className="konfigurator__container--infotext infotextsmall">
            Gre za spletno stran, kamor lahko sami dodajate vsebino oz. jo
            spreminjate in brišete. V kolikor želite, Vam lahko bralci tudi
            komentirajo vaše objave.
            <span
              className="konfigurator__container--dizajn-X"
              onClick={() => setshowblog('')}
            >
              zapri
            </span>
          </p>
        )}
        <Label
          ime="urejanjestrani"
          state={urejanjestrani}
          setstate={() => seturejanjestrani(!urejanjestrani)}
          span="Urejanje strani"
          logofuncion={
            <div
              className="infoicon infoicon2"
              onClick={() => setshowurejanjestrani(true)}
            >
              <InfoIcon />
            </div>
          }
        />
        {showurejanjestrani && (
          <p className="konfigurator__container--infotext infotextsmall">
            Urejanje vsebine na fiksnih straneh, kot so O nas, Kontakt,
            Storitve, itd. Vsakršno urejanje poteka preko po meri izdelanega
            uporabniškega vmesnika, ki Vam ga prilagodimo glede na Vaše potrebe.
            <span
              className="konfigurator__container--dizajn-X"
              onClick={() => setshowurejanjestrani('')}
            >
              zapri
            </span>
          </p>
        )}
        <Label
          ime="urejanjekom"
          span="Urejanje komentarjev"
          state={urejanjekom}
          setstate={() => seturejanjekom(!urejanjekom)}
          logofuncion={
            <div
              className="infoicon infoicon5"
              onClick={() => setshowurejanjekom(true)}
            >
              <InfoIcon />
            </div>
          }
        />

        {showurejanjekom && (
          <p className="konfigurator__container--infotext">
            Gre za vmesnik, s pomočjo katerega lahko urejate komentarje strank
            na Vaši spletni strani. Ta vmesnik pride v poštev predvsem takrat,
            ko lahko uporabniki prosto komentirajo brez potrebe Vaše predhodne
            odobritve komentarja.
            <span
              className="konfigurator__container--dizajn-X"
              onClick={() => setshowurejanjekom('')}
            >
              zapri
            </span>
          </p>
        )}
        <Label
          ime="reg"
          state={reg}
          setstate={() => setreg(!reg)}
          span="Registracija uporabnikov"
          logofuncion={
            <div
              className="infoicon infoicon5"
              onClick={() => setshowreg(true)}
            >
              <InfoIcon />
            </div>
          }
        />
        {showreg && (
          <p className="konfigurator__container--infotext infotextsmall">
            Gre za opcijo, za katero se lahko odločite, v kolikor želite
            nekatere vsebine omejiti širši javnosti in jo nuditi zgolj
            prijavljenim uporabnikom.
            <span
              className="konfigurator__container--dizajn-X"
              onClick={() => setshowreg('')}
            >
              zapri
            </span>
          </p>
        )}
        <Label
          ime="fbglogin"
          state={fbglogin}
          setstate={() => setfbglogin(!fbglogin)}
          span="Prijava s Facebook in Google računom"
          logofuncion={
            <div
              className="infoicon infoicon6 infoiconmobile500"
              onClick={() => setshowfbg(true)}
            >
              <InfoIcon />
            </div>
          }
        />
        {showfbg && (
          <p className="konfigurator__container--infotext infotextsmall">
            To je način registracije, ki temelji na uporabi Google in/ali
            Facebook računa. Gre za uporabnikom bolj preprost način prijave, kot
            je registracija, saj se prijavijo z že obstoječim računom.
            <span
              className="konfigurator__container--dizajn-X"
              onClick={() => setshowfbg('')}
            >
              zapri
            </span>
          </p>
        )}
        <Label
          ime="domena"
          state={domena}
          setstate={() => setdomena(!domena)}
          span="Domena"
          logofuncion={
            <div className="infoicon" onClick={() => setshowdomena(true)}>
              <InfoIcon />
            </div>
          }
        />
        {showdomena && (
          <p className="konfigurator__container--infotext">
            Domena je del spletnega naslova in predstavlja unikaten naslov preko
            katerega uporabniki dostopajo do vaše spletne strani. To si lahko
            zelo preprosto predstavljate kot domač poštni naslov: če ga ne bi
            imeli, ne bi mogli prejemati pošte. Če pa nimate svoje domene, v
            praksi ne morete imeti svoje spletne strani in nanjo privabiti
            obiskovalcev
            <span
              className="konfigurator__container--dizajn-X"
              onClick={() => setshowdomena(false)}
            >
              zapri
            </span>
          </p>
        )}
        <Label
          ime="gostovanje"
          state={gostovanje}
          setstate={() => setgostovanje(!gostovanje)}
          span="Gostovanje"
          logofuncion={
            <div
              className="infoicon infoicon7"
              onClick={() => setshowgostovanje(true)}
            >
              <InfoIcon />
            </div>
          }
        />
        {showgostovanje && (
          <p className="konfigurator__container--infotext infotextsmall">
            Gostovanje spletnih strani je najem prostora na spletnem strežniku,
            ki ima zagotovljeno 24-urno delovanje in nemoten dostop do
            svetovnega spleta.
            <span
              className="konfigurator__container--dizajn-X"
              onClick={() => setshowgostovanje(false)}
            >
              zapri
            </span>
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="konfigurator">
      <div className="konfigurator__title">
        <h2>
          <span>Konfigurator</span>
          <span> cene</span>
        </h2>
        <p>
          S pomočjo precizno izdelanega konfiguratorja si v treh minutah
          izračunajte infomativno ceno vašega projekta.
        </p>
        <span className="click-here">
          Za več informacij nas lahko kontaktirate{' '}
          <Link to="/kontakt">
            <span>tukaj</span>
          </Link>
        </span>
      </div>
      <div className="konfigurator__container">
        <ProgressBar current={currentPage} maxPage={5} />
        {array[currentPage]}
        <div className="konfigurator__container--btn">
          {currentPage >= 1 && currentPage <= 6 && (
            <button
              onClick={() => {
                setCurrentPage(currentPage - 1);
                checkInterval();
              }}
            >
              Nazaj
            </button>
          )}
          {currentPage <= 6 && (
            <button
              onClick={() => {
                setCurrentPage(currentPage + 1);
                checkInterval();
                array.length - 2 === currentPage && calculate();
              }}
              className={currentPage === 0 ? 'btnRight' : 'btnbtn'}
            >
              Naprej
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ email }) => {
  return {
    email,
  };
};

export default connect(mapStateToProps, { sendData })(KonfiguratorrPage);
