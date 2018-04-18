import { check, validationResult } from 'express-validator/check';

const getRequiredErrorMsg = fieldName => `El campo ${fieldName} es requerido.`;

// TODO: move error messages into another file
export const validations = [
  check('title', getRequiredErrorMsg('título'))
    .isString()
    .isLength({ min: 10, max: 50 }) // not sure
    .withMessage('Por favor escribe entre 10 y 50 caracteres.'),
  check('description', getRequiredErrorMsg('descripción'))
    .isString()
    .isLength({ min: 10, max: 1000 }) // not sure
    .withMessage('Por favor escribe entre 10 y 1,000 caracteres.')
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
