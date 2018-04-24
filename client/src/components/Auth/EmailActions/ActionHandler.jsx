import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import { getParam } from '../utils';
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

    this.state = { mode, code };
  }

  async componentWillMount() {
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
        case 'recoverEmail':
          // TODO: handle email recovery
          break;
        default:
          break;
      }
    } catch (error) {
      console.log(error);
      this.setState({ errorMsg: error.message });
    }
  }

  render() {
    const { code, email, errorMsg, successMsg } = this.state;
    let toRender = null;
    if (successMsg) {
      toRender = (
        <Fragment>
          <div className="alert alert-info alert-small">{successMsg}</div>
          <Link to={signInUrl()}>
            <RaisedButton label="Continuar" />
          </Link>
        </Fragment>
      );
    } else if (errorMsg) {
      toRender = (
        <Fragment>
          <div className="alert alert-error alert-small">{errorMsg}</div>
          <Link to={signInUrl()}>
            <RaisedButton label="Continuar" />
          </Link>
        </Fragment>
      );
    } else {
      toRender = <ResetPassword code={code} email={email} />;
    }

    return (
      <div className="row">
        <div className="col-xs-12 col-sm-offset-5 col-sm-3">
          <Paper zDepth={2} style={boxStyles}>
            <div className="row">
              <div className="col-xs-12">{toRender}</div>
            </div>
          </Paper>
        </div>
      </div>
    );
  }
}

// ResetPassword.propTypes = {
//   history: shape(History).isRequired
// };

export default ActionHandler;
