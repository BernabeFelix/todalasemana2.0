import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import { bool, func, number, string } from 'prop-types';
import { $blueCool, $red } from '../../../styles/variables';
import { Intent } from '../types';

const successStyle = {
  backgroundColor: $blueCool
};

const errorStyle = {
  backgroundColor: $red
};

const defaultStyle = {
  backgroundColor: '#000'
};

const getStyles = intent => {
  switch (intent) {
    case Intent.ERROR:
      return errorStyle;
    case Intent.SUCCESS:
      return successStyle;
    default:
      return defaultStyle;
  }
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
    bodyStyle={getStyles(intent)}
  />
);

CustomSnackbar.defaultProps = {
  duration: 4000,
  open: false
};

CustomSnackbar.propTypes = {
  duration: number,
  handleRequestClose: func.isRequired,
  intent: string.isRequired,
  msg: string.isRequired,
  open: bool
};

export default CustomSnackbar;
