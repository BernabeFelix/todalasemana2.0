import { FlatButton, TextField } from 'material-ui';
import React, { Component } from 'react';
import _isEmpty from 'lodash-es/isEmpty';

// const submitButtonStyle = {
//   backgroundColor: 'orange',
//   fontSize: '18px',
//   color: 'white'
// };

class Login extends Component {
  static userField = 'user';
  static passwordField = 'password';
  static errors = {
    [Login.userField]: {
      required: 'Ingrese un usuario'
    },
    [Login.passwordField]: {
      required: 'Ingrese una contraseña'
    }
  };

  state = {
    [Login.userField]: '',
    [Login.passwordField]: '',
    userErrorText: '',
    passwordErrorText: ''
  };

  validateRequired = (field, fieldErrorText) => {
    const toUpdate = {};
    let isValid = true;

    const { [field]: fieldValue, [fieldErrorText]: errorText } = this.state;

    // if the field is empty
    if (!fieldValue) {
      // show error message
      toUpdate[fieldErrorText] = Login.errors[field].required;
      isValid = false;
    } else if (errorText) {
      // remove error message if the field is already fulfilled
      toUpdate[fieldErrorText] = '';
    }

    if (!_isEmpty(toUpdate)) {
      this.setState(toUpdate);
    }

    return isValid;
  };

  formIsValid = () => {
    const isUserValid = this.validateRequired(Login.userField, 'userErrorText');

    const isPasswordValid = this.validateRequired(
      Login.passwordField,
      'passwordErrorText'
    );

    return isUserValid && isPasswordValid;
  };

  submit = () => {
    if (!this.formIsValid()) {
      return;
    }

    //    send POST
    //    reset form
    alert('All right, All right, All right');
  };

  update = ({ target }) => {
    const { value, name } = target;

    this.setState({ [name]: value });
  };

  render() {
    const {
      [Login.passwordField]: password,
      passwordErrorText,
      [Login.userField]: user,
      userErrorText
    } = this.state;

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
            <TextField
              floatingLabelText="contraseña"
              errorText={passwordErrorText}
              onChange={this.update}
              value={password}
              name="password"
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
