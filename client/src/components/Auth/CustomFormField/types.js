import { shape, func, bool, string } from 'prop-types';
import { Control } from '../types';

const CustomFieldType = {
  control: shape(Control).isRequired,
  onValidChange: func.isRequired,
  shouldValid: bool.isRequired,
  initialValue: string
};

export default CustomFieldType;
