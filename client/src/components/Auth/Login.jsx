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
    errorMsg: null
  };

  login = async data => {
    const { user, password } = data;
    this.setState({
      errorMsg: null
    });

    await sleep(300); // just to fake load time haha
    const auth = new Auth();
    // Try login
    console.log('try login');
    console.log(user);
    console.log(password);
    try {
      const res = await auth.login(user, password);
      // Redirect to home
      console.log(res);
      this.setState({ redirectTo: homeUrl() });
    } catch (error) {
      console.log('Error in login:');
      console.log(error);
      // show error
      this.setState({
        errorMsg: error.message
      });
    }
  };
  logout = () => {
    const auth = new Auth();
    auth.logout();
  };

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={this.state.redirectTo} />;
    }
    return (
      <Form submit={this.login} className="login">
        {(updateValid, shouldValid) => (
          <div className="login">
            {this.state.errorMsg && (
              <div className="alert alert-error alert-small">
                {this.state.errorMsg}
              </div>
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
