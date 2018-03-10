import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { aboutUrl, dayUrl, homeUrl } from '../routes';
import Home from './Home';

const Content = () => (
  <main className="main">
    <Switch>
      <Route path={aboutUrl} render={() => <h1>Im about</h1>} />
      <Route path={dayUrl} render={() => <div>Lunes!!</div>} />
      <Route exact path={homeUrl} render={Home} />
    </Switch>
  </main>
);

export default Content;
