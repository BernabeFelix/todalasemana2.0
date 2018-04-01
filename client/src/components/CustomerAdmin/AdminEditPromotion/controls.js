import { Input } from '../../Auth/types';

const controls = {
  title: {
    errors: {
      required: 'Ingrese un titulo'
    },
    fields: {
      name: 'title',
      type: Input.text,
      floatingLabelText: 'titulo'
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
  }
};

export default controls;
