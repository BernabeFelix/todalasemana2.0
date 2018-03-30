import React, { Fragment } from 'react';
import CustomSnackbar from './SnackBar';

const getDisplayName = WrappedComponent =>
  WrappedComponent.displayName || WrappedComponent.name || 'Component';

const withSnackBar = WrappedComponent => {
  class WithSnackBar extends React.Component {
    state = {
      msg: '',
      open: false
    };

    handleRequestClose = () => {
        // this.setState({ open: false });
    }

    openSnackBar = msg => this.setState({ msg, open: true });

    render() {
      const { msg, open } = this.state;

      return (
        <Fragment>
          <CustomSnackbar
            msg={msg}
            open={open}
            handleRequestClose={this.handleRequestClose}
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

export default withSnackBar;
