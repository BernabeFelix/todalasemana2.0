import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { string } from 'prop-types';
import Form from '../../common/Form';
import CustomTextField from '../CustomFormField/CustomTextField';
import controls from '../controls';
import { sleep } from '../utils';
import Auth from '../../../api/auth/Auth';
import { signInUrl } from '../../../routes';

class ResetPassword extends Component {
  state = { error: null, successMsg: null };

  resetPassword = async data => {
    this.setState({ error: null });

    await sleep(300); // just to fake load time

    try {
      const { password } = data;
      console.log(password);
      const auth = new Auth();
      const { code } = this.props;
      await auth.confirmPasswordResetCode(code, password);
      this.setState({
        successMsg: 'Tu contraseña se actualizó correctamente.'
      });
    } catch (error) {
      // show error
      this.setState({
        error: error.message
      });
    }
  };

  render() {
    const { error, successMsg } = this.state;

    if (successMsg) {
      return (
        <div className="row">
          <div className="col-xs-12">
            <div className="alert alert-info alert-small">{successMsg}</div>
            <Link to={signInUrl()}>
              <RaisedButton label="Continuar" />
            </Link>
          </div>
        </div>
      );
    }

    const { email } = this.props;
    return (
      <Form
        onSubmit={this.resetPassword}
        className="login password-recovery"
        submitText="Confirmar"
      >
        {(updateValid, shouldValid) => (
          <div className="password-recovery">
            <p>Ingresa tu nueva contraseña.</p>
            {error && (
              <div className="alert alert-error alert-small">{error}</div>
            )}

            <div className="row">
              <div className="col-xs-12">
                <TextField value={email} disabled />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <CustomTextField
                  control={controls.user}
                  onValidChange={updateValid}
                  shouldValid={shouldValid}
                />
              </div>
            </div>
          </div>
        )}
      </Form>
    );
  }
}

ResetPassword.propTypes = {
  code: string.isRequired,
  email: string.isRequired
};

export default ResetPassword;
