import { TextField } from 'material-ui';
import React from 'react';
import { bool, number } from 'prop-types';
import CustomField from './CustomField';
import CustomFieldType from './types';

const CustomTextField = ({ multiLine, maxLength, ...props }) => (
  <CustomField {...props}>
    {({ controlFields, errorField, updateValue, value }) => (
      <TextField
        {...controlFields}
        onChange={updateValue}
        value={value}
        errorText={errorField}
        multiLine={multiLine}
        maxLength={maxLength}
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
