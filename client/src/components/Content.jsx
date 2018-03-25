import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { adminUrl, homeUrl, signInUrl, signUpUrl } from '../routes';
import Admin from './CustomerAdmin/CustomerAdmin';
import Auth from './Auth/Auth';
import Home from './Home/Home';

const Content = () => (
  <main className="main">
    <Switch>
      <Route exact path={homeUrl()} component={Home} />
      <Route path={signInUrl()} component={Auth} />
      <Route path={signUpUrl()} component={Auth} />
      <Route path={adminUrl()} component={Admin} />
    </Switch>
  </main>
);

export default Content;
