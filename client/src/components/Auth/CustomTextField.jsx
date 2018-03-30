import { TextField } from 'material-ui';
import React, { Component } from 'react';
import { bool, func, string, shape } from 'prop-types';
import _isEmpty from 'lodash-es/isEmpty';
import { Control } from './types';
import { validateRequired } from './utils';

class CustomTextField extends Component {
  static errorField = 'errorText';

  constructor(props) {
    super(props);

    this.state = {
      [props.control.fields.name]: props.initialValue,
      [CustomTextField.errorField]: ''
    };
  }

  componentDidMount() {
    const { initialValue, onValidChange, control } = this.props;

    if (!initialValue) {
      // init valid state on parent
      onValidChange([control.fields.name], { valid: false });
      return;
    }

    this.validate();
  }

  componentDidUpdate(oldProps) {
    // if should valid was updated
    if (this.props.shouldValid && !oldProps.shouldValid) {
      this.validate();
    }
  }

  updateValue = ({ target }) => {
    const { value } = target;
    const { control } = this.props;

    // check validation after state update
    // to have state updated during validation
    this.setState(
      {
        [control.fields.name]: value
      },
      this.validate
    );
  };

  validate = () => {
    const { control, onValidChange, shouldValid } = this.props;

    const required = validateRequired(
      control.fields.name,
      CustomTextField.errorField,
      this.state,
      control.errors
    );

    // Send value to form
    onValidChange([control.fields.name], {
      valid: required.isValid,
      value: this.state[control.fields.name]
    });

    // Update UI
    if (shouldValid && !_isEmpty(required.toUpdate)) {
      this.setState(required.toUpdate);
    }
  };

  render() {
    const { control } = this.props;
    const {
      [control.fields.name]: value,
      [CustomTextField.errorField]: errorField
    } = this.state;

    return (
      <TextField
        {...control.fields}
        onChange={this.updateValue}
        value={value}
        errorText={errorField}
      />
    );
  }
}

CustomTextField.defaultProps = {
  initialValue: ''
};

CustomTextField.propTypes = {
  control: shape(Control).isRequired,
  onValidChange: func.isRequired,
  shouldValid: bool.isRequired,
  initialValue: string
};

export default CustomTextField;
