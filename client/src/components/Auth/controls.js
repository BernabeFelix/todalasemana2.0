import { Input } from './types';

const controls = {
  password: {
    errors: {
      required: 'Ingrese una contraseña'
    },
    fields: {
      name: 'password',
      type: Input.password,
      floatingLabelText: 'contraseña'
    }
  },
  passwordConfirm: {
    errors: {
      required: 'Confirme su contraseña'
    },
    fields: {
      name: 'passwordConfirm',
      type: Input.password,
      floatingLabelText: 'confirmar contraseña'
    }
  },
  user: {
    errors: {
      required: 'Ingrese su correo electrónico'
    },
    fields: {
      name: 'user',
      type: Input.email,
      floatingLabelText: 'correo electronico'
    }
  },
  firstName: {
    errors: {
      required: 'Ingrese un nombre'
    },
    fields: {
      name: 'firstName',
      floatingLabelText: 'nombre'
    }
  },
  lastName: {
    errors: {
      required: 'Ingrese un apellido'
    },
    fields: {
      name: 'lastName',
      floatingLabelText: 'apellido'
    }
  },
  company: {
    errors: {
      required: 'Ingrese una empresa'
    },
    fields: {
      name: 'company',
      floatingLabelText: 'empresa'
    }
  },
  address: {
    errors: {
      required: 'Ingrese una dirección'
    },
    fields: {
      name: 'address',
      floatingLabelText: 'dirección'
    }
  },
  zipCode: {
    errors: {
      required: 'Ingrese un codigo postal'
    },
    fields: {
      name: 'zipCode',
      floatingLabelText: 'codigo postal'
    }
  },
  email: {
    errors: {
      required: 'Ingrese un correo electronico'
    },
    fields: {
      name: 'email',
      type: Input.email,
      floatingLabelText: 'correo electronico'
    }
  },
  phone: {
    errors: {
      required: 'Ingrese un telefono'
    },
    fields: {
      name: 'phone',
      floatingLabelText: 'telefono'
    }
  },
  service: {
    errors: {
      required: 'Ingrese un servicio'
    },
    fields: {
      name: 'service',
      floatingLabelText: 'servicio'
    }
  }
};

export default controls;
