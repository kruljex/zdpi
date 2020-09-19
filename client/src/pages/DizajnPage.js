import React from 'react';
import '../sass/pages/redirected_page.scss';
import { Redirect } from 'react-router-dom';
import { selectService } from '../actions';
import { connect } from 'react-redux';

function DizajnPage(props) {
  if (window.location.pathname === '/dizajn/izdelavalogotipov') {
    props.selectService(4);
    return <Redirect to="/storitve" />;
  }

  return (
    <div className="redirectedPage">
      <h1>Dizajn / izdelava logotipov</h1>
      <p>
        Prvi vtis je zelo pomemben in to še posebej velja pri spletnih straneh.
        Dobro izdelana spletna stran odraža odnos in vrednote podjetja. Kot smo
        že omenili pri izdelavi spletnih strani, strmimo k popolni uporabniški
        izkušnji. Zelo pomemben del uporabniške izkušnje je zagotovo tudi
        dizajn. Da bi uporabniško izkušnjo maksimizirali, skrbimo da je dizajn
        všečen, funkcionalen in ergonomičen. Iz navedenih razlogov preferiramo
        t.i. minimalistični oz. "Clean design", ki se je v praksi izkazal za
        najbolj preglednega in funkcionalnega, prav tako pa je bil najbolj
        všečen. Seveda pa lahko izdelamo dizajn po meri, glede na prefernce
        strank.
      </p>
    </div>
  );
}

export default connect(null, { selectService })(DizajnPage);
