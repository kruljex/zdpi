import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './sass/app_base.scss';

import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import KonfiguratorPage from './pages/KonfiguratorPage';
import StoritvePage from './pages/StoritvePage';
import PovezavePage from './pages/PovezavePage';
import SinglePovezavePage from './pages/SinglePovezavePage';
import Footer from './components/Footer';
import KontaktPage from './pages/KontaktPage';
import IzdelavaSpletnihStraniPage from './pages/IzdelavaSpletnihStraniPage';
import MarketingPage from './pages/MarketingPage';
import DizajnPage from './pages/DizajnPage';
import DefaultPage from './pages/DefaultPage';
import ScrollToTop from 'react-router-scroll-top';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/storitve" component={StoritvePage} />
          <Route path="/konfigurator" component={KonfiguratorPage} />
          <Route path="/povezave" exact component={PovezavePage} />
          <Route path="/povezave/:ID" exact component={SinglePovezavePage} />
          <Route path="/kontakt" component={KontaktPage} />
          <Route
            path="/izdelavaspletnihstrani"
            component={IzdelavaSpletnihStraniPage}
          />
          <Route path="/seo_marketing" component={MarketingPage} />
          <Route path="/dizajn/izdelavalogotipov" component={DizajnPage} />
          <Route component={DefaultPage} />
        </Switch>
      </ScrollToTop>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
