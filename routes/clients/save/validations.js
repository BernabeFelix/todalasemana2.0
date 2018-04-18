import { check, validationResult } from 'express-validator/check';

const getRequiredErrorMsg = fieldName => `El campo ${fieldName} es requerido.`;
const pswdVal = (value, { req }) => value === req.body.password;

// TODO: move error messages into another file
export const validations = [
  check('firstName', getRequiredErrorMsg('nombre')).isString(),
  check('lastName', getRequiredErrorMsg('apellido')).isString(),
  check('address', getRequiredErrorMsg('dirección')).isString(),
  check('phone', getRequiredErrorMsg('teléfono')).isString(),
  check('service', getRequiredErrorMsg('servicio')).isString(),
  check('email')
    .exists()
    .withMessage(getRequiredErrorMsg('correo electrónico'))
    .isEmail()
    .withMessage('El correo ingresado no es válido.'),
  check('id', 'El id es inválido.')
    .isString()
    .isLength({ min: 28, max: 28 })
    .withMessage('El id debe contener 28 caracteres.'),
  check('password', getRequiredErrorMsg('contraseña'))
    .isString()
    .isLength({ min: 6 })
    .withMessage('La contraseña debe contener al menos 6 caracteres.'),
  check('passwordConfirm', 'Las contraseñas no coinciden.')
    .exists()
    .custom(pswdVal)
];

export const validate = (req, res, next) => {
  let errors = validationResult(req);
  errors = errors ? errors.array({ onlyFirstError: true }) : [];
  if (errors.length > 0) {
    return res.status(400).json({
      code: 'invalid-fields',
      message: 'Por favor verifica los errores.',
      errors
    });
  }
  return next();
};
