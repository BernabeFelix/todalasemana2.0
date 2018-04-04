import { func, bool, shape, string } from 'prop-types';
import { Control } from '../types';
import requiredIf from '../../../utils/requiredIf';

const CustomFieldType = {
  control: shape(Control).isRequired,
  readOnly: bool,
  onValidChange: requiredIf(func, props => !props.readOnly),
  shouldValid: bool.isRequired,
  initialValue: string
};

export default CustomFieldType;
