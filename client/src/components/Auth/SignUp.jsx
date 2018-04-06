import React, { Component, Fragment } from 'react';
import Snackbar from 'material-ui/Snackbar';
import controls from './controls';
import CustomTextField from './CustomFormField/CustomTextField';
import Form from './Form';
import { sleep } from './utils';
import Auth from '../../api/auth/Auth';

class SignUp extends Component {
  state = {
    error: null,
    success: null
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
      return true; // Indicate the form to reset the fields
    } catch (error) {
      // show error
      this.setState({
        error: error.message
      });
      return false; // Indicate the form to hold the values
    }
  };

  render() {
    const { error, success } = this.state;
    return (
      <Form onSubmit={this.signUp} className="signup">
        {(updateValid, shouldValid) => (
          <Fragment>
            {success && (
              <Snackbar open message={success} autoHideDuration={20000} />
            )}
            {error && (
              <div className="alert alert-error alert-small">{error}</div>
            )}
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <CustomTextField
                  ref={controls.firstName.fields.name}
                  control={controls.firstName}
                  onValidChange={updateValid}
                  shouldValid={shouldValid}
                />
              </div>
              <div className="col-xs-12 col-sm-6">
                <CustomTextField
                  ref={controls.lastName.fields.name}
                  control={controls.lastName}
                  onValidChange={updateValid}
                  shouldValid={shouldValid}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <CustomTextField
                  ref={controls.address.fields.name}
                  control={controls.address}
                  onValidChange={updateValid}
                  shouldValid={shouldValid}
                />
              </div>
              <div className="col-xs-12 col-sm-6">
                <CustomTextField
                  ref={controls.zipCode.fields.name}
                  control={controls.zipCode}
                  onValidChange={updateValid}
                  shouldValid={shouldValid}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <CustomTextField
                  ref={controls.phone.fields.name}
                  control={controls.phone}
                  onValidChange={updateValid}
                  shouldValid={shouldValid}
                />
              </div>
              <div className="col-xs-12 col-sm-6">
                <CustomTextField
                  ref={controls.service.fields.name}
                  control={controls.service}
                  onValidChange={updateValid}
                  shouldValid={shouldValid}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <CustomTextField
                  ref={controls.email.fields.name}
                  control={controls.email}
                  onValidChange={updateValid}
                  shouldValid={shouldValid}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <CustomTextField
                  ref={controls.password.fields.name}
                  control={controls.password}
                  onValidChange={updateValid}
                  shouldValid={shouldValid}
                />
              </div>
              <div className="col-xs-12 col-sm-6">
                <CustomTextField
                  ref={controls.passwordConfirm.fields.name}
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
