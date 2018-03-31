import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { RaisedButton, FlatButton } from 'material-ui';
import { func, bool } from 'prop-types';
import Auth from '../../api/auth/Auth';

const sleep = async ms => new Promise(resolve => setTimeout(resolve, ms));
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
      errorMsg: null,
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
    await sleep(300); // just to fake load time haha
    const auth = new Auth();
    if (this.props.isLogin === true) {
      // Try login
      console.log('try login');
      const { user, password } = this.getFormValues();
      console.log(user);
      console.log(password);
      try {
        const res = await auth.login(user, password);
        // REdirect to home?
        console.log(res);
        this.setState({ redirectTo: '/' });
      } catch (error) {
        console.log('Error in login:');
        console.log(error);
        // show error
        this.setState({
          errorMsg: error.message
        });
      }
    } else {
      // Try to create account
      const { email, password } = this.getFormValues();
      try {
        const res = await auth.signUp({ email, password });
        console.log(res);

        // Show success message and invite to check the email
      } catch (error) {
        console.log('Error in signUp:');
        console.log(error);
        // show error
        this.setState({
          errorMsg: error.message
        });
      }
    }

    //    reset form
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

  logout = () => {
    const auth = new Auth();
    auth.logout();
  };

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={this.state.redirectTo} />;
    }

    const { shouldValid } = this.state;
    const classNames = this.props.isLogin ? 'form login' : 'form signup';
    const alertSizeClass = this.props.isLogin ? 'alert-small' : '';
    return (
      <form className={classNames}>
        {this.state.errorMsg && (
          <div className={`alert alert-error ${alertSizeClass}`}>
            <div className="">{this.state.errorMsg}</div>
          </div>
        )}
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
          <FlatButton label="Sign out" onClick={this.logout} fullWidth />
        </div>
      </form>
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
