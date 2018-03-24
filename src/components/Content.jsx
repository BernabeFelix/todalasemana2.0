import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { aboutUrl, homeUrl, signInUrl, signUpUrl } from '../routes';
import Auth from './Auth/Auth';
import Home from './Home/Home';

const Content = () => (
  <main className="main">
    <Switch>
      <Route exact path={aboutUrl()} render={() => <h1>Im about</h1>} />
      <Route exact path={homeUrl()} render={Home} />
      <Route path={signInUrl()} render={Auth} />
      <Route path={signUpUrl()} render={Auth} />
    </Switch>
  </main>
);

export default Content;
