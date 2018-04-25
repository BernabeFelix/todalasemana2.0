import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import { getQueryStringParam } from '../utils';
import Auth from '../../../api/auth/Auth';
import { signInUrl } from '../../../routes';
import ResetPassword from './ResetPassword';

const invalidLinkError = 'El enlace no es válido.';

class ActionHandler extends Component {
  constructor(props) {
    super(props);
    const mode = getQueryStringParam('mode');
    const code = getQueryStringParam('oobCode');
    let errorMsg = null;
    let title;
    switch (mode) {
      case 'verifyEmail':
        title = 'Confirmación de correo';
        break;
      case 'resetPassword':
        title = 'Restablecer contraseña';
        break;
      case 'recoverEmail': // TODO: handle email recovery
      default:
        title = 'Error';
        errorMsg = invalidLinkError;
        break;
    }

    if (!code && !errorMsg) errorMsg = invalidLinkError;

    this.state = { mode, code, title, errorMsg };
  }

  async componentWillMount() {
    // if state has an error already from constructor, do nothing but show it
    if (this.state.errorMsg) return;

    const auth = new Auth();
    const { mode, code } = this.state;
    try {
      let email = null;
      switch (mode) {
        case 'verifyEmail':
          await auth.confirmEmailAddress(code);
          this.setState({
            successMsg: '¡Tu cuenta ha sido activada exitosamente!'
          });
          break;
        case 'resetPassword':
          // Validate code and get email address
          email = await auth.verifyPasswordResetCode(code);
          this.setState({ email });
          break;
        case 'recoverEmail': // TODO: handle email recovery
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
    if (successMsg || errorMsg) {
      const alertClasses = `alert alert-${
        successMsg ? 'info' : 'error'
      } alert-small`;
      toRender = (
        <Fragment>
          <div className={alertClasses}>{successMsg || errorMsg}</div>
          <Link to={signInUrl()}>
            <RaisedButton label="Continuar" primary fullWidth />
          </Link>
        </Fragment>
      );
    } else if (mode === 'resetPassword' && email) {
      toRender = <ResetPassword code={code} email={email} />;
    } else toRender = null;

    return (
      <div className="row">
        <div className="col-xs-12 col-sm-offset-5 col-sm-3">
          <Paper
            zDepth={2}
            style={{
              padding: '1rem'
            }}
          >
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
