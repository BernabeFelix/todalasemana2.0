import { Input } from '../../Auth/types';

const controls = {
  address: {
    errors: {
      required: 'Ingrese una dirección'
    },
    fields: {
      name: 'address',
      floatingLabelText: 'dirección'
    }
  },
  description: {
    errors: {
      required: 'Ingrese una descripción'
    },
    fields: {
      name: 'description',
      type: Input.text,
      floatingLabelText: 'descripción'
    }
  },
  title: {
    errors: {
      required: 'Ingrese un titulo'
    },
    fields: {
      name: 'title',
      type: Input.text,
      floatingLabelText: 'titulo'
    }
  }
};

export default controls;
