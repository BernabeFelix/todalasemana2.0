import express from 'express';
import { validations, validate } from './validations';

const router = express.Router();

const save = (req, res) => {
  // TODO: resolve id...
  const id = '?';
  const created = Date.now();
  const promo = {
    id,
    created,
    ...req.body
  };

  // Save new promo to database
  console.log(promo);

  res.status(200).send({ status: 'ok', message: 'La promoción fue creada.' });
};

router.post('/', validations, validate, save);

export default router;
