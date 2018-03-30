import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import { bool, func, number, string } from 'prop-types';

const CustomSnackbar = ({ duration, handleRequestClose, msg, open }) => (
  <Snackbar
    open={open}
    message={msg}
    autoHideDuration={duration}
    onRequestClose={handleRequestClose}
  />
);

CustomSnackbar.defaultProps = {
  duration: 2000,
  open: false
};

CustomSnackbar.propTypes = {
  duration: number,
  handleRequestClose: func.isRequired,
  msg: string.isRequired,
  open: bool
};

export default CustomSnackbar;
