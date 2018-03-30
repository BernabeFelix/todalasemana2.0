import { Tab, Tabs, Paper } from 'material-ui';
import React from 'react';
import Login from './Login';
import SignUp from './SignUp';

const inkStyles = {
  backgroundColor: '#ee3335'
};

const Auth = () => (
  <div className="container">
    <div className="row">
      <div className="col-xs-12 col-sm-offset-3 col-sm-6">
        <Paper zDepth={2}>
          <Tabs className="auth-tabs text-center" inkBarStyle={inkStyles}>
            <Tab label="Entrar">
              <Login />
            </Tab>
            <Tab label="Registrate">
              <SignUp />
            </Tab>
          </Tabs>
        </Paper>
      </div>
    </div>
  </div>
);

export default Auth;
