import { Component } from 'react';
import { func } from 'prop-types';
import _isEmpty from 'lodash-es/isEmpty';
import { validateRequired } from '../utils';
import CustomFieldType from './types';

class CustomField extends Component {
  static errorField = 'errorText';

  constructor(props) {
    super(props);

    this.state = {
      [props.control.fields.name]: props.initialValue,
      [CustomField.errorField]: ''
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
      CustomField.errorField,
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
    const { children, control } = this.props;
    const {
      [control.fields.name]: value,
      [CustomField.errorField]: errorField
    } = this.state;

    return children({
      controlFields: control.fields,
      errorField,
      updateValue: this.updateValue,
      value
    });
  }
}

/* eslint-disable react/default-props-match-prop-types */
CustomField.defaultProps = {
  initialValue: ''
};

CustomField.propTypes = {
  children: func.isRequired,
  ...CustomFieldType
};

export default CustomField;
