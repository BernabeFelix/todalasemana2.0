import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { aboutUrl, homeUrl } from '../routes';
import Home from './Home/Home';

const Content = () => (
  <main className="main">
    <Switch>
      <Route path={aboutUrl()} render={() => <h1>Im about</h1>} />
      <Route exact path={homeUrl()} render={Home} />
    </Switch>
  </main>
);

export default Content;
