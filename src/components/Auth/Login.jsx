import { FlatButton, TextField } from 'material-ui';
import React, { Component } from 'react';
import _isEmpty from 'lodash-es/isEmpty';
import CustomTextField from './CustomTextField';
import { areAllTrue, validateRequired } from './utils';

class Login extends Component {
  static userField = 'user';
  static errors = {
    [Login.userField]: {
      required: 'Ingrese un usuario'
    }
  };

  static controls = {
    password: {
      errors: {
        required: 'Ingrese una contraseña'
      },
      fields: {
        name: 'password',
        type: 'text',
        floatingLabelText: 'contraseña'
      }
    }
  };

  state = {
    [Login.userField]: '',
    [Login.passwordField]: '',
    userErrorText: '',
    passwordErrorText: '',
    shouldValid: false
  };

  formIsValid = () => {
    const userRequired = validateRequired(
      Login.userField,
      'userErrorText',
      this.state,
      Login.errors
    );

    const passwordRequired = validateRequired(
      Login.passwordField,
      'passwordErrorText',
      this.state,
      Login.errors
    );

    // If the form is not valid
    // form controls are updated
    const areControlsValid = areAllTrue([
      userRequired.isValid,
      passwordRequired.isValid
    ]);

    if (!areControlsValid) {
      if (!_isEmpty(userRequired.toUpdate)) {
        this.setState(userRequired.toUpdate);
      }
      if (!_isEmpty(passwordRequired.toUpdate)) {
        this.setState(passwordRequired.toUpdate);
      }

      return false;
    }

    return true;
  };

  submit = () => {
    if (!this.formIsValid()) {
      return;
    }

    //    send POST
    //    reset form
    alert('All right, All right, All right');
  };

  updateValid = controlWithValidValue => {
    // todo: add validation to shouldComponentUpdate
    this.setState(controlWithValidValue);
  };

  render() {
    const { [Login.userField]: user, userErrorText, shouldValid } = this.state;

    return (
      <div className="login">
        <div className="row">
          <div className="col-xs-12 text-center">
            <TextField
              floatingLabelText="email"
              errorText={userErrorText}
              onChange={this.update}
              value={user}
              name="user"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 text-center">
            <CustomTextField
              fields={Login.controls.password.fields}
              onValidChange={this.updateValid}
              shouldValid={shouldValid}
            />
          </div>
        </div>
        <div className="submit-btn-wrapper">
          <FlatButton
            label="Entrar"
            className="header-right-nav-btn submit-btn"
            hoverColor="transparent"
            rippleColor="transparent !important"
            onClick={this.submit}
          />
        </div>
      </div>
    );
  }
}

export default Login;
