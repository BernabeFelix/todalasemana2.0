import React, { Component } from 'react';
import { FlatButton } from 'material-ui';
import { func, string } from 'prop-types';
import withSnackBar, { SnackBarStyles } from '../common/SnackBar/withSnackBar';
import { Intent } from '../../types';

class Form extends Component {
  state = {
    shouldValid: false
  };

  // return an object of key values
  /* eslint-disable no-return-assign, no-param-reassign */
  getFormValues = () =>
    Object.keys(this.controlsWithValidation).reduce(
      (objToReturn, controlName) => {
        objToReturn[controlName] = this.controlsWithValidation[
          controlName
        ].value;

        return objToReturn;
      },
      {}
    );

  formIsValid = () =>
    Object.keys(this.controlsWithValidation).every(
      key => this.controlsWithValidation[key].valid
    );

  controlsWithValidation = {};

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
    // const formValues = this.getFormValues();
    this.props.openSnackBar(this.props.successText, Intent.SUCCESS);

    //    reset form
    this.setState({ shouldValid: false });
  };

  updateControl = (controlName, values) => {
    // todo: add validation to shouldComponentUpdate
    // Controls are added to the state, so we know when all controls are valid
    // eg. controlWithValidValue = { password: false, value: '' }
    this.controlsWithValidation = {
      ...this.controlsWithValidation,
      [controlName]: values
    };
  };

  render() {
    const { children, submitText } = this.props;
    const { shouldValid } = this.state;

    return (
      <div className="form">
        {children(this.updateControl, shouldValid)}

        <div className="submit-btn-wrapper">
          <FlatButton
            label={submitText}
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

Form.defaultProps = {
  submitText: 'entrar',
  successText: 'ok'
};

Form.propTypes = {
  children: func.isRequired,
  submitText: string,
  successText: string,
  ...SnackBarStyles
};

export default withSnackBar(Form);
