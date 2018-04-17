import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { object } from 'prop-types';
import { Tab, Tabs, Paper } from 'material-ui';
import { FadeIn } from 'animate-css-styled-components';
import Login from './Login';
import SignUp from './SignUp';
import { $red } from '../../styles/variables';
import { signInUrl, signUpUrl } from '../../routes';

class Auth extends Component {
  state = {
    activeTab: this.props.match.url
  };

  componentDidUpdate = () => {
    if (this.state.activeTab !== this.props.match.url)
      this.setState({ activeTab: this.props.match.url });
  };

  signInUrl = signInUrl();

  signUpUrl = signUpUrl();

  handleChange = value => {
    this.setState({ activeTab: value });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-offset-3 col-sm-6">
            <FadeIn>
              <Paper zDepth={2}>
                <Tabs
                  className="auth-tabs text-center"
                  inkBarStyle={{ backgroundColor: $red }}
                  value={this.state.activeTab}
                  onChange={this.handleChange}
                >
                  <Tab
                    label="Entrar"
                    value={this.signInUrl}
                    containerElement={<Link to={this.signInUrl} />}
                  />
                  <Tab
                    label="Registrate"
                    value={this.signUpUrl}
                    containerElement={<Link to={this.signUpUrl} />}
                  />
                </Tabs>
                <Switch>
                  <Route path={this.signInUrl} component={Login} />
                  <Route path={this.signUpUrl} component={SignUp} />
                </Switch>
              </Paper>
            </FadeIn>
          </div>
        </div>
      </div>
    );
  }
}

/* eslint-disable react/forbid-prop-types */
Auth.propTypes = {
  match: object.isRequired
};

export default Auth;
