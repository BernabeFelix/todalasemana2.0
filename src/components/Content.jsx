import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { aboutUrl, authUrl, homeUrl } from '../routes';
import Auth from './Auth/Auth';
import Home from './Home/Home';

const Content = () => (
  <main className="main">
    <Switch>
      <Route exact path={aboutUrl()} render={() => <h1>Im about</h1>} />
      <Route exact path={homeUrl()} render={Home} />
      <Route path={authUrl()} render={Auth} />
    </Switch>
  </main>
);

export default Content;
