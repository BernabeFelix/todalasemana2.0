import { TextField } from 'material-ui';
import React from 'react';
import { bool, number } from 'prop-types';
import CustomField from './CustomField';
import CustomFieldType from './types';

// Note: If something changes in this component, update SearchBox
const CustomTextField = ({ multiLine, maxLength, ...props }) => (
  <CustomField {...props}>
    {({ controlFields, errorText, updateValue, value }) => (
      <TextField
        {...controlFields}
        onChange={updateValue}
        value={value}
        errorText={errorText}
        multiLine={multiLine}
        maxLength={maxLength}
        readOnly={props.readOnly}
      />
    )}
  </CustomField>
);

CustomTextField.defaultProps = {
  multiLine: false,
  maxLength: 100
};

CustomTextField.propTypes = {
  multiLine: bool,
  maxLength: number,
  ...CustomFieldType
};

export default CustomTextField;
