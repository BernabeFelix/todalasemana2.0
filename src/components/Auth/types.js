import { string, shape } from 'prop-types';

const Errors = {
  required: string.isRequired
};

export const Fields = {
  name: string.isRequired,
  type: string.isRequired,
  floatingLabelText: string.isRequired
};

export const Control = {
  errors: shape(Errors).isRequired,
  fields: shape(Fields).isRequired
};

export const Input = {
  email: 'email',
  text: 'text'
};
