import { Input } from './types';

const controls = {
  password: {
    errors: {
      required: 'Ingrese una contraseña'
    },
    fields: {
      name: 'password',
      type: Input.text,
      floatingLabelText: 'contraseña'
    }
  },
  user: {
    errors: {
      required: 'Ingrese una contraseña'
    },
    fields: {
      name: 'user',
      type: Input.text,
      floatingLabelText: 'correo electronico'
    }
  }
};

export default controls;
