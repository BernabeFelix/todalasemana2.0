import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { FlatButton } from 'material-ui';
import CustomTextField from './CustomTextField';
import controls from './controls';
import Form from './Form';
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
    this.setState({
      error: null,
      redirect: null
    });

    await sleep(300); // just to fake load time haha
    const auth = new Auth();
    // Try login
    try {
      await auth.login(user, password);
      // Redirect to home
      this.setState({ redirect: homeUrl() });
    } catch (error) {
      // show error
      this.setState({
        error: error.message
      });
    }
  };
  logout = () => {
    const auth = new Auth();
    auth.logout();
  };

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to={redirect} />;
    }
    const { error } = this.state;
    return (
      <Form submit={this.login} className="login">
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
            <span className="recover-password">Recuperar contraseña</span>
            <FlatButton label="Sign out" onClick={this.logout} fullWidth />
          </div>
        )}
      </Form>
    );
  }
}

export default Login;
