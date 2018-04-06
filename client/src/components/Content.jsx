import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { adminUrl, homeUrl, signInUrl, signUpUrl } from '../routes';
import Auth from './Auth/Auth';
import Home from './Home/Home';
import AdminSelector from "./Admin/AdminSelector";

const Content = () => (
  <main className="main">
    <Switch>
      <Route exact path={homeUrl()} component={Home} />
      <Route path={signInUrl()} component={Auth} />
      <Route path={signUpUrl()} component={Auth} />
      <Route path={adminUrl()} component={AdminSelector} />
    </Switch>
  </main>
);

export default Content;
