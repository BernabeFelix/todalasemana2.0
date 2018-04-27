import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  adminUrl,
  homeUrl,
  signInUrl,
  signUpUrl,
  superAdminUrl,
  emailActionHandlerUrl
} from '../routes';
import Auth from './Auth/Auth';
import Home from './Home/Home';
import CustomerAdmin from './CustomerAdmin/CustomerAdmin';
import SuperAdmin from './SuperAdmin/SuperAdmin';
import ActionHandler from './Auth/EmailActions/ActionHandler';

const Content = () => (
  <main className="main">
    <Switch>
      <Route exact path={homeUrl()} component={Home} />
      <Route path={signInUrl()} component={Auth} />
      <Route path={signUpUrl()} component={Auth} />
      <Route path={adminUrl()} component={CustomerAdmin} />
      <Route path={superAdminUrl()} component={SuperAdmin} />
      <Route path={emailActionHandlerUrl()} component={ActionHandler} />
    </Switch>
  </main>
);

export default Content;
