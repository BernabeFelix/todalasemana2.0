import express from 'express';
import { check, validationResult } from 'express-validator/check';

const router = express.Router();

const getRequiredErrorMsg = fieldName => `El campo ${fieldName} es requerido.`;
const pswdVal = (value, { req }) => value === req.body.password;

const validations = [
  check('firstName', getRequiredErrorMsg('nombre')).isString(),
  check('lastName', getRequiredErrorMsg('apellido')).isString(),
  check('address', getRequiredErrorMsg('dirección')).isString(),
  check('phone', getRequiredErrorMsg('teléfono')).isString(),
  check('service', getRequiredErrorMsg('servicio')).isString(),
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

const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (errors) {
    return res.status(400).json({
      code: 'invalid-fields',
      message: 'Por favor verifica los errores.',
      errors: errors.array()
    });
  }
  return next();
};

const save = (req, res) => {
  const emailVerified = false;
  const joined = Date.now();
  const client = {
    emailVerified, // Will we need it at some point?
    joined,
    ...req.body
  };
  // Save new client to database
  console.log(client);
  res.status(200).send({ status: 'ok', message: 'Usuario guardado.' });
};

router.post('/', validations, validate, save);

export default router;
