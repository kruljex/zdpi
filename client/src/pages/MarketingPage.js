import React from 'react';
import '../sass/pages/redirected_page.scss';
import { Redirect } from 'react-router-dom';
import { selectService } from '../actions';
import { connect } from 'react-redux';

function MarketingPage(props) {
  if (window.location.pathname === '/seo_marketing') {
    props.selectService(5);
    return <Redirect to="/storitve" />;
  }

  return (
    <div className="redirectedPage">
      <h1>SEO / Marketing</h1>
      <p>
        Zavod Vam nudi tudi storitve povezane z marketingom. Gre za 3 sklope
        storitev, izmed katerih prve so Tržne analize. Ena izmed tržnih rasikav
        je analiza ključnih besed, kjer iščemo najbolj iskane nize na spletnih
        brskalnikih povezane z Vašimi produkti oz. storitvami. Druga je analiza
        ciljne publike, kjer preučimo obnašanje uporabnikov socialnih omrežji in
        na podlagi tega izberemo za Vas najbolj relevantno ciljno publiko.
        Tretja pa je analiza konkurence, kjer pregledamo aktivnost Vaše
        konkurence na spletu in preučimo področja, na katerih Vam lahko
        zagotovimo konkurenčno prednost. 2. Sklop storitev zajema SEO oz.
        optimizacijo Vaše strani za spletne brskalnike. ... 3. sklop pa zajema
        samo oglaševanje, pričemer se osredotočamo na oglaševanje na socialnih
        omrežjih. Nudimo Vam tako izdelavo oglasov, kot udi vodenje oglaševalske
        kampanje na S.O.
      </p>
    </div>
  );
}

export default connect(null, { selectService })(MarketingPage);
