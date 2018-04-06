import React from 'react';
import { Tab, Tabs, Paper } from 'material-ui';
import { FadeIn } from 'animate-css-styled-components';
import Login from './Login';
import SignUp from './SignUp';

// TODO: replace this colors by variables.js proper color
const inkStyles = {
  backgroundColor: '#ee3335'
};

const Auth = () => (
  <div className="container">
    <div className="row">
      <div className="col-xs-12 col-sm-offset-3 col-sm-6">
        <FadeIn>
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
        </FadeIn>
      </div>
    </div>
  </div>
);

export default Auth;
