import { FlatButton } from 'material-ui';
import React, { Component } from 'react';
import CustomTextField from './CustomTextField';
import controls from './controls';

class Login extends Component {
  state = {
    shouldValid: false
  };

  controlsWithValidation = {};

  formIsValid = () => {
    Object.keys(this.controlsWithValidation).every(
      key => this.controlsWithValidation[key].valid
    );
  };

  submit = () => {
    // condition valid
    const isFormIsValid = this.formIsValid();

    if (!isFormIsValid) {
      if (!this.state.shouldValid) {
        this.setState({ shouldValid: true });
      }
      return;
    }
    //    send POST
    //    reset form
    this.setState({ shouldValid: false });
    alert('All right, All right, All right');
  };

  updateValid = controlWithValidValue => {
    // todo: add validation to shouldComponentUpdate
    // Controls are added to the state, so we know when all controls are valid
    // eg. controlWithValidValue = { password: false }
    this.controlsWithValidation = {
      ...this.controlsWithValidation,
      ...controlWithValidValue
    };
  };

  render() {
    const { shouldValid } = this.state;

    return (
      <div className="login">
        <div className="row">
          <div className="col-xs-12 text-center">
            <CustomTextField
              control={controls.user}
              onValidChange={this.updateValid}
              shouldValid={shouldValid}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 text-center">
            <CustomTextField
              control={controls.password}
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
