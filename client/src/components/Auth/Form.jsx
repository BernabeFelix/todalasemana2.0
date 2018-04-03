import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { RaisedButton } from 'material-ui';
import { func, string } from 'prop-types';

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

    // Real submit
    const values = this.getFormValues();
    const reset = await this.props.submit(values);

    // reset form?
    if (reset) this.reset();

    this.setState({ shouldValid: false, loading: false });
  };

  reset = () => {
    /* eslint-disable react/no-string-refs */
    Object.keys(this.refs).forEach(key => {
      const control = this.refs[key];
      control.reset();
    });
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

    const { shouldValid } = this.state;
    const classNames = `form ${this.props.className}`;
    return (
      <form className={classNames}>
        {this.props.children(this.updateControl, shouldValid)}

        <div className="submit-btn-wrapper">
          <RaisedButton
            label="Entrar"
            fullWidth
            backgroundColor="#ee3335"
            labelColor="#fff"
            onClick={this.submit}
            disabled={this.state.loading}
          />
        </div>
      </form>
    );
  }
}

Form.defaultProps = {
  className: ''
};

Form.propTypes = {
  className: string,
  children: func.isRequired,
  submit: func.isRequired
};

export default Form;
