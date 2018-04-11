import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import CustomTextField from './CustomFormField/CustomTextField';
import controls from './controls';
import Form from './Form';
import PasswordRecovery from './PasswordRecovery';
import { sleep } from './utils';
import Auth from '../../api/auth/Auth';

import { homeUrl } from '../../routes';

class Login extends Component {
  state = {
    error: null,
    redirect: null
  };

  login = async data => {
    const { user, password } = data;

    await sleep(300); // just to fake load time
    this.setState({ error: null }, async () => {
      const auth = new Auth();
      // Try login
      try {
        await auth.login(user, password);
        // Redirect to home
        // const { history } = this.props;
        // history.push(homeUrl());
        this.setState({ redirect: homeUrl() });
      } catch (error) {
        // show error
        this.setState({
          error: error.message
        });
      }
    });
  };

  forgotPassword = () => {
    this.setState({ showPasswordRecovery: true });
  };

  togglePasswordRecovery = () => {
    this.setState(currentState => ({
      showPasswordRecovery: !currentState.showPasswordRecovery
    }));
  };

  render() {
    const { redirect, error, showPasswordRecovery } = this.state;

    if (redirect) {
      return <Redirect to={redirect} />;
    }

    if (showPasswordRecovery) {
      return <PasswordRecovery cancel={this.togglePasswordRecovery} />;
    }

    return (
      <Form onSubmit={this.login} className="login" successText="Welcome back!">
        {(updateValid, shouldValid) => (
          <div className="login">
            {error && (
              <div className="alert alert-error alert-small">{error}</div>
            )}
            <div className="row">
              <div className="col-xs-12">
                <CustomTextField
                  control={controls.user}
                  onValidChange={updateValid}
                  shouldValid={shouldValid}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <CustomTextField
                  control={controls.password}
                  onValidChange={updateValid}
                  shouldValid={shouldValid}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <FlatButton
                  label="Recuperar contraseña"
                  className="recover-password"
                  hoverColor="transparent"
                  rippleColor="transparent"
                  onClick={this.togglePasswordRecovery}
                />
              </div>
            </div>
          </div>
        )}
      </Form>
    );
  }
}

export default Login;
