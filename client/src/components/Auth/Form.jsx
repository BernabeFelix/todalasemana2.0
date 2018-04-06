import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { RaisedButton } from 'material-ui';
import { func, string } from 'prop-types';
import withSnackBar, { SnackBarStyles } from '../common/SnackBar/withSnackBar';
import { Intent } from '../common/types';
import { $blueCool } from '../../styles/variables';

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

  submit = async () => {
    this.setState({
      loading: true
    });
    // condition valid
    const isFormIsValid = this.formIsValid();
    if (!isFormIsValid) {
      if (!this.state.shouldValid) {
        this.setState({ shouldValid: true });
      }
      this.setState({ loading: false });
      return;
    }

    this.props.openSnackBar(this.props.successText, Intent.SUCCESS);

    const values = this.getFormValues();
    const reset = await this.props.onSubmit(values);

    // reset form?
    if (reset) this.reset();

    this.setState({ shouldValid: false, loading: false });
  };

  reset = () => {
    /* eslint-disable react/no-string-refs */
    Object.values(this.refs).forEach(control => control.reset());
  };

  updateControl = (controlName, values) => {
    // todo: add validation to shouldComponentUpdate
    // Controls are added to the state, so we know when all controls are valid
    // eg. controlWithValidValue = { password: false, value: '' }
    this.controlsWithValidation = {
      ...this.controlsWithValidation,
      [controlName]: values
    };

    if (this.state.shouldValid) this.formIsValid();
  };

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={this.state.redirectTo} />;
    }
    const { children, submitText } = this.props;
    const { shouldValid, loading } = this.state;
    const classNames = `form ${this.props.className}`;

    return (
      <form className={classNames}>
        {children(this.updateControl, shouldValid)}

        <div className="submit-btn-wrapper">
          <RaisedButton
            label={submitText}
            fullWidth
            backgroundColor="#ee3335"
            labelColor="#fff"
            onClick={this.submit}
            disabled={loading}
            labelStyle={{ color: $blueCool }}
            buttonStyle={{
              backgroundColor: 'white',
              border: `1px solid ${$blueCool}`
            }}
          />
        </div>
      </form>
    );
  }
}

Form.defaultProps = {
  className: '',
  submitText: 'entrar',
  successText: 'ok'
};

Form.propTypes = {
  className: string,
  children: func.isRequired,
  onSubmit: func.isRequired,
  submitText: string,
  successText: string,
  ...SnackBarStyles
};

const FormWithSnackBar = withSnackBar(Form);

export default FormWithSnackBar;
