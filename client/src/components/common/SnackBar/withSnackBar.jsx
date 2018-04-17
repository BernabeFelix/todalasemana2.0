import React, { Fragment } from 'react';
import { func } from 'prop-types';
import CustomSnackbar from './SnackBar';
import { Intent } from '../types';

export const getDisplayName = WrappedComponent =>
  WrappedComponent.displayName || WrappedComponent.name || 'Component';

const withSnackBar = WrappedComponent => {
  class WithSnackBar extends React.Component {
    state = {
      msg: '',
      open: false,
      intent: Intent.ERROR
    };

    handleRequestClose = () => this.setState({ open: false });

    openSnackBar = (msg, intent = Intent.ERROR) =>
      this.setState({ intent, msg, open: true });

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
