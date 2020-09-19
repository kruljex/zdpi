import React from 'react';
import '../sass/pages/home_page.scss';
import {
  Izdelava,
  Podpora,
  Izobrazevanje,
  Svetovanje,
  Dizajn,
  Marketing,
} from '../components/svgs';
import { selectService } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function HomePage(props) {
  return (
    <div className="home_page">
      <div className="home_page__title">
        <h1>
          Zavod za izobraževanje in podporo malim in srednje velikim podjetjem
          na področju digitalizacije
        </h1>
      </div>
      <div className="home_page__PVV">
        <div className="home_page__PVV--1">
          <span className="home_page__PVV--h2">POSLANSTVO</span>
          <p>
            Poslanstvo Zavoda za izobraževanje in podporo malim in srednje
            velikim podjetjem na področju digitalizacije je naučiti mala in
            srednje velika podjetja digitalizirati svoj poslovni model in
            ustvariti digitalno identiteto ter jim nuditi pomoč in podporo na
            vsakem koraku. <br></br>
            <br /> Z našo pomočjo podjetja dosegajo večjo konkurenčnost,
            postanejo bolj prepoznavna, predvsem pa se jim poviša njihova dodana
            vrednost.
          </p>
        </div>
        <div className="home_page__PVV--2">
          <span className="home_page__PVV--h2">VIZIJA</span>
          <p>
            Vzpodbuditi in omogočiti digitalno transformacijo malim in srednje
            velikim podjetjem ter le-tem narediti sodobne programske sisteme
            bolj dostopne.
          </p>
        </div>
        <div className="home_page__PVV--3">
          <span className="home_page__V--h2">VREDNOTE</span>
          <div className="home_page__V--container">
            <div>
              <span>Inovativnost in kreativnost</span>
              <p>
                Pri našem delu uporabljamo najsodobnješe in najučinkovitejše
                programske tehnologije, kar se odraža v boljši uporabniški
                izkušnji, večji odzivnosti programskih sistemov in stroškovno
                ugodni programski rešitvi.
              </p>
            </div>
            <div>
              <span>Solidarnost</span>
              <p>
                Prizadevamo si, da sodobne tehnologije, ki jih uporabljajo
                velika podjetja, postanejo na voljo tudi malim in srednje
                velikim podjetjem. Zato podjetjem pomagamo izbrati rešitve, ki
                so cenovno bolj dostopne in njihovo vzdrževanje prinaša bistveno
                nižje stroške. Podjetja tudi izobražujemo v smeri večje
                neodvisnosti od zahtevnih programskih rešitev.
              </p>
            </div>
            <div>
              <span>Zanesljivost</span>
              <p>
                Vedno smo na voljo vsem, ki potrebujejo pomoč ali nasvet pri
                digitalni transformaciji poslovnega modela. Strmimo k čim
                večjemu zadovoljstvu naših strank ter k čim hitrejšemu odzivu iz
                naše strani.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="home_page__services">
        <span className="home_page__services--title">Kaj vam nudimo?</span>
        <div className="home_page__services--content">
          <Link to="/storitve">
            <div onClick={() => props.selectService(0)}>
              <Izobrazevanje />
              <span>Izobraževanje</span>
            </div>
          </Link>
          <Link to="/storitve">
            <div onClick={() => props.selectService(1)}>
              <Svetovanje />
              <span>Svetovanje</span>
            </div>
          </Link>
          <Link to="/storitve">
            <div onClick={() => props.selectService(2)}>
              <Podpora />
              <span>Pomoč in podpora</span>
            </div>
          </Link>
          <Link to="/storitve">
            <div onClick={() => props.selectService(3)}>
              <Izdelava />
              <span>
                Izdelava spletnih <br /> strani
              </span>
            </div>
          </Link>
          <Link to="/storitve">
            <div onClick={() => props.selectService(4)}>
              <Dizajn />
              <span>Dizajn</span>
            </div>
          </Link>
          <Link to="/storitve">
            <div onClick={() => props.selectService(5)}>
              <Marketing />
              <span>SEO / Marketing</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default connect(null, { selectService })(HomePage);
