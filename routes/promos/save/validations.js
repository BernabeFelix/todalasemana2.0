import { check, validationResult } from 'express-validator/check';
import path from 'path';

const getRequiredErrorMsg = fieldName => `El campo ${fieldName} es requerido.`;
const validImageExtensions = ['.jpg', '.png'];

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

const imageError = imageName => ({
  location: 'files',
  param: 'image',
  value: imageName,
  msg: 'Por favor elije una imagen para la promoción.'
});

export const validate = (req, res, next) => {
  let errors = validationResult(req);
  errors = errors ? errors.array({ onlyFirstError: true }) : [];

  // validate image
  if (req.files && req.files.image) {
    const imageName = req.files.image.name;
    const extension = imageName ? path.extname(imageName).toLowerCase() : '';
    if (validImageExtensions.indexOf(extension) > -1) {
      errors.push(imageError(imageName));
    }
  } else errors.push(imageError(null));

  if (errors.length > 0) {
    return res.status(400).json({
      code: 'invalid-fields',
      message: 'Por favor verifica los errores.',
      errors
    });
  }
  return next();
};
