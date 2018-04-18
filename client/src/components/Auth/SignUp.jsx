import React, { Component, Fragment } from 'react';
import controls from './controls';
import CustomTextField from './CustomFormField/CustomTextField';
import Form from '../common/Form';
import { sleep } from './utils';
import Auth from '../../api/auth/Auth';
import { signInUrl } from '../../routes';

class SignUp extends Component {
  state = {
    error: null,
    successMsg: null
  };

  signUp = async data => {
    this.setState(
      {
        error: null,
        successMsg: null
      },
      async () => {
        await sleep(300); // Fake load time

        // Try to create account
        try {
          const { email, password } = data;
          const auth = new Auth();
          const res = await auth.signUp({ email, password });

          // Show success message and invite to check the email
          this.setState({ successMsg: res.message });

          // Redirect
          setTimeout(() => this.props.history.push(signInUrl()), 5000);
        } catch (error) {
          // show error
          this.setState({
            error: error.message
          });
        }
      }
    );
  };

  render() {
    const { error, successMsg } = this.state;

    return (
      <Form onSubmit={this.signUp} className="signup">
        {(updateValid, shouldValid) => (
          <Fragment>
            {successMsg && (
              <div className="alert alert-info alert-small">{successMsg}</div>
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
