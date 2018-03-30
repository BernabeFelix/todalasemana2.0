import React, { Component } from 'react';
import { RaisedButton } from 'material-ui';
import { func, bool } from 'prop-types';
import Auth from '../../api/auth/Auth';

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
      key => this.controlsWithValidation[key]
    );

  controlsWithValidation = {};

  submit = async () => {
    // condition valid
    console.log(this.controlsWithValidation);
    const isFormIsValid = this.formIsValid();
    if (!isFormIsValid) {
      if (!this.state.shouldValid) {
        this.setState({ shouldValid: true });
      }
      return;
    }
    console.log('Submit, form is valid');
    //    send POST
    const formValues = this.getFormValues();
    // alert('All right, All right, All right');
    const auth = new Auth();
    console.log('isLogin: ');
    console.log(this.props.isLogin);
    console.log(formValues);
    if (this.props.isLogin) {
      const { user, password } = this.state;

      console.log(this.state);
      // console.log(password);
      let error = null;
      const res = await auth.signUp(user, password).catch(err => {
        error = err;
        // show error
        console.log('Error in signUp:');
        console.log(error);
      });

      if (!error) {
        // show error
        return;
      }
      // get token
      // validate against backend
      // show success msg
      console.log(res);
    }
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

    if (this.state.shouldValid) this.submit();
  };

  render() {
    const { shouldValid } = this.state;

    return (
      <div className="form">
        {this.props.children(this.updateControl, shouldValid)}

        <div className="submit-btn-wrapper">
          <RaisedButton
            label="Entrar"
            fullWidth
            backgroundColor="#ee3335"
            labelColor="#fff"
            onClick={this.submit}
          />
        </div>
      </div>
    );
  }
}

Form.defaultProps = {
  isLogin: false
};

Form.propTypes = {
  children: func.isRequired,
  isLogin: bool
};

export default Form;
