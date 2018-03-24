import { Tab, Tabs } from 'material-ui';
import React from 'react';
import Login from './Login';

const Auth = () => (
  <div className="container">
    <div className="row">
      <div className="col-xs-12 col-sm-offset-3 col-sm-6">
        <Tabs className="auth-tabs text-center">
          <Tab label="Entrar">
            <Login />
          </Tab>
          <Tab label="Registrate" />
        </Tabs>
      </div>
    </div>
  </div>
);

export default Auth;
