import React, { Component } from 'react';
import Form from './Form';
import CustomTextField from './CustomFormField/CustomTextField';
import controls from './controls';
import Auth from '../../api/auth/Auth';

class PasswordRecovery extends Component {
  sendRecoveryEmail = async data => {
    try {
      const { user } = data;
      await Auth.sendRecoveryEmail(user);
    } catch (error) {
      // show error
      this.setState({
        error: error.message
      });
    }
  };

  render() {
    const { error } = this.state;
    return (
      <Form
        onSubmit={this.sendRecoveryEmail}
        className="login"
        successText="Revisa tu correo electrónico"
        submitText="Recuperar"
      >
        {(updateValid, shouldValid) => (
          <div className="login">
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
          </div>
        )}
      </Form>
    );
  }
}

export default PasswordRecovery;
