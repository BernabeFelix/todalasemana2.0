import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { RaisedButton } from 'material-ui';
import { func, string } from 'prop-types';
import { $blueCool, $red } from '../../styles/variables';

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

    const values = this.getFormValues();
    this.props.onSubmit(values);

    this.setState({ shouldValid: false, loading: false });
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
            backgroundColor={$red}
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
  successText: string
};

export default Form;
