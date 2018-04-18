import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { shape } from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import CustomTextField from './CustomFormField/CustomTextField';
import controls from './controls';
import Form from '../common/Form';
import PasswordRecovery from './PasswordRecovery';
import { sleep } from './utils';
import Auth from '../../api/auth/Auth';
import errors from '../../api/auth/errors';

import { adminUrl, superAdminUrl } from '../../routes';

class Login extends Component {
  constructor() {
    super();
    Auth.auth.onAuthStateChanged(this.handleSessionChange);
  }

  state = {
    error: null
  };

  handleSessionChange = user => {
    // For now, this line controls what menu will be shown in header (either admin or customer)
    // TODO: refactor once we have roles in backend
    if (user && user.emailVerified) {
      /* eslint-disable no-param-reassign */
      user.isAdmin = false;
      this.props.history.push(user.isAdmin ? superAdminUrl() : adminUrl());
    }
  };

  login = async data => {
    const { user, password } = data;

    await sleep(300); // just to fake load time
    this.setState({ error: null }, async () => {
      const auth = new Auth();
      // Try login
      try {
        await auth.login(user, password);
        // Redirect happens in handleSessionChange
      } catch (error) {
        const msg = error ? error.message : errors.internalError;
        // show error
        this.setState({
          error: msg
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
    const { error, showPasswordRecovery } = this.state;

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

Login.propTypes = {
  history: shape(History).isRequired
};

export default withRouter(Login);
