import React, { Component } from 'react';
import { FlatButton } from 'material-ui';
import { func } from 'prop-types';

class Form extends Component {
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
      <div className='form'>
        {this.props.children(this.updateValid, shouldValid)}

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

Form.propTypes = {
  children: func.isRequired
};

export default Form;
