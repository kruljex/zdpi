import React from 'react';
import '../sass/pages/redirected_page.scss';
import { Redirect } from 'react-router-dom';
import { selectService } from '../actions';
import { connect } from 'react-redux';

function IzdelavaSpletnihStraniPage(props) {
  if (window.location.pathname === '/izdelavaspletnihstrani') {
    props.selectService(3);
    return <Redirect to="/storitve" />;
  }

  return (
    <div className="redirectedPage">
      <h1>Izdelava spletnih strani</h1>
      <p>
        Podejtnikom nudimo tudi izdelavo spletnih strani oz. spletnih trgovin.
        Pri izdelavi strani uporabljamo najsodobnejše tehnologije in pristope,
        kar prinaša številne prednosti, izmed katerih so najbolj pomembne
        odlična uporabniška izkušnja, boljša optimizacija strani za spletne
        brskalnike in popolna prilagoditev rešitev Vašim potrebam. Poleg tega
        Vam nudimo tudi podporo in pomoč pri uporabi naših rešitev.
      </p>
    </div>
  );
}

export default connect(null, { selectService })(IzdelavaSpletnihStraniPage);
