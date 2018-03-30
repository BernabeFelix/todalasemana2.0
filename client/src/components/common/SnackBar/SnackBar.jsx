import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import { bool, func, number, string } from 'prop-types';
import { $blueCool, $red, Intent } from '../../../styles/variables';

const successStyle = {
  backgroundColor: $blueCool
};

const errorStyle = {
  backgroundColor: $red
};

const CustomSnackbar = ({
  duration,
  handleRequestClose,
  msg,
  open,
  intent
}) => (
  <Snackbar
    open={open}
    message={msg}
    autoHideDuration={duration}
    onRequestClose={handleRequestClose}
    bodyStyle={intent === Intent.ERROR ? errorStyle : successStyle}
  />
);

CustomSnackbar.defaultProps = {
  duration: 2000,
  intent: Intent.ERROR,
  open: false
};

CustomSnackbar.propTypes = {
  duration: number,
  handleRequestClose: func.isRequired,
  intent: string,
  msg: string.isRequired,
  open: bool
};

export default CustomSnackbar;
