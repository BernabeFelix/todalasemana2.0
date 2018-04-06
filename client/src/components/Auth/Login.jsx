import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import CustomTextField from './CustomFormField/CustomTextField';
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

    // todo: @paul what is this for?
    this.setState({
      error: null,
      redirect: null
    });

    await sleep(300); // just to fake load time
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
  };

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to={redirect} />;
    }
    const { error } = this.state;
    return (
      <Form onSubmit={this.login} className="login">
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
          </div>
        )}
      </Form>
    );
  }
}

export default Login;
