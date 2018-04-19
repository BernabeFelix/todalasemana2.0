import { TextField } from 'material-ui';
import React from 'react';
import { bool, number } from 'prop-types';
import CustomField from './CustomField';
import CustomFieldType from './types';

// Note: If something changes in this component, update SearchBox
const CustomTextField = ({ fullWidth, multiLine, maxLength, ...props }) => (
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
        fullWidth={fullWidth}
        floatingLabelStyle={{left: 0}}
      />
    )}
  </CustomField>
);

CustomTextField.defaultProps = {
  maxLength: 100,
  fullWidth: true,
  multiLine: false
};

CustomTextField.propTypes = {
  multiLine: bool,
  maxLength: number,
  fullWidth: bool,
  ...CustomFieldType
};

export default CustomTextField;
