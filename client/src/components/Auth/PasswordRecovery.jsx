import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import { func } from 'prop-types';
import Form from '../common/Form';
import CustomTextField from './CustomFormField/CustomTextField';
import controls from './controls';
import { sleep } from './utils';
import Auth from '../../api/auth/Auth';

class PasswordRecovery extends Component {
  state = { error: null, successMsg: null };

  sendRecoveryEmail = async data => {
    this.setState({ error: null });
    await sleep(300); // just to fake load time
    try {
      const { user } = data;
      const auth = new Auth();
      await auth.sendRecoveryEmail(user);
      this.setState({
        successMsg:
          'Te hemos enviado un enlace para recuperar tu contraseña, por favor revisa tu correo.'
      });
      setTimeout(() => this.props.cancel(), 5000);
    } catch (error) {
      // show error
      this.setState({
        error: error.message
      });
    }
  };

  render() {
    const { error, successMsg } = this.state;
    return (
      <Form
        onSubmit={this.sendRecoveryEmail}
        className="login password-recovery"
        successText="Revisa tu correo electrónico"
        submitText="Recuperar"
      >
        {(updateValid, shouldValid) => (
          <div className="password-recovery">
            {successMsg && (
              <div className="alert alert-info alert-small">{successMsg}</div>
            )}
            <p>Ingresa tu dirección de correo.</p>
            {error && (
              <div className="alert alert-error alert-small">{error}</div>
            )}
            <div className="row">
              <div className="col-xs-12">
                <CustomTextField
                  control={controls.user}
                  onValidChange={updateValid}
                  shouldValid={shouldValid}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12">
                <FlatButton
                  label="Cancelar"
                  className="recover-password cancel"
                  hoverColor="transparent"
                  rippleColor="transparent"
                  onClick={this.props.cancel}
                />
              </div>
            </div>
          </div>
        )}
      </Form>
    );
  }
}

PasswordRecovery.propTypes = {
  cancel: func.isRequired
};

export default PasswordRecovery;
