import React, { Fragment } from 'react';
import { func } from 'prop-types';
import CustomSnackbar from './SnackBar';
import { Intent } from '../types';

export const getDisplayName = WrappedComponent =>
  WrappedComponent.displayName || WrappedComponent.name || 'Component';

const withSnackBar = WrappedComponent => {
  class WithSnackBar extends React.Component {
    static errorMsg = 'Sucedio un error, por favor intente de nuevo';
    static successMsg = 'Guardado correctamente';

    state = {
      msg: '',
      open: false,
      intent: Intent.ERROR
    };

    handleRequestClose = () => this.setState({ open: false });

    /* eslint-disable no-param-reassign */
    openSnackBar = (intent = Intent.ERROR, msg) => {
      if (!msg) {
        msg =
          intent === Intent.ERROR
            ? WithSnackBar.errorMsg
            : WithSnackBar.successMsg;
      }

      this.setState({ msg, intent, open: true });
    };

    render() {
      const { intent, msg, open } = this.state;

      return (
        <Fragment>
          <CustomSnackbar
            msg={msg}
            open={open}
            handleRequestClose={this.handleRequestClose}
            intent={intent}
          />
          <WrappedComponent {...this.props} openSnackBar={this.openSnackBar} />
        </Fragment>
      );
    }
  }

  WithSnackBar.displayName = `WithSnackBar(${getDisplayName(
    WrappedComponent
  )})`;

  return WithSnackBar;
};

export const SnackBarTypes = {
  openSnackBar: func.isRequired
};

export default withSnackBar;
