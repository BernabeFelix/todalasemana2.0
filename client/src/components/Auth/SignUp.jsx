import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import Snackbar from 'material-ui/Snackbar';
import controls from './controls';
import CustomTextField from './CustomFormField/CustomTextField';
import Form from './Form';
import { sleep } from './utils';
import Auth from '../../api/auth/Auth';
import { signInUrl } from '../../routes';

class SignUp extends Component {
  state = {
    error: null,
    success: null,
    redirect: null
  };

  signUp = async data => {
    this.setState({
      error: null,
      success: null
    });
    await sleep(300); // Fake load time
    // Try to create account
    try {
      const { email, password } = data;
      const auth = new Auth();
      const res = await auth.signUp({ email, password });

      // Show success message and invite to check the email
      this.setState({ success: res.message });
    } catch (error) {
      // show error
      this.setState({
        error: error.message
      });
    }
  };

  redirect = () => {
    this.setState({ redirect: true });
  };

  render() {
    const { error, success, redirect } = this.state;

    if (redirect) {
      return <Redirect to={signInUrl()} />;
    }

    return (
      <Form onSubmit={this.signUp} className="signup">
        {(updateValid, shouldValid) => (
          <Fragment>
            {success && (
              <Snackbar
                open
                message={success}
                action="Continuar"
                onActionClick={this.redirect}
                onRequestClose={this.redirect}
                autoHideDuration={10000}
              />
            )}
            {error && (
              <div className="alert alert-error alert-small">{error}</div>
            )}
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <CustomTextField
                  control={controls.firstName}
                  onValidChange={updateValid}
                  shouldValid={shouldValid}
                />
              </div>
              <div className="col-xs-12 col-sm-6">
                <CustomTextField
                  control={controls.lastName}
                  onValidChange={updateValid}
                  shouldValid={shouldValid}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <CustomTextField
                  control={controls.address}
                  onValidChange={updateValid}
                  shouldValid={shouldValid}
                />
              </div>
              <div className="col-xs-12 col-sm-6">
                <CustomTextField
                  control={controls.zipCode}
                  onValidChange={updateValid}
                  shouldValid={shouldValid}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <CustomTextField
                  control={controls.phone}
                  onValidChange={updateValid}
                  shouldValid={shouldValid}
                />
              </div>
              <div className="col-xs-12 col-sm-6">
                <CustomTextField
                  control={controls.service}
                  onValidChange={updateValid}
                  shouldValid={shouldValid}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <CustomTextField
                  control={controls.email}
                  onValidChange={updateValid}
                  shouldValid={shouldValid}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <CustomTextField
                  control={controls.password}
                  onValidChange={updateValid}
                  shouldValid={shouldValid}
                />
              </div>
              <div className="col-xs-12 col-sm-6">
                <CustomTextField
                  control={controls.passwordConfirm}
                  onValidChange={updateValid}
                  shouldValid={shouldValid}
                />
              </div>
            </div>
          </Fragment>
        )}
      </Form>
    );
  }
}

export default SignUp;
