import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import FA from 'react-fontawesome';
import { getParam, sleep } from '../utils';
import Auth from '../../../api/auth/Auth';
import { signInUrl } from '../../../routes';
import ResetPassword from './ResetPassword';

const boxStyles = {
  padding: '1rem'
};

class ActionHandler extends Component {
  constructor(props) {
    super(props);
    const mode = getParam('mode');
    const code = getParam('oobCode');
    let error = null;
    let title;
    if (!mode || !code) error = 'El enlace de recuperación no es válido.';
    switch (mode) {
      case 'verifyEmail':
        title = 'Confirmación de correo';
        break;
      case 'resetPassword':
        title = 'Restablecer contraseña';
        break;
      case 'recoverEmail':
      default:
        // TODO: handle email recovery
        title = 'Error';
        error = 'Ocurrió un error inesperado.';
        break;
    }
    this.state = { mode, code, title, error };
  }

  async componentWillMount() {
    await sleep(1000);
    if (this.state.error) {
      this.setState({ errorMsg: this.state.error });
      return;
    }
    const auth = new Auth();
    const { mode, code } = this.state;
    try {
      let email = null;
      switch (mode) {
        case 'verifyEmail':
          await auth.confirmEmailAddress(code);
          this.setState({
            title: 'Confirmación de correo',
            successMsg: '¡Tu cuenta ha sido activada exitosamente!'
          });
          break;
        case 'resetPassword':
          // Validate code and get email address
          email = await auth.verifyPasswordResetCode(code);
          this.setState({ email, title: 'Restablecer contraseña' });
          break;
        case 'recoverEmail':
          // TODO: handle email recovery
          break;
        default:
          break;
      }
    } catch (error) {
      this.setState({ errorMsg: error.message });
    }
  }

  render() {
    const { mode, code, title, email, errorMsg, successMsg } = this.state;
    let toRender = null;
    if (successMsg) {
      toRender = (
        <Fragment>
          <div className="alert alert-info alert-small">{successMsg}</div>
          <Link to={signInUrl()}>
            <RaisedButton label="Continuar" primary fullWidth />
          </Link>
        </Fragment>
      );
    } else if (errorMsg) {
      toRender = (
        <Fragment>
          <div className="alert alert-error alert-small">{errorMsg}</div>
          <Link to={signInUrl()}>
            <RaisedButton label="Continuar" primary fullWidth />
          </Link>
        </Fragment>
      );
    } else if (mode === 'resetPassword' && email) {
      toRender = <ResetPassword code={code} email={email} />;
    } else {
      toRender = (
        <div className="loader">
          <FA name="circle-o-notch" className="" spin size="3x" />
          <p>Validando</p>
        </div>
      );
    }

    return (
      <div className="row">
        <div className="col-xs-12 col-sm-offset-5 col-sm-3">
          <Paper zDepth={2} style={boxStyles}>
            <h3 className="text-center">{title}</h3>
            <div className="logo" />
            <div className="row">
              <div className="col-xs-12">{toRender}</div>
            </div>
          </Paper>
        </div>
      </div>
    );
  }
}

export default ActionHandler;
